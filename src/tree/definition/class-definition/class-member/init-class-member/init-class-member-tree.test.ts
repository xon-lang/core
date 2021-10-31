import { CallExpressionTree } from '../../../../expression/call-expression/call-expression.tree';
import { IdExpressionTree } from '../../../../expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../../../../expression/literal-expression/literal-expression.tree';
import { parseClassMember } from '../../../../parse';
import { ExpressionStatementTree } from '../../../../statement/expression-statement/expression-statement.tree';
import { InitClassMemberTree } from './init-class-member-tree';

test('method member', () => {
  const code = 'init:\n    log (222)';
  const tree = parseClassMember<InitClassMemberTree>(code);
  expect(tree).toBeInstanceOf(InitClassMemberTree);

  expect(tree.body.length).toBe(1);
  const statement = tree.body[0] as ExpressionStatementTree;
  const expression = statement.expression as CallExpressionTree;
  expect(expression).toBeInstanceOf(CallExpressionTree);
  expect(expression.arguments.length).toBe(1);
  expect((expression.arguments[0].value as LiteralExpressionTree).literal.value).toBe(222);

  const idExpression = expression.instance as IdExpressionTree;
  expect(idExpression.id.text).toBe('log');
});
