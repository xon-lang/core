import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {$Node, Node, is} from '../../../parser/node/node';
import {IntegerNode} from '../../../parser/node/token/integer/integer-node';
import {DeclarationKind} from '../../declaration-manager';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {IntegerTypeSemantic, integerTypeSemantic} from './integer-type-semantic';

export function integerTypeSemanticTryParse(context: SemanticContext, node: Node): IntegerTypeSemantic | Nothing {
  if (!is<IntegerNode>(node, $Node.INTEGER)) {
    return nothing;
  }

  const declaration = context.declarationManager.single(
    DeclarationKind.TYPE,
    context.config.literalTypeNames.integerTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !semanticIs<TypeDeclarationSemantic>(declaration, $Semantic.TYPE_DECLARATION)) {
    context.issueManager.addError(
      node.range,
      ISSUE_MESSAGE.declarationNotFound(context.config.literalTypeNames.integerTypeName),
    );

    return nothing;
  }

  const reference = context.createReference(node);
  const semantic = integerTypeSemantic(reference, declaration, node.value);

  return semantic;
}
