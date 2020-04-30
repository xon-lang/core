import { FunctionContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionTree } from '../expression/expression-helper';
import { ExpressionTree } from '../expression/expression.tree';
import { getStatementsTree } from '../statement/statement-helper';
import { StatementTree } from '../statement/statement.tree';
import { getTypeTree } from '../type/type-helper';
import { TypeTree } from '../type/type.tree';

export class FunctionTree extends BaseTree {
    name: string;
    args: {
        name: string;
        type: TypeTree;
        value: ExpressionTree;
    }[];
    statements: StatementTree[];

    constructor(public ctx: FunctionContext) {
        super();

        this.name = ctx.ID().text;
        this.args =
            ctx.argument()?.map((x) => ({
                name: x._name.text,
                type: x.type() && getTypeTree(x.type()),
                value: getExpressionTree(x.expression())
            })) || [];
        this.statements = getStatementsTree(ctx.body());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            args: this.args.map((x) => ({
                name: x.name,
                type: x.type?.toPlain(),
                value: x.value?.toPlain(),
            })),
            statements: this.statements.map((x) => x.toPlain()),
        };
    }
}
