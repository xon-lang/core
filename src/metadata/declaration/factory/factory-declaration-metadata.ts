import { FactoryStatementTree } from '../../../tree/statement/factory/factory-statement-tree';
import { SourceReference } from '../../../util/source-reference';
import { DeclarationScope } from '../../scope/declaration-scope';
import { DeclarationMetadata } from '../declaration-metadata';
import { ModelDeclarationMetadata } from '../model/model-declaration-metadata';
import { ParameterDeclarationMetadata } from '../parameter/parameter-declaration-metadata';

export class FactoryDeclarationMetadata implements DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;

  constructor(private node: FactoryStatementTree, private scope: DeclarationScope) {
    this.sourceReference = node.sourceReference;
    this.name = node.id.name.text;
  }

  attributes(): ParameterDeclarationMetadata[] {
    return this.baseModel().attributes();
  }

  baseModel(): ModelDeclarationMetadata {
    return this.scope.findModel(this.node.id.name.text);
  }

  is(metadata: DeclarationMetadata): boolean {
    return this.sourceReference.equals(metadata.sourceReference) || this.baseModel().is(metadata);
  }
}
