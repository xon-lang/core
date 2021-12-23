import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { InfixExpressionNode } from '../infix/infix-expression-node';
import { ParenthesizedExpressionNode } from './parenthesized-expression-node';

test('one parenthesized expression', () => {
  const code = '(1+1)';
  const node = parseExpression(code);
  expect(node).toBeInstanceOf(ParenthesizedExpressionNode);

  expect((node as ParenthesizedExpressionNode).expression).toBeInstanceOf(InfixExpressionNode);
});

test('several parenthesized expression', () => {
  const code = '(((123)))';
  const node = parseExpression(code);
  expect(node).toBeInstanceOf(ParenthesizedExpressionNode);

  expect(evalExpression(node)).toBe(123);
});
