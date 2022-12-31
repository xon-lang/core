import { ArgumentTree } from '~/tree/argument/argument-tree';
import { IntegerExpressionTree } from '~/tree/expression/integer/integer-expression-tree';
import { parseArgument } from '~/util/parse';

test('id value', () => {
  const code = 'a = 1';
  const tree = parseArgument(code);

  expect(tree).toBeInstanceOf(ArgumentTree);
  expect(tree.name?.text).toBe('a');
  expect((tree.value as IntegerExpressionTree).value).toBe(1);
});

test('only value', () => {
  const code = '1';
  const tree = parseArgument(code);

  expect(tree).toBeInstanceOf(ArgumentTree);
  expect((tree.value as IntegerExpressionTree).value).toBe(1);
});