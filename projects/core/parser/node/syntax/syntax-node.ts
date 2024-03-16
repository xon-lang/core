import {Nothing, String2} from '../../../lib/core';
import {rangeFromNodes} from '../../../source/source-range';
import {$Node, Node} from '../node';

export interface SyntaxNode extends Node {
  readonly children: Node[];
}

export function syntaxNode<T extends Record<String2, Node | Node[] | Nothing>, V extends $Node>(
  $: V,
  nodes: T,
): SyntaxNode & {$: typeof $} & T {
  const children = Object.values(nodes).flatMap(flatNodes);
  const first = children.first()!;
  const last = children.last()!;
  const range = rangeFromNodes([first, last]);

  const node = {
    $,
    range,
    children: children,
    hiddenNodes: last.hiddenNodes,
    ...nodes,
  };

  last.hiddenNodes = [];
  children.forEach((x) => (x.parent = node));

  return node;
}

function flatNodes(nodes: Node | Node[] | Nothing): Node[] {
  if (!nodes) {
    return [];
  }

  if (Array.isArray(nodes)) {
    return nodes.filter((x) => x);
  }

  return [nodes];
}