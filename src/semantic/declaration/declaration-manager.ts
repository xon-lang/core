import {IssueManager} from '../../issue/issue-manager';
import {ISSUE_MESSAGE} from '../../issue/issue-message';
import {Integer, Nothing, String2, nothing} from '../../lib/core';
import {IdNode} from '../../parser/node/token/id/id-node';
import {DeclarationSemantic} from './declaration-semantic';
import {ValueDeclarationSemantic} from './value/value-declaration-semantic';

export interface DeclarationManager {
  declarations: Record<String2, DeclarationSemantic[]>;

  count(): Integer;
  add: (declaration: DeclarationSemantic) => Nothing;
  findAll: (name: String2) => DeclarationSemantic[];
  findSingle: (
    node: IdNode,
    genericLength: Integer,
    parameters: ValueDeclarationSemantic[] | Nothing,
  ) => DeclarationSemantic | Nothing;
}

export function createDeclarationManager(
  issueManager: IssueManager,
  parentDeclarationManager: DeclarationManager | Nothing,
): DeclarationManager {
  return {
    declarations: {},

    count(): Integer {
      return Object.keys(this.declarations).length;
    },

    add(declaration: DeclarationSemantic): Nothing {
      if (!this.declarations[declaration.name]) {
        this.declarations[declaration.name] = [];
      }

      this.declarations[declaration.name].push(declaration);
    },

    findAll(name: String2): DeclarationSemantic[] {
      return this.declarations[name] ?? parentDeclarationManager?.findAll(name) ?? [];
    },

    findSingle(
      node: IdNode,
      genericLength: Integer,
      parameters: ValueDeclarationSemantic[] | Nothing,
    ): DeclarationSemantic | Nothing {
      const declarations = this.findAll(node.text);

      if (declarations.length === 0) {
        issueManager.addError(node, ISSUE_MESSAGE.declarationNotFound(node.text));

        return nothing;
      }

      const filtered = declarations.filter((x) => (x.generics?.length ?? 0) === genericLength);

      if (filtered.length !== 1) {
        issueManager.addError(node, ISSUE_MESSAGE.tooManyDeclarationsFoundWithName(node.text));

        return nothing;
      }

      return filtered.first();
    },
  };
}
