import { Integer } from '~/lib/core';
import { Node } from '~/parser/node/node';
import { NodeType } from '../node/node-type';
import { is } from './is';

export function getStatementIndent(nodes: Node[]): Integer | null {
  return 0
  // const whitespaceTokens = nodes
  //   .firstOrNull()
  //   ?.hidden.takeWhile((x) => is(x, NodeType.WHITESPACE) || is(x, NodeType.COMMENT))
  //   .filter((x) => is(x, NodeType.WHITESPACE));

  // return whitespaceTokens?.sum((x) => x.stop - x.start + 1) ?? null;
}
