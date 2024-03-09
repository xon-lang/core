import {Nothing, String2, nothing} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic} from '../../semantic';
import {TypeSemantic} from '../../type/type-semantic';
import {DeclarationSemantic} from '../declaration-semantic';
import {GenericSemantic} from '../generic/generic-semantic';
import {ParameterSemantic} from '../parameter/parameter-semantic';

export interface ConstantSemantic extends DeclarationSemantic {
  $: $Semantic.CONSTANT;
  generics: (GenericSemantic | Nothing)[] | Nothing;
  parameters: (ParameterSemantic | Nothing)[] | Nothing;
  type: TypeSemantic | Nothing;
}

export function constantSemantic(reference: SourceReference, name: String2): ConstantSemantic {
  return {
    $: $Semantic.CONSTANT,
    reference,
    usages: [],
    name,
    generics: nothing,
    parameters: nothing,
    type: nothing,
  };
}
