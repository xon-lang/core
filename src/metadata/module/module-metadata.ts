import * as glob from 'glob';
import * as path from 'path';
import { ModelStatementTree } from '../../tree/statement/model/model-statement-tree';
import { parseSourceFile } from '../../util/parse';
import { DeclarationScope } from '../declaration-scope';
import { DeclarationMetadata } from '../declaration/declaration-metadata';
import { getDeclarationMetadata } from '../declaration/declaration-metadata-helper';

export class ModuleMetadata {
  declarations: DeclarationMetadata[] = [];

  constructor(moduleDir: string, scope: DeclarationScope) {
    const innerScope = new DeclarationScope(scope);
    const globPath = path.resolve(moduleDir, '**/*.xon');
    const sources = glob.sync(globPath).map((x) => parseSourceFile(x));

    for (const source of sources) {
      for (const statement of source.statements) {
        if (statement instanceof ModelStatementTree) {
          const declaration = getDeclarationMetadata(statement, innerScope);
          this.declarations.push(declaration);
        }
      }
    }

    innerScope.declarations = this.declarations;
  }
}
