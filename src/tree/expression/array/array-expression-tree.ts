import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTrees } from '../expression-tree-helper';

export class ArrayExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;
  items: ExpressionTree[];

  constructor(ctx: ArrayExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.items = getExpressionTrees(ctx.expr());
  }

  toString(): string {
    return `[${this.items.join(', ')}]`;
  }
}
