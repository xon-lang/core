import { String2 } from '@/lib/core';
import { DeclarationMetadata } from '@/metadata/declaration/declaration-metadata';
import { Tree } from '@/tree/tree';
import { SourceRange } from '@/util/source-range';
import { Token } from 'antlr4ts';

export class IdTree extends Tree {
  sourceRange: SourceRange;
  metadata: DeclarationMetadata;
  text: String2;

  constructor(token: Token) {
    super();
    this.sourceRange = SourceRange.fromToken(token);
    this.text = token.text;
  }

  toString(): String2 {
    return this.text;
  }
}
