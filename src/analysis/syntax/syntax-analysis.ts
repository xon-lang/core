import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { CloseNode } from '~/analysis/lexical/node/close/close-node';
import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { IntegerNode } from '~/analysis/lexical/node/integer/integer-node';
import { OpenNode } from '~/analysis/lexical/node/open/open-node';
import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { Node, NodeType } from '~/analysis/node';
import { arrayNode, ArrayNode } from '~/analysis/syntax/node/array/array-node';
import { bodyNode, BodyNode } from '~/analysis/syntax/node/body/body-node';
import { floatNode, FloatNode } from '~/analysis/syntax/node/float/float-node';
import { infixNode, InfixNode } from '~/analysis/syntax/node/infix/infix-node';
import { invokeNode } from '~/analysis/syntax/node/invoke/invoke-node';
import { ladderNode } from '~/analysis/syntax/node/ladder/ladder-node';
import { memberNode, MemberNode } from '~/analysis/syntax/node/member/member-node';
import { PostfixNode, postfixNode } from '~/analysis/syntax/node/postfix/postfix-node';
import { prefixNode, PrefixNode } from '~/analysis/syntax/node/prefix/prefix-node';
import { OperatorsOrder, operatorsOrders, OperatorType, RecursiveType } from '~/analysis/syntax/operators';
import { Boolean2, Integer, String2 } from '~/lib/core';
import { Source } from '~/source/source';

export function parseBody(source: Source): BodyNode {
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.nodes();
  const parser = new SyntaxAnalysis(tokens, operatorsOrders);
  return parser.parse();
}

export function parseExpression(source: Source): Node {
  const { nodes } = parseBody(source);
  if (nodes.length !== 1) {
    throw new Error('Not implemented');
  }
  return nodes[0];
}

export function is<T extends Node = Node>(node: Node, nodeType: NodeType | String2): node is T {
  if (nodeType === NodeType.TOKEN) {
    return node?.type.split('-')[1] === NodeType.TOKEN;
  }
  return node?.type === nodeType;
}

export class SyntaxAnalysis {
  constructor(public tokens: LexicalNode[], public operatorsOrders: OperatorsOrder[]) {}

  public parse(): BodyNode {
    const filteredNodes = this.tokens.filter((node) => node.type !== NodeType.JOINING);
    collapseArrays(filteredNodes);
    const normalizedSplitted = normalizeSplittedNodes(filteredNodes);
    const result = collapseBody(normalizedSplitted);

    return result;
  }
}

function collapseBody(splitNodes: { indent: Integer; node: Node }[]): BodyNode {
  if (splitNodes.length === 0) {
    throw new Error('Not implemented');
  }

  const bodyNodes: Node[] = [];
  const bodyIndent = splitNodes[0].indent;

  for (let i = 0; i < splitNodes.length; i++) {
    const { indent, node } = splitNodes[i];
    if (indent === bodyIndent) {
      bodyNodes.push(node);
      continue;
    }
    if (indent > bodyIndent) {
      const innerIndentNodes = takeWhile(splitNodes, (x) => x.indent > bodyIndent, i);

      const header = bodyNodes[bodyNodes.length - 1];
      const body = collapseBody(innerIndentNodes);
      bodyNodes[bodyNodes.length - 1] = ladderNode(header, body);
      i = i + innerIndentNodes.length - 1; // because of loop make i++
      continue;
    }
  }
  return bodyNode(bodyNodes);
}

function collapseArrays(nodes: Node[]): void {
  const openNodes: OpenNode[] = nodes
    .filter((node) => is<OpenNode>(node, NodeType.OPEN))
    .reverse()
    .map((x) => x as OpenNode);

  for (const openNode of openNodes) {
    const closeNode = nodeAfter(nodes, openNode, NodeType.CLOSE);
    if (!closeNode || !is<CloseNode>(closeNode, NodeType.CLOSE)) {
      throw new Error('No close pair node');
    }

    const betweenNodes = nodesBetween(nodes, openNode, closeNode);
    const parameters = splitNodes(betweenNodes, NodeType.COMMA)
      .map((nodes) => {
        const normalizedSplitted = normalizeSplittedNodes(nodes);
        return collapseBody(normalizedSplitted);
      })
      .map((node) => {
        if (is<BodyNode>(node, NodeType.BODY)) {
          if (node.nodes.length === 1) {
            return node.nodes[0];
          }
        }
        throw new Error('Not implemented');
      });

    const result = arrayNode(openNode, closeNode, parameters);
    replaceNodes(nodes, openNode, closeNode, result);
  }
}

