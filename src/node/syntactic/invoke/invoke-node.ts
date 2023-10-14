import { Node, NodeType } from '~/node/node';
import { GroupNode } from '~/node/syntactic/group/group-node';
import { SyntacticNode } from '~/node/syntactic/syntactic-node';

export interface InvokeNode extends SyntacticNode {
  $: NodeType.INVOKE;
  instance: Node;
  group: GroupNode;
}

export function invokeNode(instance: SyntacticNode, group: GroupNode): InvokeNode {
  return {
    $: NodeType.INVOKE,
    start: instance.start,
    stop: group.stop,
    instance,
    group,
  };
}