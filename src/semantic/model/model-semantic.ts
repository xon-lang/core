import { Nothing, String2, nothing } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { GenericSemantic } from '../generic/generic-semantic';
import { MethodSemantic } from '../method/method-semantic';
import { $Semantic, DeclarationSemantic } from '../semantic';
import { ValueSemantic } from '../value/value-semantic';

export interface ModelSemantic extends DeclarationSemantic {
  $: $Semantic.MODEL;
  generics: (GenericSemantic | Nothing)[];
  base: ValueSemantic | Nothing;
  attributes: Record<String2, MethodSemantic[]>;
}

export function modelSemantic(
  reference: SourceReference,
  name: String2,
  generics: (GenericSemantic | Nothing)[],
  base: ValueSemantic | Nothing,
  attributes: Record<String2, MethodSemantic[]>,
): ModelSemantic {
  return {
    $: $Semantic.MODEL,
    reference,
    name,
    usages: [],
    generics,
    base,
    attributes,
  };
}

export function modelShallowSemantic(reference: SourceReference, name: String2): ModelSemantic {
  return {
    $: $Semantic.MODEL,
    reference,
    name,
    usages: [],
    generics: [],
    base: nothing,
    attributes: {},
  };
}