function collapseOperatorsOrders(nodes: Node[], operatorsOrders: OperatorsOrder[]): Node[] {
  for (const operatorsOrder of operatorsOrders) {
    if (operatorsOrder.operatorType === OperatorType.MODIFIER) {
      collapseModifier(nodes, operatorsOrder.operators[0].split(' '), operatorsOrder.recursiveType);
    }
    if (operatorsOrder.operatorType === OperatorType.INVOKE) {
      collapseInvoke(nodes);
    }
    for (const operators of operatorsOrder.operators) {
      const operatorsStrings = operators.split(' ');
      const operatorIndex = findOperatorIndex(
        nodes,
        operatorsStrings,
        operatorsOrder.operatorType,
        operatorsOrder.recursiveType,
      );
      if (operatorIndex >= 0) {
        collapseOperators(nodes, operatorsOrder.operatorType, operatorIndex);
        collapseOperatorsOrders(nodes, operatorsOrders);
      }
    }
  }
  return nodes;
}

function collapseModifier(nodes: Node[], operators: String2[], recursiveType: RecursiveType): void {
  for (let i = 0; i < nodes.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : nodes.length - i - 1;
    const modifier = nodes[index];
    if (is<OperatorNode>(modifier, NodeType.OPERATOR) && operators.includes(modifier.text)) {
      const next = nodes[index + 1];
      if (is<LexicalNode>(next, NodeType.TOKEN)) {
        nodes[index] = {
          type: NodeType.PREFIX,
          start: modifier.start,
          stop: next.stop,
          operator: modifier,
          value: next,
        } as PrefixNode;
        nodes.splice(index + 1, 1);
        collapseModifier(nodes, operators, recursiveType);

        return;
      }
    }
  }
}

function collapseInvoke(nodes: Node[]): void {
  for (let i = 0; i < nodes.length; i++) {
    const element = nodes[i];
    if (is<ArrayNode>(element, NodeType.ARRAY) && i > 0) {
      const prev = nodes[i - 1];
      if (!is(prev, NodeType.OPERATOR)) {
        nodes[i] = invokeNode(prev, element);
        nodes.splice(i - 1, 1);
        collapseInvoke(nodes);

        return;
      }
    }
  }
}

function findOperatorIndex(
  nodes: Node[],
  operators: String2[],
  operatorType: OperatorType,
  recursiveType: RecursiveType,
): Integer {
  for (let i = 0; i < nodes.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : nodes.length - i - 1;

    const operator = nodes[index];

    if (is<OperatorNode>(operator, NodeType.OPERATOR) && operators.includes(operator.text)) {
      const left = nodes[index - 1];
      const right = nodes[index + 1];

      if (operatorType === OperatorType.PREFIX) {
        if (!is(right, NodeType.OPERATOR) && (index === 0 || is(left, NodeType.OPERATOR))) {
          return index;
        }
      } else if (operatorType === OperatorType.POSTFIX) {
        if (!is(left, NodeType.OPERATOR) && (index === nodes.length - 1 || is(right, NodeType.OPERATOR))) {
          return index;
        }
      } else if (operatorType === OperatorType.INFIX) {
        if (!is(left, NodeType.OPERATOR) && !is(right, NodeType.OPERATOR)) {
          return index;
        }
      }
    }
  }

  return -1;
}

function collapseOperators(nodes: Node[], operatorType: OperatorType, operatorIndex: Integer): void {
  if (operatorIndex < 0) return;
  const operator = nodes[operatorIndex];
  if (!is<OperatorNode>(operator, NodeType.OPERATOR)) return;

  if (operatorType === OperatorType.PREFIX) {
    const right = nodes[operatorIndex + 1];

    if (!right) {
      throw new Error('Not implemented');
    }

    const prefix = prefixOperator(operator, right);
    nodes[operatorIndex] = prefix;
    nodes.splice(operatorIndex + 1, 1);

    return;
  }

  if (operatorType === OperatorType.POSTFIX) {
    const left = nodes[operatorIndex - 1];

    if (!left) {
      throw new Error('Not implemented');
    }

    const postfix = postfixOperator(operator, left);
    nodes[operatorIndex] = postfix;
    nodes.splice(operatorIndex - 1, 1);

    return;
  }

  if (operatorType === OperatorType.INFIX) {
    const left = nodes[operatorIndex - 1] as Node;
    const right = nodes[operatorIndex + 1] as Node;

    if (!left || !right) {
      throw new Error('Not implemented');
    }

    const infix = infixOperator(operator, left, right);
    nodes[operatorIndex] = infix;
    nodes.splice(operatorIndex - 1, 1);
    nodes.splice(operatorIndex, 1);
  }
}

