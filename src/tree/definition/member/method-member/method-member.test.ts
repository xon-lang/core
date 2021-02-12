import { parseMember } from '../../../../parse';
import { MethodMemberTree } from './method-member.tree';

test('method member', () => {
  const code = 'func_name(arg1 Integer, arg2 Float, arg3 String) String:\n    log(222)';
  const tree = parseMember<MethodMemberTree>(code);

  expect(tree.name).toBe('func_name');
  expect(tree.isAbstract).toBe(false);
  expect(tree.returnType?.name).toBe('String');
  expect(tree.args.length).toBe(3);

  expect(tree.args[0].name).toBe('arg1');
  expect(tree.args[0].type.name).toBe('Integer');

  expect(tree.args[1].name).toBe('arg2');
  expect(tree.args[1].type.name).toBe('Float');

  expect(tree.args[2].name).toBe('arg3');
  expect(tree.args[2].type.name).toBe('String');
});

test('abstract method member', () => {
  const code = 'func_name(a Integer) String';
  const tree = parseMember<MethodMemberTree>(code);

  expect(tree.name).toBe('func_name');
  expect(tree.isAbstract).toBe(true);
  expect(tree.returnType?.name).toBe('String');

  expect(tree.args.length).toBe(1);
  expect(tree.args[0].name).toBe('a');
  expect(tree.args[0].type.name).toBe('Integer');
});

test('no return type', () => {
  const code = 'func_name(a Integer)';
  const tree = parseMember<MethodMemberTree>(code);

  expect(tree.name).toBe('func_name');
  expect(tree.isAbstract).toBe(true);
  expect(tree.returnType).toBeFalsy();

  expect(tree.args.length).toBe(1);
  expect(tree.args[0].name).toBe('a');
  expect(tree.args[0].type.name).toBe('Integer');
});
