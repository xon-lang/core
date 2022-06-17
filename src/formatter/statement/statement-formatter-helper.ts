import {
  CommentStatementContext,
  DefinitionStatementContext,
  ExpressionStatementContext,
  ForStatementContext,
  IfStatementContext,
  NlStatementContext,
  ParameterStatementContext,
  ReturnStatementContext,
  StatementContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { None, none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { CommentStatementFormatter } from './comment/comment-statement-formatter';
import { DefinitionStatementFormatter } from './definition/definition-statement-formatter';
import { ExpressionStatementFormatter } from './expression/expression-statement-formatter';
import { ForStatementFormatter } from './for/for-statement-formatter';
import { IfStatementFormatter } from './if/if-statement-formatter';
import { NlStatementFormatter } from './nl/nl-statement-formatter';
import { ParameterStatementFormatter } from './parameter/parameter-statement-formatter';
import { ReturnStatementFormatter } from './return/return-statement-formatter';
import { StatementFormatter } from './statement-formatter';

export const getStatementFormatter = (
  ctx: StatementContext,
  config: FormatterConfig,
): StatementFormatter | None => {
  if (!ctx) return none;

  if (ctx instanceof DefinitionStatementContext)
    return new DefinitionStatementFormatter(ctx, config);
  if (ctx instanceof ExpressionStatementContext)
    return new ExpressionStatementFormatter(ctx, config);
  if (ctx instanceof ForStatementContext) return new ForStatementFormatter(ctx, config);
  if (ctx instanceof IfStatementContext) return new IfStatementFormatter(ctx, config);
  if (ctx instanceof ParameterStatementContext) return new ParameterStatementFormatter(ctx, config);
  if (ctx instanceof ReturnStatementContext) return new ReturnStatementFormatter(ctx, config);
  if (ctx instanceof NlStatementContext) return new NlStatementFormatter(ctx, config);
  if (ctx instanceof CommentStatementContext) return new CommentStatementFormatter(ctx, config);

  Issue.errorFromContext(ctx, `Statement formatter not found for "${ctx.constructor.name}"`);
};
