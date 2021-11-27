import { ParenthesizedExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class ParenthesizedExpressionTree extends ExpressionTree {
  metadata: ExpressionMetadata;
  value: ExpressionTree;

  constructor(public ctx?: ParenthesizedExpressionContext) {
    super();
    if (!ctx) return;

    this.value = getExpressionTree(ctx.expression());
  }

  static fromValue(value: ExpressionTree): ParenthesizedExpressionTree {
    const expression = new ParenthesizedExpressionTree();
    expression.value = value;
    return expression;
  }

  toString(): string {
    return `(${this.value})`;
  }
}
