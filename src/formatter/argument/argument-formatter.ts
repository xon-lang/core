import { ArgumentContext } from '../../grammar/xon-parser';
import { getExpressionFormatter } from '../expression/expression-formatter-helper';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';

export class ArgumentFormatter extends Formatter {
  constructor(public ctx: ArgumentContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const value = getExpressionFormatter(this.ctx.expression(), this.config)
      .break(this.broken)
      .indent(this.indentCount);
    if (this.ctx._name) {
      return `${this.ctx._name.text}: ` + value;
    }
    return value.toString();
  }
}