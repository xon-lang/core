import { DeclarationNode } from '../../../../../syntax/node/declaration/declaration-node';
import { parseSyntax } from '../../../../../syntax/syntax';
import { ConstantSemantic } from '../../../../declaration/constant/constant-semantic';
import { $Semantic, parseSemantic } from '../../../../semantic';
import { DeclarationTypeSemantic } from '../../declaration/declaration-type-semantic';
import { UnionTypeSemantic } from './union-type-semantic';

test('a is integer', () => {
  const text = `
    model Integer
    model Float

    const a: Integer | Float
  `;
  const syntax = parseSyntax(text);
  const semantic = parseSemantic(syntax);

  expect(Object.keys(semantic.declarations).length).toBe(3);
  expect(semantic.declarations.a[0].$).toBe($Semantic.CONSTANT);
  expect(semantic.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[2].item as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.CONSTANT);

  const idSemantic = constNode.id?.semantic as ConstantSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type?.value?.semantic as UnionTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.UNION_TYPE);
  expect(typeSemantic.left.$).toBe($Semantic.DECLARATION_TYPE);
  expect((typeSemantic.left as DeclarationTypeSemantic).declaration.name).toBe('Integer');
  expect(typeSemantic.right.$).toBe($Semantic.DECLARATION_TYPE);
  expect((typeSemantic.right as DeclarationTypeSemantic).declaration.name).toBe('Float');
});