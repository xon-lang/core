import { Integer, String2 } from '~/lib/core';
import { NonHiddenLexicalNode } from '~/parser/node/lexical-node';
import { LexicalAnalysis } from '~/parser/parser';
import { NodeType } from '../node-type';

export interface CommaNode extends NonHiddenLexicalNode {
  $: NodeType.COMMA;
}

export function commaNode(start: Integer, stop: Integer, text: String2): CommaNode {
  return {
    $: NodeType.COMMA,
    hidden: [],
    start,
    stop,
    text,
  };
}

const COMMA = ',';

export function scanCommaNode({ text, index }: LexicalAnalysis): CommaNode | null {
  if (text[index] === COMMA) {
    return commaNode(index, index, COMMA);
  }

  return null;
}
