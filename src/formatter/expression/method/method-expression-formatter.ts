import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { getParameterFormatter } from '../../parameter/parameter-formatter-helper';
import { ExpressionFormatter } from '../expression-formatter';
import { getExpressionFormatter } from '../expression-formatter-helper';

export class MethodExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: MethodExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const value = getExpressionFormatter(this.ctx._value, this.config).indent(this.indentCount);
    const parameters = this.ctx
      .parameters()
      .parameter()
      .map((x) => getParameterFormatter(x, this.config).indent(this.indentCount))
      .join(', ');
    const type =
      (this.ctx._type && ' ' + getExpressionFormatter(this.ctx._type, this.config)) || '';
    const result = `(${parameters})${type} => ${value}`;
    return result;
  }
}
