import { ClassDefinitionContext } from '../../../grammar/xon-parser';
import { AbstractAttributeTree } from '../../attribute/abstract/abstract-attribute-tree';
import { AttributeTree } from '../../attribute/attribute-tree';
import { getAttributesTrees } from '../../attribute/attribute-tree.helper';
import { MethodAttributeTree } from '../../attribute/method/method-attribute-tree';
import { ValueAttributeTree } from '../../attribute/value/value-attribute-tree';
import { getExpressionParametersTrees } from '../../expression-parameter/expression-parameter-tree.helper';
import { ExpressionParameterTree } from '../../expression-parameter/expression-parameter.tree';
import { IdToken } from '../../id-token';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { DefinitionAncestorTree } from '../definition-ancestor-tree';
import { DefinitionTree } from '../definition-tree';

export class ClassDefinitionTree extends DefinitionTree {
  id: IdToken;
  typeParameters: TypeParameterTree[] = [];
  expressionParameters: ExpressionParameterTree[] = [];
  ancestor?: DefinitionAncestorTree;
  attributes: AttributeTree[] = [];

  constructor(public ctx: ClassDefinitionContext) {
    super();

    this.id = new IdToken(ctx._name);
    this.typeParameters = getTypeParametersTrees(ctx.typeParameters());
    this.expressionParameters = getExpressionParametersTrees(ctx.methodParameters());
    const ancestor = ctx.definitionAncestor();
    this.ancestor = (ancestor && new DefinitionAncestorTree(ancestor)) || null;
    this.attributes = getAttributesTrees(ctx.attribute());
  }

  toString(): string {
    const typeParameters = this.typeParameters.length
      ? '<' + this.typeParameters.join(', ') + '>'
      : '';
    const expressionParameters = this.expressionParameters.length
      ? '(' + this.expressionParameters.join(', ') + ')'
      : '';
    const ancestor = this.ancestor ? ' ' + this.ancestor.toString() : '';
    const abstractAttributes = this.attributes
      .filter((x) => x instanceof AbstractAttributeTree)
      .join('\n');
    const valueAttributes = this.attributes
      .filter((x) => x instanceof ValueAttributeTree)
      .join('\n');
    const methodAttributes = this.attributes
      .filter((x) => x instanceof MethodAttributeTree && !x.modifiers.length)
      .join('\n\n');
    const operatorAttributes = this.attributes
      .filter((x) => x instanceof MethodAttributeTree && x.modifiers.length)
      .join('\n\n');
    const attributes = [abstractAttributes, valueAttributes, methodAttributes, operatorAttributes]
      .filter((x) => x)
      .join('\n\n')
      .replace(/(^[^\n])/gm, '  $1');
    return `${this.id}${typeParameters}${expressionParameters}${ancestor}\n${attributes}`;
  }
}
