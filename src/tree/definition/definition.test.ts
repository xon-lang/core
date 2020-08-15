import { BaseTypes } from '../../base-types';
import { parseFile } from '../../test-helper';
import { FunctionExpressionTree } from '../expression/function-expression/function-expression.tree';
import { IdExpressionTree } from '../expression/id-expression/id-expression.tree';
import { DefinitionTree } from './definition.tree';

test('definition', () => {
    const tree = parseFile('./definition.test.xon', DefinitionTree);
    console.log(tree.toJson())
    expect(tree).toBeInstanceOf(DefinitionTree);
    expect(tree.name).toBe('SomeClass');

    expect(tree.properties.length).toBe(3);
    expect(tree.properties[0].name).toBe('property');
    expect(tree.properties[0].type.asSimple.name).toBe('str');
    expect(tree.properties[0].value).toBeUndefined();
    expect(tree.properties[1].name).toBe('anotherProp');
    expect(tree.properties[1].value.getType()).toBe(BaseTypes.Integer);
    expect(tree.properties[1].value.eval()).toBe(234);
    expect(tree.properties[2].name).toBe('typed_value');
    expect(tree.properties[2].type.asSimple.name).toBe('number');
    expect(tree.properties[2].value.eval()).toBe(1);

    expect(tree.methods.length).toBe(2);
    expect(tree.methods[0].name).toBe('method');
    expect(tree.methods[0].args.length).toBe(0);
    expect(tree.methods[0].statements.length).toBe(2);
    expect(tree.methods[0].statements[0].asExpression()).toBeInstanceOf(FunctionExpressionTree);
    expect(tree.methods[0].statements[1].asExpression()).toBeInstanceOf(FunctionExpressionTree);
    expect(tree.methods[1].name).toBe('location');
    expect(tree.methods[1].args.length).toBe(2);
    expect(tree.methods[1].args[0].name).toBe('x');
    expect(tree.methods[1].args[0].type.asSimple.name).toBe('num');
    expect(tree.methods[1].args[0].value).toBeUndefined();
    expect(tree.methods[1].args[1].name).toBe('y');
    expect(tree.methods[1].args[1].type.asSimple.name).toBe('num');
    expect(tree.methods[1].args[1].value.eval()).toBe(6);
    expect(tree.methods[1].statements.length).toBe(1);
    expect(tree.methods[1].statements[0].asExpression()).toBeInstanceOf(FunctionExpressionTree);
    const innerMethod = tree.methods[1].statements[0].asExpression() as FunctionExpressionTree;
    const functionExpression = innerMethod.object as IdExpressionTree;
    expect(functionExpression.id).toBe('coord');
    expect(innerMethod.args.length).toBe(2);
});
