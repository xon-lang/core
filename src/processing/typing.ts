/* eslint-disable no-param-reassign */
import { ArrayExpressionTree } from '../tree/expression/array-expression/array-expression.tree';
import { LiteralExpressionTree } from '../tree/expression/literal-expression/literal-expression.tree';
import { BooleanLiteralTree } from '../tree/literal/boolean-literal/boolean-literal.tree';
import { CharLiteralTree } from '../tree/literal/char-literal/char-literal.tree';
import { FloatLiteralTree } from '../tree/literal/float-literal/float-literal.tree';
import { IntegerLiteralTree } from '../tree/literal/integer-literal/integer-literal.tree';
import { StringLiteralTree } from '../tree/literal/string-literal/string-literal.tree';
import { createArrayType, createPlainType, createUnionType } from '../tree/type/type-helper';

export function processLiteralExpression(tree: LiteralExpressionTree): void {
  if (tree.literal instanceof BooleanLiteralTree) tree.dataType = createPlainType('Boolean');
  if (tree.literal instanceof IntegerLiteralTree) tree.dataType = createPlainType('Integer');
  if (tree.literal instanceof FloatLiteralTree) tree.dataType = createPlainType('Float');
  if (tree.literal instanceof CharLiteralTree) tree.dataType = createPlainType('Char');
  if (tree.literal instanceof StringLiteralTree) tree.dataType = createPlainType('String');
}

export function processArrayExpression(tree: ArrayExpressionTree): void {
  if (tree.items.length) {
    const firstItemType = tree.items[0].dataType;
    if (tree.items.every((x) => x.dataType.equals(firstItemType)))
      tree.dataType = createArrayType(firstItemType);
    else tree.dataType = createUnionType(tree.items.map((x) => x.dataType));
  }
}
