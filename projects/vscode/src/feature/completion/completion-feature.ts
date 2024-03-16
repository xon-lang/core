import {ExtensionContext, languages, OutputChannel} from 'vscode';
// import { CommaCompletionItemProvider } from './comma-completion-feature';
import {LANGUAGE_NAME} from '../../config';
import {DotCompletionItemProvider} from './items/dot-completion-feature';

export function configureCompletionFeature(context: ExtensionContext, channel: OutputChannel) {
  const dotCompletion = languages.registerCompletionItemProvider(
    LANGUAGE_NAME,
    new DotCompletionItemProvider(channel),
    ...['.'],
  );
  //   const commaCompletion = languages.registerCompletionItemProvider(
  //     LANGUAGE_NAME,
  //     new CommaCompletionItemProvider(channel),
  //     ...[',', ' ']
  //   );
  context.subscriptions.push(dotCompletion); //, commaCompletion);
}