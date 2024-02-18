import { evaluate } from '../../../util/evaluate';
import { parse } from '../../syntax';
import { $Node } from '../node';
import { PostfixNode } from './postfix-node';

test('after integer', () => {
  const text = '1!';
  const nodes = parse(text).statements.map((x) => x.item);
  const node = nodes[0] as PostfixNode;

  expect(node.$).toBe($Node.POSTFIX);
  expect(node.operator.text).toBe('!');
  expect(evaluate(node.value)).toBe(1);
});
