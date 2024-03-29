import {Nothing, String2, nothing} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {STRING_QUOTE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface StringNode extends TokenNode {
  $: $Node.STRING;
  value: String2;
}

export function stringNode(range: TextResourceRange, text: String2): StringNode {
  const lastIndex = text.length > 1 && text.last() === STRING_QUOTE ? -1 : text.length;
  const value = text.slice(1, lastIndex);

  return tokenNode($Node.STRING, {range, text, value});
}

export function scanStringNode(context: SyntaxContext): StringNode | Nothing {
  const {resource: source, position} = context;

  if (source.data[position.index] === STRING_QUOTE) {
    const stopIndex = source.data.indexOf(STRING_QUOTE, position.index + STRING_QUOTE.length);
    const endSlice = stopIndex < 0 ? source.data.length : stopIndex + STRING_QUOTE.length;

    const text = source.data.slice(position.index, endSlice);
    const range = context.getRange(text.length, true);

    return stringNode(range, text);
  }

  return nothing;
}
