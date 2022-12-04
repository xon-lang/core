import { InvokeExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ArgumentTree } from '~/tree/argument/argument-tree';
import { getArgumentTree } from '~/tree/argument/argument-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';

export class InvokeExpressionTree extends ExpressionTree {
  ctx: InvokeExpressionContext;
  sourceSpan: SourceSpan;
  instance: ExpressionTree;
  arguments: ArgumentTree[];
  open: Token;
  close: Token;

  constructor(ctx: InvokeExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expression());
    this.arguments = ctx.arguments().argument().map(getArgumentTree);
    this.open = Token.from(ctx.arguments().OPEN());
    this.close = Token.from(ctx.arguments().CLOSE());
    this.addChildren(this.instance, ...this.arguments);
  }
}
