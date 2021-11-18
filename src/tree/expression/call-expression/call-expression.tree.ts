import { CallExpressionContext, IndexExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionsTrees, getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class CallExpressionTree extends ExpressionTree {
  instance: ExpressionTree;
  arguments: ExpressionTree[];
  isIndexCall: boolean

  constructor(public ctx?: CallExpressionContext | IndexExpressionContext) {
    super();
    if (!ctx) return;

    this.arguments = getExpressionsTrees(ctx.functionArguments().expression());
    this.instance = getExpressionTree(ctx.expression());
  }

  toString(): string {
    return `${this.instance}(${this.arguments.join(', ')})`;
  }
}
