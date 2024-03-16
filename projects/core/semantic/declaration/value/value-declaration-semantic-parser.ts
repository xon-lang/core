import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {Node} from '../../../parser/node/node';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {rangeFromNodes} from '../../../source/source-range';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {typeSemanticParse} from '../../type/type-semantic-parser';
import {valueSemanticParse} from '../../value/value-semantic-parser';
import {declarationsParse} from '../declaration-semantic-parser';
import {ValueDeclarationSemantic} from './value-declaration-semantic';

export function valueDeclarationDeepParse(
  context: SemanticContext,
  node: DeclarationNode,
): ValueDeclarationSemantic | Nothing {
  const semantic = node.id.semantic;

  if (!semanticIs<ValueDeclarationSemantic>(semantic, $Semantic.VALUE_DECLARATION)) {
    return nothing;
  }

  const childContext = context.createChildContext();

  if (node.generics) {
    genericsParse(childContext, semantic, node.generics);
  }

  // if (node.parameters) {
  //   parametersParse(childContext, semantic, node.parameters);
  // }

  if (node.type) {
    typeParse(childContext, semantic, node.type);
  }

  if (node.value) {
    valueParse(childContext, semantic, node.value);
  }

  if (node.attributes.length > 0) {
    attributesParse(childContext, semantic, node.attributes);
  }

  return semantic;
}

function genericsParse(
  context: SemanticContext,
  declaration: ValueDeclarationSemantic,
  nodes: (DeclarationNode | Nothing)[],
): Nothing {
  // todo remove this hack 'as ValueDeclarationSemantic[]'
  declaration.generics = declarationsParse(context, nodes) as ValueDeclarationSemantic[];
}

function typeParse(context: SemanticContext, declaration: ValueDeclarationSemantic, node: Node): Nothing {
  const type = typeSemanticParse(context, node);

  if (type) {
    declaration.type = type;
  } else {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.cannotResolveType());
  }
}

function valueParse(context: SemanticContext, declaration: ValueDeclarationSemantic, node: Node): Nothing {
  // todo depends on declaration kind (e.g. generic or const) ???
  const value = valueSemanticParse(context, node);

  if (!declaration.type) {
    if (value?.type) {
      declaration.type = value.type;
    }
  } else if (!value?.type || !value.type.is(declaration.type)) {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.wrongType());
  }
}

function attributesParse(
  context: SemanticContext,
  declaration: ValueDeclarationSemantic,
  nodes: DeclarationNode[],
): Nothing {
  const range = rangeFromNodes(nodes.map((x) => x.id));
  context.issueManager.addError(range, ISSUE_MESSAGE.noAttributesAllowed());
}
