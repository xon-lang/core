import { CallExpressionTree } from '../../../tree/expression/call/call-expression.tree';
import { MemberExpressionTree } from '../../../tree/expression/member/member-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { LambdaTypeMetadata } from '../../type/lambda/lambda-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class CallExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: CallExpressionTree, scope: DeclarationScope) {
    super();

    const expressionParameters = tree.arguments
      .map((x) => getExpressionMetadata(x, scope))
      .map((x) => x.type);
    if (tree.instance instanceof MemberExpressionTree) {
      const instanceType = getExpressionMetadata(tree.instance.instance, scope).type;
      const typeArguments = tree.instance.typeArguments.map((x) => getTypeMetadata(x, scope));
      const attribute = instanceType.declaration.attribute(
        tree.instance.id.text,
        typeArguments,
        expressionParameters,
        null,
      );
      this.type = (attribute.type(typeArguments) as LambdaTypeMetadata).resultType;
    } else {
      const instanceType = getExpressionMetadata(tree.instance, scope).type;
      if (!(instanceType instanceof LambdaTypeMetadata))
        throw new Error(`Instance type is not a method but '${instanceType.constructor.name}'`);

      this.type = instanceType.resultType;
    }
  }
}
