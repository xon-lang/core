import {Array2, Boolean2, String2} from '../../../../lib/core';
import {TextResourceReference} from '../../../../util/resource/resource-reference';
import {$Semantic} from '../../../semantic';
import {TypeSemantic} from '../../type-semantic';

export interface IntersectionTypeSemantic extends TypeSemantic {
  $: $Semantic.INTERSECTION_TYPE;
  left: TypeSemantic;
  right: TypeSemantic;
}

export function intersectionTypeSemantic(
  reference: TextResourceReference,
  left: TypeSemantic,
  right: TypeSemantic,
): IntersectionTypeSemantic {
  const semantic: IntersectionTypeSemantic = {
    $: $Semantic.INTERSECTION_TYPE,
    reference,
    left,
    right,

    is(other: TypeSemantic): Boolean2 {
      return this.eq(other);
    },

    eq(other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): Record<String2, Array2<TypeSemantic>> {
      return {};
    },
  };

  return semantic;
}
