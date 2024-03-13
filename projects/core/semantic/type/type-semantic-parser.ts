import {Nothing, nothing} from '../../lib/core';
import {Node} from '../../parser/node/node';
import {SemanticContext} from '../semantic-context';
import {arrayTypeSemanticTryParse} from './array/array-type-semantic-parser';
import {declarationTypeSemanticTryParse} from './declaration/declaration-type-semantic-parser';
import {literalTypeSemanticTryParse} from './literal/literal-type-semantic-parser';
import {unionTypeSemanticTryParse} from './operator/union/union-type-semantic-parser';
import {rangeTypeSemanticTryParse} from './range/range-type-semantic-parser';
import {TypeSemantic} from './type-semantic';

type TypeSemanticTryParseFn = (context: SemanticContext, node: Node) => TypeSemantic | Nothing;

const typeParsers: TypeSemanticTryParseFn[] = [
  literalTypeSemanticTryParse,
  declarationTypeSemanticTryParse,
  rangeTypeSemanticTryParse,
  arrayTypeSemanticTryParse,
  unionTypeSemanticTryParse,
];

export function typeSemanticParse(context: SemanticContext, node: Node | Nothing): TypeSemantic | Nothing {
  if (!node) {
    return nothing;
  }

  return typeParsers.findMap((x) => x(context, node));
}
