import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {IntegerNode} from '../integer/integer-node';
import {UnknownNode} from './unknown-node';

test('unknown 1', () => {
  const text = '123 §•∞•456';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node0 = statements[0].item as IntegerNode;
  const node1 = statements[0].children[1] as UnknownNode;

  expect(statements.length).toBe(1);
  expect(node0.$).toBe($Node.INTEGER);
  expect(node0.text).toBe('123');
  expect(node0.hiddenNodes.length).toBe(1);
  expect(node0.hiddenNodes[0].text).toBe(' ');

  expect(node1.text).toBe('§•∞•');
});

test('unknown 2', () => {
  const text = 'ºª¶';
  const resource = textResourceFrom(nothing, text);
  const syntax = parseSyntax(resource);
  const statements = syntax.statements;
  const node = statements[0].item as UnknownNode;

  expect(statements.length).toBe(1);
  expect(syntax.issueManager.issues.length).toBe(1);
  expect(resource.getRangeText(syntax.issueManager.issues[0].range)).toBe('ºª¶');
  expect(node.text).toBe('ºª¶');
});
