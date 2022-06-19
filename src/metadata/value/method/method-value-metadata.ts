import { Any } from '../../../lib/core';
import { MethodExpressionTree } from '../../../tree/expression/method/method-expression-tree';
import { getParameterMetadata } from '../../declaration/parameter/parameter-metadata-helper';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { MethodTypeMetadata } from '../../type/method/method-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { getValueMetadata } from '../value-metadata-helper';

export class MethodValueMetadata extends ValueMetadata {
  constructor(private tree: MethodExpressionTree, private scope: DeclarationScope) {
    super();
    tree.parameters.forEach((x) => (x.metadata = getParameterMetadata(x, scope)[0]));
    const innerScope = scope.create();
    tree.parameters.forEach((x) => innerScope.add(x.metadata));
    tree.value.metadata = () => getValueMetadata(tree.value, innerScope);
  }

  type(): TypeMetadata {
    const metadata = this.tree.value.metadata();
    return new MethodTypeMetadata(
      () => this.tree.parameters.map((x) => x.metadata),
      () => {
        if (metadata instanceof ValueMetadata) {
          return metadata.type();
        }
        throw new Error('Not implemented');
      },
    );
  }

  eval(): Any {
    throw new Error('Not implemented');
  }
}
