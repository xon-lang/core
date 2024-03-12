import {
  CancellationToken,
  ExtensionContext,
  Hover,
  HoverProvider,
  MarkdownString,
  OutputChannel,
  Position,
  ProviderResult,
  TextDocument,
  languages,
} from 'vscode';
import {Nothing, String2, nothing} from '../../../../core/lib/core';
import {$Node, is} from '../../../../core/parser/node/node';
import {IdNode} from '../../../../core/parser/node/token/id/id-node';
import {OperatorNode} from '../../../../core/parser/node/token/operator/operator-node';
import {DeclarationSemantic} from '../../../../core/semantic/declaration/declaration-semantic';
import {$Semantic, Semantic, parseSemantic, semanticIs} from '../../../../core/semantic/semantic';
import {DeclarationTypeSemantic} from '../../../../core/semantic/type/declaration/declaration-type-semantic';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, findNodeBytPositionInSyntax, getDocumentSyntax} from '../../util';

export function configureHoverFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(languages.registerHoverProvider(LANGUAGE_NAME, new LanguageHoverProvider(channel)));
}

export class LanguageHoverProvider implements HoverProvider {
  constructor(private channel: OutputChannel) {}

  provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover> {
    const syntax = getDocumentSyntax(document);
    parseSemantic(syntax);
    const node = findNodeBytPositionInSyntax(syntax, position);

    if ((!is<IdNode>(node, $Node.ID) && !is<OperatorNode>(node, $Node.OPERATOR)) || !node.semantic) {
      return nothing;
    }

    const markdown = getSemanticHoverText(node.semantic);

    if (!markdown) {
      return nothing;
    }

    const range = convertRange(node.range);

    return new Hover(markdown, range);
  }
}

function getSemanticHoverText(semantic: Semantic): MarkdownString | Nothing {
  if (semanticIs<DeclarationSemantic>(semantic, $Semantic.DECLARATION)) {
    return getDeclarationMarkdown(semantic);
  }

  if (semanticIs<DeclarationTypeSemantic>(semantic, $Semantic.DECLARATION_TYPE)) {
    return getDeclarationMarkdown(semantic.declaration);
  }
}

function getDeclarationMarkdown(declaration: DeclarationSemantic): MarkdownString | Nothing {
  if (semanticIs<DeclarationSemantic>(declaration, $Semantic.DECLARATION)) {
    const text = `model ${declaration.name}`;

    return markdownCode(text);
  }
  return nothing;
}

function markdownCode(text: String2): MarkdownString {
  const markdown = new MarkdownString();
  markdown.appendCodeblock(text, LANGUAGE_NAME);

  return markdown;
}
