import {sourceFromText} from '../../../../source/source';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {ImportNode} from './import-node';

test('negative integer', () => {
  const text = 'import "xon/core"';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as ImportNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.IMPORT);
  expect(node.operator.text).toBe('import');
  expect(node.location.$).toBe($Node.STRING);
  expect(node.location.value).toBe('xon/core');
});
