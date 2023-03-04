import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { LambdaExpressionTree } from '~/tree/expression/lambda/lambda-expression-tree';
import { evaluate } from '~/util/evaluate';
import { parseExpression } from '~/util/parse';

test('has argument', () => {
  const code = '[x] => x + 42';
  const tree = parseExpression(code) as LambdaExpressionTree;

  expect(tree).toBeInstanceOf(LambdaExpressionTree);
  expect(tree.parameters.length).toBe(1);
  expect((tree.parameters[0] as IdExpressionTree).name.text).toBe('x');
  expect(
    evaluate(tree.expression, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('generics', () => {
  const code = '{N,M ,K:String }[x] => x + 42';
  const tree = parseExpression(code) as LambdaExpressionTree;

  expect(tree).toBeInstanceOf(LambdaExpressionTree);
  expect(tree.generics.length).toBe(3);
  expect((tree.generics[0] as IdExpressionTree).name.text).toBe('N');
  expect((tree.generics[1] as IdExpressionTree).name.text).toBe('M');
  const kExpression = tree.generics[2] as InfixExpressionTree;
  expect(kExpression).toBeInstanceOf(InfixExpressionTree);
  expect((kExpression.left as IdExpressionTree).name.text).toBe('K');
  expect(kExpression.name.text).toBe(':');
  expect((kExpression.right as IdExpressionTree).name.text).toBe('String');
  expect(tree.parameters.length).toBe(1);
  expect((tree.parameters[0] as IdExpressionTree).name.text).toBe('x');
  expect(
    evaluate(tree.expression, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('no arguments', () => {
  const code = '[]=> 42+45';
  const tree = parseExpression(code) as LambdaExpressionTree;

  expect(tree).toBeInstanceOf(LambdaExpressionTree);
  expect(tree.parameters.length).toBe(0);
  expect(evaluate(tree.expression)).toBe(42 + 45);
});

test('method with method type', () => {
  const code = '[a] => [b, c] => 42+45';
  const tree = parseExpression(code) as LambdaExpressionTree;

  expect(tree).toBeInstanceOf(LambdaExpressionTree);
  expect(tree.parameters.length).toBe(1);
  expect(tree).toBeInstanceOf(LambdaExpressionTree);
  expect((tree.expression as LambdaExpressionTree).parameters.length).toBe(2);
  expect((tree.expression as LambdaExpressionTree).expression).toBeInstanceOf(InfixExpressionTree);
});
