import { Nothing, String2, nothing } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';
import { ValueSemantic } from '../value/value-semantic';

export interface GenericDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.GENERIC;
  base: ValueSemantic | Nothing;
  value: ValueSemantic | Nothing;
}

export function genericDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  base: ValueSemantic | Nothing,
  value: ValueSemantic | Nothing,
): GenericDeclarationSemantic {
  return {
    $: $Semantic.GENERIC,
    reference,
    name,
    usages: [],
    base,
    value,
  };
}

export function genericShallowDeclarationSemantic(
  reference: SourceReference,
  name: String2,
): GenericDeclarationSemantic {
  return {
    $: $Semantic.GENERIC,
    reference,
    name,
    usages: [],
    base: nothing,
    value: nothing,
  };
}
