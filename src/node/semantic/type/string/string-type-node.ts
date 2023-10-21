import { String2 } from '~/lib/core';
import { StringNode } from '~/node/lexical/string/string-node';
import { NodeType } from '~/node/node';
import { TypeNode } from '~/node/semantic/type/type-node';

export interface StringTypeNode extends TypeNode {
  $: NodeType.TYPE_STRING;
  node: StringNode | null;
  value: String2;
}

export function stringTypeNode(value: String2, node: StringNode | null): StringTypeNode {
  return {
    $: NodeType.TYPE_STRING,
    node,
    value,
  };
}

export function parseStringTypeNode(node: StringNode): StringTypeNode {
  return stringTypeNode(node.text.slice(1, -1), node);
}