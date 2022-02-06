import { FactoryStatementContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { IdTree } from '../../id/id-tree';
import { getIdTree } from '../../id/id-tree-helper';
import { ParameterTree } from '../../parameter/parameter-tree';
import { getParameterTrees } from '../../parameter/parameter-tree-helper';
import { StatementTree } from '../statement-tree';

export class FactoryStatementTree implements StatementTree {
  sourceReference: SourceReference;
  id: IdTree;
  parameters: ParameterTree[] = [];
  attributes: ParameterTree[] = [];

  constructor(ctx: FactoryStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.id = getIdTree(ctx._name);
    this.parameters = getParameterTrees(ctx.parameters()?.parameter());
    this.attributes = getParameterTrees(ctx.definitionBody()?.parameter());
  }

  toString(): string {
    const parameters = '(' + this.parameters.join(', ') + ')';

    const body =
      (this.attributes.length && '\n' + this.attributes.join('\n').replace(/^(.+\S)/gm, '  $1')) ||
      '';
    const header = ['factory', this.id + parameters].filter(Boolean).join(' ');

    return header + body;
  }
}