import { LiteralTree } from '../../../tree/literal/literal.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';

export class LiteralTypeMetadata extends TypeMetadata {
  declaration: ClassDeclarationMetadata;

  constructor(public name: string, public value: number | string, public scope: DeclarationScope) {
    super();
    this.declaration = scope.get(name) as ClassDeclarationMetadata;
  }

  static fromTree(tree: LiteralTree, scope: DeclarationScope) {
    const name = tree.constructor.name.replace('LiteralTree', '');
    const metadata = new LiteralTypeMetadata(name, tree.value, scope);
    return metadata;
  }
}
