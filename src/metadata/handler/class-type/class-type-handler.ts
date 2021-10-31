import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { FunctionTypeMetadata } from '../../type/function-type/function-type-metadata';
import { AttributeHandler } from '../attribute/attribute-handler';
import { HandlerScope } from '../handler-scope';
import { MetadataHandler } from '../metadata-handler';

export class ClassTypeHandler extends MetadataHandler {
  public constructor(scope: HandlerScope = null) {
    super(new HandlerScope(scope || new HandlerScope()));
  }

  handle(tree: ClassDefinitionTree) {
    tree.id.declarationLink = tree.id.sourceReference
    tree.typeMetadata = new FunctionTypeMetadata
    for (const attribute of tree.attributes) {
      new AttributeHandler(this.scope).handle(attribute.attribute);
    }
  }
}
