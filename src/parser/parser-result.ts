import { Issue } from '../issue/issue';
import { Source } from '../source/source';
import { Node } from './node/node';
import { RootNode } from './node/root/root-node';
import { ParserConfig } from './parser-config';
import { ParserContext } from './parser-context';
import { Type } from './type/type';

export interface ParserResult {
  source: Source;
  hidden: Node[];
  issues: Issue[];
  types: Type[];
  root: RootNode;
  config: ParserConfig;
  context: ParserContext;
}
