import { LoopStatementTree } from '../../../tree/statement/loop-statement/loop-statement.tree';
import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { createPlainType } from '../../../tree/type/type-helper';
import { TypeTree } from '../../../tree/type/type.tree';
import { getExpressionInference } from '../../expression/expression-inference.helper';
import { ExpressionInference } from '../../expression/expression.inference';
import { GenericsMap } from '../../generics-map';
import { addToScope, popScope, pushScope } from '../../id-scope';
import { getStatementInference } from '../statement-inference.helper';
import { StatementInference } from '../statement.inference';

export class LoopStatementInference extends StatementInference {
  public index: { name: string; type: TypeTree };

  public value: { name: string; type: TypeTree };

  public expression: ExpressionInference;

  public body: StatementInference[];

  public constructor(public tree: LoopStatementTree, public genericsMap: GenericsMap) {
    super();

    this.expression = getExpressionInference(tree.expression, this.genericsMap);
    pushScope();

    if (!(this.expression.type instanceof ArrayTypeTree))
      throw new Error('Expression must be array');

    if (tree.valueVarName) {
      this.value = { name: tree.valueVarName, type: this.expression.type.itemType };
      addToScope(tree.valueVarName, this.value.type);
    }

    if (tree.indexVarName) {
      this.index = { name: tree.indexVarName, type: createPlainType('Integer') };
      addToScope(tree.indexVarName, this.index.type);
    }

    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));

    popScope();
  }
}
