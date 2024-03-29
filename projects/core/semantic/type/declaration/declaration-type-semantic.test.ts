import {nothing} from '../../../lib/core';
import {DeclarationNode} from '../../../parser/node/declaration/declaration-node';
import {IdNode} from '../../../parser/node/token/id/id-node';
import {parseSyntax} from '../../../parser/syntax';
import {textResourceFrom} from '../../../util/resource/text/text-resource';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic, parseSemantic} from '../../semantic';
import {IntegerTypeSemantic} from '../integer/integer-type-semantic';
import {typeSemanticParse} from '../type-semantic-parser';
import {DeclarationTypeSemantic} from './declaration-type-semantic';

test('a is integer', () => {
  const text = `
    model Integer
    const a: Integer
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(2);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.VALUE_DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[1].declaration as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.VALUE_DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');
  expect((constNode.type as IdNode)?.text).toBe('Integer');
  expect((constNode.type as IdNode)?.semantic?.$).toBe($Semantic.DECLARATION_TYPE);

  const typeSemantic = (constNode.type as IdNode)?.semantic as DeclarationTypeSemantic;
  expect(typeSemantic.declaration?.$).toBe($Semantic.TYPE_DECLARATION);
});

test('a is array', () => {
  const text = `
    model Integer
    model Array{T}
    const a: Array{3}
  `;
  const resource = textResourceFrom(nothing, text);
  const syntax = parseSyntax(resource);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.VALUE_DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[2].declaration as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.VALUE_DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type) as DeclarationTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.DECLARATION_TYPE);
  expect(typeSemantic.declaration.$).toBe($Semantic.TYPE_DECLARATION);
  expect(typeSemantic.declaration.name).toBe('Array');
  expect(typeSemantic.generics?.length).toBe(1);
  expect((typeSemantic.generics?.at(0) as IntegerTypeSemantic).value).toBe(3);
});
