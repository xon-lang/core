import {Boolean2, String2} from '../../lib/core';
import {Semantic} from '../semantic';

export interface TypeSemantic extends Semantic {
  attributes(): Record<String2, TypeSemantic[]>;

  is(other: TypeSemantic): Boolean2;
  eq(other: TypeSemantic): Boolean2;
}

export function isTypeSemantic(semantic: Semantic): semantic is TypeSemantic {
  // todo remove this hack
  return semantic.$.endsWith('_TYPE');
}
