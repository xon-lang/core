import { getExpressionFormatter } from '~/formatter/expression/expression-formatter-helper';
import { FormatterConfig } from '~/formatter/formatter-config';
import { StatementFormatter } from '~/formatter/statement/statement-formatter';
import { ReturnStatementContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';

export class ReturnStatementFormatter extends StatementFormatter {
  constructor(public ctx: ReturnStatementContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    const value = getExpressionFormatter(this.ctx.expression() ?? null, this.config)?.indent(
      this.indentCount,
    );
    let result = 'return';
    if (value) {
      result += ` ${value.toString().trim()}`;
    }
    if (result.length > this.config.printWidth && value) {
      result = `return ${value.break(true).toString()
        .trim()}`;
    }
    return result;
  }
}
