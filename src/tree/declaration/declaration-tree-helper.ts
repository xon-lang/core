import { DeclarationContext } from '~/grammar/xon-parser';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';

export function getDeclarationTree(ctx: DeclarationContext): DeclarationTree | null {
  if (!ctx) return null;

  return new DeclarationTree(ctx);
}

export function getDeclarationTrees(contexts: DeclarationContext[]): DeclarationTree[] {
  return contexts?.map((x) => getDeclarationTree(x)) || [];
}
