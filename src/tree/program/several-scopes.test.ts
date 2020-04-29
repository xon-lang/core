import { testXonFIle } from '../../test-helper';
import { FunctionStatementTree } from '../statement/function-statement/function-statement.tree';
import { ProgramTree } from './program.tree';

testXonFIle(ProgramTree, (tree) => {
    expect(tree.statements.length).toBe(3);

    const function1 = tree.statements[0] as FunctionStatementTree;
    expect(function1.value.name).toBe('firstScope');
    expect(function1.value.args.length).toBe(0);
    expect(function1.value.statements.length).toBe(2);

    const function2 = tree.statements[1] as FunctionStatementTree;
    expect(function2.value.name).toBe('secondScope');
    expect(function2.value.args.length).toBe(0);
    expect(function2.value.statements.length).toBe(1);

    const innerScope = function2.value.statements[0] as FunctionStatementTree;
    expect(innerScope.value.name).toBe('innerScope');

    const function3 = tree.statements[2] as FunctionStatementTree;
    expect(function3.value.name).toBe('thirdWithArgs');
    expect(function3.value.args.length).toBe(2);
});
