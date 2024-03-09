import {Boolean2, String2} from '../../lib/core';
import {Semantic} from '../semantic';

export interface TypeSemantic extends Semantic {
  attributes(): Record<String2, TypeSemantic[]>;
  eq(type: TypeSemantic): Boolean2;
  is(type: TypeSemantic): Boolean2;
}
