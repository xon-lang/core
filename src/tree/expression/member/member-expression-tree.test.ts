import { parseExpression } from '../../../util/parse';
import { IdExpressionTree } from '../id/id-expression-tree';
import { MemberExpressionTree } from './member-expression-tree';

test('not safe', () => {
  const code = 'abc.def';
  const tree = parseExpression(code) as MemberExpressionTree;
  expect(tree).toBeInstanceOf(MemberExpressionTree);

  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
  expect((tree.instance as IdExpressionTree).name.text).toBe('abc');
  expect(tree.name.text).toBe('def');
});

test('instance dot nl property', () => {
  const code = 'abc.\ndef';
  const tree = parseExpression(code) as MemberExpressionTree;
  expect(tree).toBeInstanceOf(MemberExpressionTree);

  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
  expect((tree.instance as IdExpressionTree).name.text).toBe('abc');
  expect(tree.name.text).toBe('def');
});

test('instance nl dot property', () => {
  const code = 'abc\n.def';
  const tree = parseExpression(code) as MemberExpressionTree;
  expect(tree).toBeInstanceOf(MemberExpressionTree);

  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
  expect((tree.instance as IdExpressionTree).name.text).toBe('abc');
  expect(tree.name.text).toBe('def');
});

test('instance nl dot nl property', () => {
  const code = 'abc\n.\ndef';
  const tree = parseExpression(code) as MemberExpressionTree;
  expect(tree).toBeInstanceOf(MemberExpressionTree);

  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
  expect((tree.instance as IdExpressionTree).name.text).toBe('abc');
  expect(tree.name.text).toBe('def');
});
