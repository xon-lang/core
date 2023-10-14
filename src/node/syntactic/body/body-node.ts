import { NodeType } from '~/node/node';
import { StatementNode } from '~/node/syntactic/statement/statement-node';
import { SyntacticNode } from '~/node/syntactic/syntactic-node';

export interface BodyNode extends SyntacticNode {
  $: NodeType.BODY;
  statements: StatementNode[];
}

export function bodyNode(statements: StatementNode[]): BodyNode {
  const first = statements.firstOrNull()?.nodes.firstOrNull();
  const last = statements.lastOrNull()?.nodes.lastOrNull();

  return {
    $: NodeType.BODY,
    start: first?.start ?? 0,
    stop: last?.stop ?? first?.stop ?? 0,
    statements,
  };
}