import { LadderNode } from '~/node/ladder/ladder-node';
import { NodeType } from '~/node/node';
import { parseNode } from '~/parser/parser';

test('single expression', () => {
  const code = 'abc\n  a = 1';
  const tree = parseNode(code) as LadderNode;

  expect(tree.nodeType).toBe(NodeType.LADDER);
  expect(tree.header.nodeType).toBe(NodeType.ID);
  expect(tree.header.text).toBe('abc');
  expect(tree.body.source.nodes.length).toBe(1);
});
