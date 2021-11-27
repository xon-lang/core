import { IdTypeContext } from '../../../grammar/xon-parser';
import { TypeMetadata } from '../../../metadata/type/type-metadata';
import { IdToken } from '../../id-token';
import { getTypesTrees } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class IdTypeTree extends TypeTree {
  name: string;
  id: IdToken;
  typeArguments: TypeTree[] = [];
  metadata: TypeMetadata;

  constructor(public ctx?: IdTypeContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.id = new IdToken(ctx._name);
    this.typeArguments = getTypesTrees(ctx.typeArguments()?.type());
  }

  toString(): string {
    const typeParameters = this.typeArguments.join(', ');
    if (this.typeArguments.length) return `${this.name}<${typeParameters}>`;
    return this.name;
  }
}
