import { ExpressionTree } from '../../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../../tree/expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { LiteralHandler } from '../literal/literal-handler';
import { MetadataHandler } from '../metadata-handler';

export class ExpressionHandler extends MetadataHandler {
  handle(tree: ExpressionTree) {
    if (tree instanceof IdExpressionTree) {
      const declarationMetadata = this.scope.findDeclaration(tree.id.text);
      tree.typeMetadata = declarationMetadata.type;
      tree.id.declarationLink = declarationMetadata.id.sourceReference;
      return;
    }

    if (tree instanceof LiteralExpressionTree) {
      new LiteralHandler(this.scope).handle(tree.literal);
      tree.typeMetadata = tree.literal.typeMetadata;
      return;
    }

    throw new Error(`'${tree.constructor.name}' handler not found`);
  }
}
