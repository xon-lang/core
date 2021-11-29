import {
  AliasDefinitionContext,
  AttributeDefinitionContext,
  ClassDefinitionContext,
  DefinitionContext,
} from '../../grammar/xon-parser';
import { AliasDefinitionTree } from './alias-definition/alias-definition-tree';
import { AttributeDefinitionTree } from './attribute-definition/attribute-definition-tree';
import { ClassDefinitionTree } from './class-definition/class-definition-tree';
import { DefinitionTree } from './definition-tree';

export const getDefinitionTree = (ctx: DefinitionContext): DefinitionTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof AliasDefinitionContext) return new AliasDefinitionTree(ctx);
  if (ctx instanceof AttributeDefinitionContext) return new AttributeDefinitionTree(ctx);
  if (ctx instanceof ClassDefinitionContext) return new ClassDefinitionTree(ctx);

  throw Error(`Definition tree not found for "${ctx.constructor.name}"`);
};

export const getDefinitionsTrees = (members: DefinitionContext[]): DefinitionTree[] =>
  members?.map(getDefinitionTree) || [];
