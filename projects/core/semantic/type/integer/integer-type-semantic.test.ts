import {nothing} from '../../../lib/core';
import {DeclarationNode} from '../../../parser/node/declaration/declaration-node';
import {parseSyntax} from '../../../parser/syntax';
import {textResourceFrom} from '../../../util/resource/text/text-resource';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic, parseSemantic} from '../../semantic';
import {TEST_SEMANTIC_CONFIG} from '../../semantic-config';
import {typeSemanticParse} from '../type-semantic-parser';
import {IntegerTypeSemantic} from './integer-type-semantic';

test('a is integer', () => {
  const text = `
    const a: 123
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.VALUE_DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[0].declaration as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.VALUE_DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type) as IntegerTypeSemantic;
  expect(typeSemantic?.$).toBe($Semantic.INTEGER_TYPE);
  expect(typeSemantic?.value).toBe(123);
});