function normalizeSplittedNodes(nodes: Node[]): { indent: Integer; node: Node }[] {
  const nlSplitted = splitNodes(nodes, NodeType.NL);

  if (nlSplitted.length === 0) {
    return [];
  }

  const firstNode = nlSplitted[0][0] as LexicalNode;
  const minIndent = is(firstNode, NodeType.WHITESPACE) ? firstNode.stop - firstNode.stop + 1 : 0;

  const result = nlSplitted
    .map((nodes) => {
      const firstNode = nodes[0] as LexicalNode;
      const indent = is(firstNode, NodeType.WHITESPACE) ? firstNode.stop - firstNode.stop + 1 : 0;
      return {
        indent: indent <= minIndent ? 0 : indent,
        nodes: nodes.filter((node) => node.type !== NodeType.WHITESPACE),
      };
    })
    .filter((x) => x.nodes.length > 0)
    .map((x) => {
      const collapsedNodes = collapseOperatorsOrders(x.nodes, operatorsOrders);
      if (collapsedNodes.length !== 1) {
        throw new Error('Not implemented');
      }
      return {
        indent: x.indent,
        node: collapsedNodes[0],
      };
    });

  return result;
}

function splitNodes(nodes: Node[], splitNodeType: NodeType): Node[][] {
  const result: Node[][] = [];
  let chunk: Node[] = [];

  for (const node of nodes) {
    if (is(node, splitNodeType)) {
      if (chunk.length > 0) {
        result.push(chunk);
        chunk = [];
      }
    } else {
      chunk.push(node);
    }
  }
  if (chunk.length > 0) {
    result.push(chunk);
  }

  return result;
}

function nodesBetween(nodes: Node[], start: Node, stop: Node): Node[] {
  const result: Node[] = [];

  const startIndex = nodes.indexOf(start);
  const stopIndex = nodes.indexOf(stop);

  for (let i = startIndex + 1; i < stopIndex; i++) {
    result.push(nodes[i]);
  }
  return result;
}

function nodeAfter(nodes: Node[], node: Node, nodeType: NodeType): Node | null {
  const nodeIndex = nodes.indexOf(node);

  for (let i = nodeIndex + 1; i < nodes.length; i++) {
    if (is(nodes[i], nodeType)) {
      return nodes[i];
    }
  }
  return null;
}

function replaceNodes(nodes: Node[], start: Node, stop: Node, node: Node): void {
  const startIndex = nodes.indexOf(start);
  const stopIndex = nodes.indexOf(stop);

  nodes.splice(startIndex, stopIndex - startIndex + 1, node);
}

function takeWhile<T>(elements: T[], predicate: (element: T) => Boolean2, startIndex = 0): T[] {
  const result: T[] = [];

  for (let i = startIndex; i < elements.length; i++) {
    const element = elements[i];
    if (predicate(element)) {
      result.push(element);
      continue;
    }
    break;
  }

  return result;
}

function prefixOperator(operator: OperatorNode, value: Node): PrefixNode {
  return prefixNode(operator, value);
}

function postfixOperator(operator: OperatorNode, value: Node): PostfixNode {
  return postfixNode(operator, value);
}

function infixOperator(operator: OperatorNode, left: Node, right: Node): InfixNode | FloatNode | MemberNode {
  if (
    operator.text === '.' &&
    is<IntegerNode>(left, NodeType.INTEGER) &&
    (is<IntegerNode>(right, NodeType.INTEGER) || is<IdNode>(right, NodeType.ID))
  ) {
    return floatNode(operator, left, right);
  }

  if ((operator.text === '.' || operator.text === '::') && is<IdNode>(right, NodeType.ID)) {
    return memberNode(operator, left, right);
  }
  return infixNode(operator, left, right);
}