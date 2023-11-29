import { String2 } from '~/lib/core';
import { Node } from '~/parser/node/node';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { postfixNode } from '~/parser/node/postfix/postfix-node';
import { prefixNode } from '~/parser/node/prefix/prefix-node';
import { ParserContext } from '~/parser/parser-context';
import { handleInfix } from '~/parser/util/handle-infix';
import { OperatorType, RecursiveType } from '~/parser/util/operators';
import { NodeType } from '../node/node-type';
import { is } from './is';

export function collapseOperator(
  context: ParserContext,
  operators: String2[],
  operatorType: OperatorType,
  recursiveType: RecursiveType,
): Node | null {
  for (let i = 0; i < context.nodes.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : context.nodes.length - i - 1;
    const operator = context.nodes[index];

    if (!is<OperatorNode>(operator, NodeType.OPERATOR) || !operators.includes(operator.text)) {
      continue;
    }

    const left = context.nodes[index - 1];
    const right = context.nodes[index + 1];

    if (
      operatorType === OperatorType.PREFIX &&
      !is(right, NodeType.OPERATOR) &&
      (index === 0 || is(left, NodeType.OPERATOR))
    ) {
      const prefix = prefixNode(operator, right);
      context.nodes[index] = prefix;
      context.nodes.splice(index + 1, 1);

      return prefix;
    }

    if (
      operatorType === OperatorType.POSTFIX &&
      !is(left, NodeType.OPERATOR) &&
      (index === context.nodes.length - 1 || is(right, NodeType.OPERATOR))
    ) {
      const postfix = postfixNode(operator, left);
      context.nodes[index] = postfix;
      context.nodes.splice(index - 1, 1);

      return postfix;
    }

    if (operatorType === OperatorType.INFIX && !is(left, NodeType.OPERATOR) && !is(right, NodeType.OPERATOR)) {
      const infix = handleInfix(context, operator, left, right);
      context.nodes[index] = infix;
      context.nodes.splice(index - 1, 1);
      context.nodes.splice(index, 1);

      return infix;
    }
  }

  return null;
}
