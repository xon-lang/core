import { Integer, String2 } from '~/lib/core';

export enum NodeType {
  LEXICAL = 'LEXICAL',
  ID = 'ID-LEXICAL',
  NL = 'NL-LEXICAL',
  STRING = 'STRING-LEXICAL',
  GROUP = 'GROUP-LEXICAL',
  INTEGER = 'INTEGER-LEXICAL',
  OPERATOR = 'OPERATOR-LEXICAL',
  MODIFIER = 'MODIFIER-LEXICAL',
  KEYWORD = 'KEYWORD-LEXICAL',
  UNKNOWN = 'UNKNOWN-LEXICAL',
  WHITESPACE = 'WHITESPACE-LEXICAL',
  JOINING = 'JOINING-LEXICAL',
  OPEN = 'OPEN-LEXICAL',
  CLOSE = 'CLOSE-LEXICAL',
  COMMA = 'COMMA-LEXICAL',
  STATEMENT = 'STATEMENT-LEXICAL',

  SYNTAX = 'SYNTAX',
  MODIFIER_ID = 'MODIFIER_ID-SYNTAX',
  ARRAY = 'ARRAY-SYNTAX',
  BODY = 'BODY-SYNTAX',
  LADDER = 'LADDER-SYNTAX',
  INFIX = 'INFIX-SYNTAX',
  INVOKE = 'INVOKE-SYNTAX',
  POSTFIX = 'POSTFIX-SYNTAX',
  PREFIX = 'PREFIX-SYNTAX',
  FLOAT = 'FLOAT-SYNTAX',
  MEMBER = 'MEMBER-SYNTAX',
  DECLARATION = 'DECLARATION-SYNTAX',
  // ID_DECLARATION = 'ID_DECLARATION-SYNTAX',
  // FUNCTION_DECLARATION = 'FUNCTION_DECLARATION-SYNTAX',
  // LAMBDA_DECLARATION = 'LAMBDA_DECLARATION-SYNTAX',

  SEMANTIC = 'SEMANTIC',
  // DECLARATION = 'DECLARATION-SEMANTIC',
  // FUNCTION_VALUE_DECLARATION = 'FUNCTION_VALUE_DECLARATION-SEMANTIC',
  // FUNCTION_BODY_DECLARATION = 'FUNCTION_BODY_DECLARATION-SEMANTIC',
  // LAMBDA_VALUE_DECLARATION = 'LAMBDA_VALUE_DECLARATION-SEMANTIC',
  // LAMBDA_BODY_DECLARATION = 'LAMBDA_BODY_DECLARATION-SEMANTIC',
  TYPE = 'TYPE-SEMANTIC',
  VALUE = 'VALUE-SEMANTIC',
}

export interface Node {
  $: NodeType | String2;
  start: Integer;
  stop: Integer;
}
