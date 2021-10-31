import { AttributeStatementTree } from '../../../tree/statement/attribute-statement/attribute-statement.tree';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { StatementTree } from '../../../tree/statement/statement.tree';
import { AttributeHandler } from '../attribute/attribute-handler';
import { ExpressionHandler } from '../expression/expression-handler';
import { MetadataHandler } from '../metadata-handler';

export class StatementHandler extends MetadataHandler {
  handle(tree: StatementTree) {
    if (tree instanceof ExpressionStatementTree) {
      new ExpressionHandler(this.scope).handle(tree.expression);
      return;
    }
    if (tree instanceof AttributeStatementTree) {
      new AttributeHandler(this.scope).handle(tree.attribute);
      return;
    }

    throw new Error(`'${tree.constructor.name}' handler not found`);
  }
}
