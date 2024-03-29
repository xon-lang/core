import {Array2, Boolean2, Nothing, String2, nothing} from '../../../lib/core';
import {TextResourceReference} from '../../../util/resource/resource-reference';
import {$Semantic} from '../../semantic';
import {TypeSemantic} from '../../type/type-semantic';
import {DeclarationSemantic} from '../declaration-semantic';
import {ValueDeclarationSemantic} from '../value/value-declaration-semantic';

export interface TypeDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.TYPE_DECLARATION;
  baseType: TypeSemantic | Nothing;
  attributes: Record<String2, Array2<ValueDeclarationSemantic>>;

  eq(other: DeclarationSemantic): Boolean2;
}

export function typeDeclarationSemantic(
  reference: TextResourceReference,
  modifier: String2 | Nothing,
  name: String2,
): TypeDeclarationSemantic {
  return {
    $: $Semantic.TYPE_DECLARATION,
    reference,
    modifier,
    name,
    usages: [reference],
    generics: nothing,
    baseType: nothing,
    attributes: {},

    eq(other: DeclarationSemantic): Boolean2 {
      return this.reference.eq(other.reference);
    },
  };
}
