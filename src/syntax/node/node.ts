import { Nothing, String2 } from '../../lib/core';
import { Semantic } from '../../semantic/semantic';
import { SourceRange } from '../../source/source-range';

export interface Node {
  readonly $: $Node;
  readonly range: SourceRange;
  semantic?: Semantic | Nothing;
}

export interface TokenNode extends Node {
  // todo remove it and get from range field to optimize memory
  readonly text: String2;
}

export interface SyntaxNode extends Node {
  readonly children: Node[];
}

export function addNodeParent(parent: SyntaxNode, ...children: (Node | null)[]): void {
  for (const node of children) {
    if (!node) {
      continue;
    }

    parent.children.push(node);
  }
}

export function isSyntaxNode(node: Node): node is SyntaxNode {
  // eslint-disable-next-line no-restricted-syntax
  return 'children' in node;
}

export enum $Node {
  NL = 'NL',

  WHITESPACE = 'WHITESPACE',
  JOINING = 'JOINING',

  ROOT = 'ROOT',
  // todo add comments and block comments
  COMMENT = 'COMMENT',

  INTEGER = 'INTEGER',
  FLOAT = 'FLOAT',
  CHAR = 'CHAR',
  STRING = 'STRING',

  OPERATOR = 'OPERATOR',

  ID = 'ID',
  OBJECT = 'OBJECT',
  ARRAY = 'ARRAY',
  GROUP = 'GROUP',

  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  COMMA = 'COMMA',

  INVOKE = 'INVOKE',
  INFIX = 'INFIX',
  POSTFIX = 'POSTFIX',
  PREFIX = 'PREFIX',

  STATEMENT = 'STATEMENT',
  UNKNOWN = 'UNKNOWN',
}
