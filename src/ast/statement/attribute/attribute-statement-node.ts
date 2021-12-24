import { AttributeStatementContext } from '../../../grammar/xon-parser';
import { BodyNode } from '../../body/body-node';
import { getBodyNode } from '../../body/body-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { IdNode } from '../../id/id-node';
import { getIdNode } from '../../id/id-node-helper';
import { SourceReference } from '../../util/source-reference';
import { StatementNode } from '../statement-node';

export class AttributeStatementNode implements StatementNode {
  sourceReference: SourceReference;
  modifier?: Modifier;
  id: IdNode;
  type?: ExpressionNode;
  body?: BodyNode;

  constructor(ctx: AttributeStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.modifier = (ctx.modifier() && Modifier[ctx.modifier().text]) || null;
    this.id = getIdNode(ctx.id());
    this.type = getExpressionNode(ctx.expr()) || null;
    this.body = getBodyNode(ctx.body()) || null;
  }

  toString(): string {
    throw new Error('Not implemented');
  }
}

export enum Modifier {
  class,
  interface,
  object,
}
