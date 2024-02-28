import { IssueManager } from '../issue/issue-manager';
import { Source } from '../source/source';
import { Node } from './node/node';
import { StatementNode } from './node/syntax/statement/statement-node';
import { TokenNode } from './node/token/token-node';
import { SyntaxContext } from './syntax-context';
import { Formatter } from './util/formatter';

export interface SyntaxResult {
  source: Source;
  hiddenNodes: TokenNode[];
  unknownNodes: Node[];
  formatters: Formatter[];
  issueManager: IssueManager;
  statements: StatementNode[];
  syntaxContext: SyntaxContext;
}