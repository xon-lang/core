import { LiteralTypeContext } from '../../../grammar/xon-parser';
import { getLiteralTree } from '../../literal/literal-helper';
import { LiteralTree } from '../../literal/literal.tree';
import { TypeTree } from '../type.tree';

export class LiteralTypeTree extends TypeTree {
  public literal: LiteralTree;

  public constructor(public ctx?: LiteralTypeContext) {
    super();
    if (!ctx) return;

    this.literal = getLiteralTree(ctx.literal());
  }

  public equals(other: TypeTree): boolean {
    return other instanceof LiteralTypeTree && this.literal.value === other.literal.value;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public replaceGenerics(_map: Map<string, string> = new Map()): LiteralTypeTree {
    const type = new LiteralTypeTree();
    type.literal = this.literal;
    return type;
  }
}
