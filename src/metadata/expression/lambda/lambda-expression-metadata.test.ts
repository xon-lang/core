import { parseExpression } from '../../../tree/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { LambdaTypeMetadata } from '../../type/lambda/lambda-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('lambda', () => {
  const code = '(x String): x + x';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(LambdaTypeMetadata);
});
