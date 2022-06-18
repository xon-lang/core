// this code was generated

import { ReturnStatementContext } from '../../../grammar/xon-parser'
import { None, String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTree } from '../../expression/expression-tree-helper'
import { ExpressionTree } from '../../expression/expression-tree'
import { StatementTree } from '../statement-tree'

export class ReturnStatementTree extends StatementTree {
  ctx: ReturnStatementContext
  sourceRange: SourceRange
  value?: ExpressionTree | None

  constructor(ctx: ReturnStatementContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.value = ctx.expression() && getExpressionTree(ctx.expression())
    this.addChildren(this.value);
  }

  toString(): String {
    return this.value && `return ${this.value}` || 'return'
  }
}

// this code was generated
