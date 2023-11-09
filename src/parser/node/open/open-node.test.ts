import { GroupNode } from '~/parser/node/group/group-node';
import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';

test('open paren', () => {
  const code = '(';
  const source = Source.fromText(code);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse().statements[0];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.GROUP);
  expect((nodes[0] as GroupNode).open.$).toBe(NodeType.OPEN);
  expect((nodes[0] as GroupNode).open.text).toBe('(');
  expect((nodes[0] as GroupNode).close).toBe(null);
});

test('open bracket', () => {
  const code = '[';
  const source = Source.fromText(code);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse().statements[0];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.GROUP);
  expect((nodes[0] as GroupNode).open.$).toBe(NodeType.OPEN);
  expect((nodes[0] as GroupNode).open.text).toBe('[');
  expect((nodes[0] as GroupNode).close).toBe(null);
});

test('open brace', () => {
  const code = '{';
  const source = Source.fromText(code);
  const lexer = new Parser(source.text);
  const { nodes } = lexer.parse().statements[0];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.GROUP);
  expect((nodes[0] as GroupNode).open.$).toBe(NodeType.OPEN);
  expect((nodes[0] as GroupNode).open.text).toBe('{');
  expect((nodes[0] as GroupNode).close).toBe(null);
});