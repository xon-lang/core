import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {CloseNode} from './close-node';

test('close paren', () => {
  const text = ')';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as CloseNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.CLOSE);
  expect(node.text).toBe(')');
});
