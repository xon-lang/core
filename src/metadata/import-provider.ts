import { Boolean2, String2 } from '@/lib/core';
import { DeclarationScope } from '@/metadata/declaration/scope/declaration-scope';
import { lstatSync } from 'fs';
import os from 'os';
import path from 'path';

function isDirectory(fullPath): Boolean2 {
  try {
    const stats = lstatSync(fullPath);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
}

function isFile(fullPath): Boolean2 {
  try {
    const stats = lstatSync(fullPath);
    return stats.isFile();
  } catch (error) {
    return false;
  }
}

export class ImportProvider {
  fullPath: String2;

  static cache: Map<String2, DeclarationScope> = new Map();

  constructor(private importPath: string) {
    this.fullPath = resolvePath(this.importPath);
  }

  isValid() {
    return isDirectory(this.fullPath);
  }

  scope(): DeclarationScope {
    throw new Error('Not implemented');
  }
}

function resolvePath(importPath: String2): String2 {
  if (importPath[0] === '~') {
    return path.join(os.homedir(), importPath.slice(1));
  }
  return path.resolve(importPath);
}
