import { IssueLevel } from '@src/issue/issue-level';
import { String } from '@src/lib/core';
import { DeclarationScope } from '@src/metadata/declaration/scope/declaration-scope';
import { ObjectTypeMetadata } from '@src/metadata/expression/type/object/object-type-metadata';
import { TypeMetadata } from '@src/metadata/expression/type/type-metadata';
import { ValueMetadata } from '@src/metadata/expression/value/value-metadata';
import { fillValueMetadata } from '@src/metadata/expression/value/value-metadata-helper';
import { ImportProvider } from '@src/metadata/import-provider';
import { PrefixExpressionTree } from '@src/tree/expression/prefix/prefix-expression-tree';
import { evaluate } from '@src/util/evaluate';
import path from 'path';

export class ImportValueMetadata extends ValueMetadata {
  fullPath: String;
  private _importScope: DeclarationScope;
  private _importProvider: ImportProvider;
  private _type: TypeMetadata;

  constructor(private tree: PrefixExpressionTree) {
    super();
    fillValueMetadata(tree.value);

    const importPath = evaluate(tree.value);
    if (typeof importPath === 'string') {
      const relativePath = path.resolve(path.dirname(tree.sourceRange.sourceName), importPath);
      this._importProvider = new ImportProvider(relativePath);
      this.fullPath = this._importProvider.fullPath;
    } else {
      tree.addIssue(IssueLevel.error, 'Import path should be a string literal');
    }
  }

  importScope(): DeclarationScope | null {
    if (this._importScope) {
      return this._importScope;
    }

    if (!this._importProvider) {
      return null;
    }

    if (!this._importProvider.isValid()) {
      this.tree.addIssue(IssueLevel.error, 'Wrong import path');
      return null;
    }
    this._importScope = this._importProvider.scope();
    return this._importScope;
  }

  type(): TypeMetadata | null {
    if (this._type) {
      return this._type;
    }
    this._type = new ObjectTypeMetadata(this.importScope());
    return this._type;
  }

  eval() {
    throw new Error('Not implemented');
  }
}
