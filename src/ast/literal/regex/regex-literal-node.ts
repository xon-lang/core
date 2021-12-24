import { RegexLiteralContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../util/source-reference';
import { LiteralNode } from '../literal-node';

export class RegexLiteralNode implements LiteralNode {
  sourceReference: SourceReference;
  value: RegExp;
  pattern: string;

  constructor(ctx: RegexLiteralContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.pattern = ctx.text.slice(1, -1).replace(/\\\//g, '/');
    this.value = new RegExp(this.pattern, 'g');
  }

  toString(): string {
    return `\`${this.pattern}\``;
  }
}
