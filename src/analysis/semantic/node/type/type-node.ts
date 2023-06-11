import { Node, NodeType } from '~/analysis/node';
import { DataType } from '~/analysis/semantic/data-type';

export interface TypeNode extends Node {
  $: NodeType.TYPE;
  node: Node;
  dataType: DataType;
}

export function typeNode(node: Node, dataType: DataType): TypeNode {
  return {
    $: NodeType.TYPE,
    node,
    dataType,
  };
}