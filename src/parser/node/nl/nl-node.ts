import { Integer, String2 } from '~/lib/core';
import { Parser } from '~/parser/parser';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface NlNode extends TokenNode {
  $: NodeType.NL;
}

export function nlNode(start: Integer, stop: Integer, text: String2): NlNode {
  return {
    $: NodeType.NL,
    start,
    stop,
    text,
  };
}

const LF = '\n';
const CR = '\r';
const CRLF = CR + LF;

export function scanNlNode({ text, index }: Parser): NlNode | null {
  if (text[index] === LF) {
    return nlNode(index, index, LF);
  }

  if (text[index] === CR) {
    if (text[index + 1] === LF) {
      return nlNode(index, index + 1, CRLF);
    }

    return nlNode(index, index, CR);
  }

  return null;
}
