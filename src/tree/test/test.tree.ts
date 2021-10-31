import { TestContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionTree } from '../expression/expression-tree.helper';
import { ExpressionTree } from '../expression/expression.tree';
import { getStatements } from '../statement/statement-tree.helper';
import { StatementTree } from '../statement/statement.tree';

export class TestTree extends BaseTree {
  public expression?: ExpressionTree;
  public body?: StatementTree[];

  public constructor(public ctx?: TestContext) {
    super();
    if (!ctx) return;

    this.expression = getExpressionTree(ctx.expression()) || null;
    this.body = getStatements(ctx.body());
  }
}
