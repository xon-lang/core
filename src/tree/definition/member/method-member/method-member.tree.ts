import { MethodMemberContext } from '../../../../grammar/xon-parser';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class MethodMemberTree extends MemberTree {
  public name: string;

  public args: {
    name: string;
    type: TypeTree;
  }[];

  public returnType: TypeTree;

  public statements: StatementTree[];

  public constructor(public ctx: MethodMemberContext) {
    super();

    this.name = ctx.ID().text;
    this.args = ctx.argument().map((x) => ({
      name: x.ID().text,
      type: new TypeTree(x.type())
    }));

    this.returnType = ctx.type() && new TypeTree(ctx.type());
    this.statements = getStatementsTrees(ctx.body());
  }
}
