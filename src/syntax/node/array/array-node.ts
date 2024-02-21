import { rangeFromNodes } from '../../../source/source-range';
import '../../../util/extension';
import { CloseNode } from '../close/close-node';
import { $Node, Node, SyntaxNode, addNodeParent } from '../node';
import { OpenNode } from '../open/open-node';

export interface ArrayNode extends SyntaxNode {
  $: $Node.ARRAY;
  open: OpenNode;
  close: CloseNode | null;
  items: Node[];
}

export function arrayNode(open: OpenNode, close: CloseNode | null, items: Node[]): ArrayNode {
  const lastStatement = items.lastOrNull();

  const node: ArrayNode = {
    $: $Node.ARRAY,
    // todo fix it
    range: rangeFromNodes(open, close ?? lastStatement ?? open),
    children: [],
    open,
    close,
    items,
  };

  addNodeParent(node, open, ...items, close);

  return node;
}