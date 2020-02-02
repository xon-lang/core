import { evalExpression, parseCode } from '../../../test-helper';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';
import { IfStatementTree } from './if-statement.tree';

test('if condition', () => {
    const code = 'if 12+45/9 { 12+45/5; } else if 2+2 { 2 * 4; }';
    const tree = parseCode(code, IfStatementTree);

    expect(evalExpression(tree.ifCondition)).toBe(12 + 45 / 9);
    expect(tree.ifStatements.length).toBe(1);
    const ifStatement = tree.ifStatements[0] as ExpressionStatementTree;
    expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);

    expect(evalExpression(tree.elseCondition)).toBe(2 + 2);
    expect(tree.elseStatements.length).toBe(1);
    const elseStatement = tree.elseStatements[0] as ExpressionStatementTree;
    expect(evalExpression(elseStatement.value)).toBe(2 * 4);
});
