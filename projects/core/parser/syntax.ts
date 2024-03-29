import {formatLastContextHiddenNodes} from '../formatter/formatter';
import {ISSUE_MESSAGE} from '../issue/issue-message';
import {Array2, Boolean2, Nothing, nothing} from '../lib/core';
import {TextResource} from '../util/resource/text/text-resource';
import {TextResourcePosition, zeroPosition} from '../util/resource/text/text-resource-position';
import {$Node, Node, is} from './node/node';
import {scanGroupNode} from './node/syntax/group/group-node';
import {scanCharNode} from './node/token/char/char-node';
import {scanCloseNode} from './node/token/close/close-node';
import {scanCommentBlockNode} from './node/token/comment-block/comment-block-node';
import {scanCommentLineNode} from './node/token/comment-line/comment-line-node';
import {scanIdNode} from './node/token/id/id-node';
import {scanIntegerNode} from './node/token/integer/integer-node';
import {scanJoiningNode} from './node/token/joining/joining-node';
import {NlNode, scanNlNode} from './node/token/nl/nl-node';
import {scanOperatorNode} from './node/token/operator/operator-node';
import {scanStringNode} from './node/token/string/string-node';
import {isHiddenToken} from './node/token/token-node';
import {UnknownNode, scanUnknownNode} from './node/token/unknown/unknown-node';
import {scanWhitespaceNode} from './node/token/whitespace/whitespace-node';
import {SyntaxContext, syntaxContext} from './syntax-context';
import {SyntaxResult} from './syntax-result';
import {putStatementNode} from './util/put-statement-node';

type SyntaxScanFn = (context: SyntaxContext) => Node | Nothing;

const scanFunctions: Array2<SyntaxScanFn> = [
  scanCommentBlockNode,
  scanCommentLineNode,
  scanIntegerNode,
  scanStringNode,
  scanCharNode,
  scanNlNode,
  scanCloseNode,
  scanJoiningNode,
  scanWhitespaceNode,
  scanOperatorNode,
  scanIdNode,
  // todo should we remove scan group from here ???
  scanGroupNode,
  scanUnknownNode,
];

export function parseSyntax(source: TextResource): SyntaxResult {
  const result = parseSyntaxUntil(source, zeroPosition(), nothing);

  return result;
}

export function parseSyntaxUntil(
  resource: TextResource,
  startPosition: TextResourcePosition,
  breakOnNodeFn: ((node: Node) => Boolean2) | Nothing,
): SyntaxResult {
  const context = syntaxContext(resource, startPosition);

  while (context.position.index < context.resource.data.length) {
    const node = nextNode(context);

    if (!node) {
      continue;
    }

    if (breakOnNodeFn && breakOnNodeFn(node)) {
      context.breakNode = node;

      break;
    }

    const lastNode = context.nodes.last();

    if (is<UnknownNode>(node, $Node.UNKNOWN)) {
      if (is<UnknownNode>(lastNode, $Node.UNKNOWN) && lastNode.hiddenNodes.length === 0) {
        lastNode.range.stop = node.range.stop;
        lastNode.text += node.text;

        continue;
      }

      context.issueManager.addError(node.range, ISSUE_MESSAGE.unknownTokens());
    }

    if (is<NlNode>(node, $Node.NL) && context.nodes.length > 0) {
      putStatementNode(context);

      context.hiddenNodes.push(node);
      context.nodes = [];

      continue;
    }

    if (isHiddenToken(node)) {
      const hiddenNodes = lastNode?.hiddenNodes ?? context.hiddenNodes;
      hiddenNodes.push(node);

      continue;
    }

    context.nodes.push(node);
  }

  if (context.nodes.length > 0) {
    putStatementNode(context);
  }

  const formatter = formatLastContextHiddenNodes(context);

  if (formatter) {
    context.formatterManager.addFormatter(formatter);
  }

  return {
    ...context,
    syntaxContext: context,
  };
}

function nextNode(context: SyntaxContext): Node {
  const node = scanFunctions.findMap((scan) => scan(context));

  if (node) {
    context.position.index = node.range.stop.index;
    context.position.line = node.range.stop.line;
    context.position.column = node.range.stop.column;

    return node;
  }

  throw new Error('Unexpected Node');
}
