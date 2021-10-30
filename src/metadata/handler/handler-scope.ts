import * as glob from 'glob';
import * as path from 'path';
import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { IdToken } from '../../tree/id-token';
import { parseSourceFile } from '../../tree/parse';
import { IdTypeMetadata } from '../type/id-type/id-type-metadata';
import { TypeMetadata } from '../type/type-metadata';
import { getDefinitionMetadata } from '../type/type-metadata-helper';
import { DeclarationMetadata } from './declaration-metadata';

export class HandlerScope {
  parent: HandlerScope;
  private definitions = new Map<string, IdTypeMetadata>();
  private declarations = new Map<string, DeclarationMetadata>();

  constructor(parent: HandlerScope = null) {
    this.parent = parent || this.defaultScope();
  }

  findIdType(name: string, genericsCount = 0): IdTypeMetadata {
    const compoundName = `${name}<${genericsCount}>`;
    if (this.definitions.has(compoundName)) return this.definitions.get(compoundName);
    if (this.parent) return this.parent.findIdType(name, genericsCount);
    throw new Error(`'${name}' with ${genericsCount} generics not found`);
  }

  addDefinition(value: DefinitionTree) {
    const genericsCount = value instanceof ClassDefinitionTree ? value.genericParameters.length : 0;
    const name = `${value.id.text}<${genericsCount}>`;
    if (this.definitions.has(name))
      throw new Error(`'${name}' with ${genericsCount} generics already exists`);
    this.definitions.set(name, getDefinitionMetadata(value));
  }

  addDeclaration(value: { id: IdToken; typeMetadata: TypeMetadata }) {
    const name = value.id.text;
    if (this.declarations.has(name)) throw new Error(`'${name}' already exists`);
    this.declarations.set(name, new DeclarationMetadata(value.id, value.typeMetadata));
  }

  findDeclaration(name: string): DeclarationMetadata {
    if (this.declarations.has(name)) return this.declarations.get(name);
    if (this.parent) return this.parent.findDeclaration(name);
    throw new Error(`'${name}' not found`);
  }

  private defaultScope(): HandlerScope {
    const globPath = path.resolve('ast.xon/lib/@xon/core', '**/*.xon');
    const sourceTrees = glob.sync(globPath).map((x) => parseSourceFile(x));
    const scope = new HandlerScope();
    for (const sourceTree of sourceTrees) {
      for (const definitionTree of sourceTree.definitions) {
        scope.addDefinition(definitionTree);
      }
    }
    return scope;
  }
}
