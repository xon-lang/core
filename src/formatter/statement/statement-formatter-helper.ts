import {
  ExpressionStatementContext,
  IfStatementContext,
  ParameterStatementContext,
  StatementContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { ExpressionStatementFormatter } from './expression/expression-statement-formatter';
import { IfStatementFormatter } from './if/if-statement-formatter';
import { ParameterStatementFormatter } from './parameter/parameter-statement-formatter';
import { StatementFormatter } from './statement-formatter';

export const getStatementFormatter = (
  ctx: StatementContext,
  config: FormatterConfig,
): StatementFormatter => {
  if (!ctx) return none;

  if (ctx instanceof ExpressionStatementContext)
    return new ExpressionStatementFormatter(ctx, config);
  if (ctx instanceof IfStatementContext) return new IfStatementFormatter(ctx, config);
  if (ctx instanceof ParameterStatementContext) return new ParameterStatementFormatter(ctx, config);

  Issue.errorFromContext(ctx, `Statement formatter not found for "${ctx.constructor.name}"`);
};
