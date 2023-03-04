parser grammar XonParser
  ;

options {
  tokenVocab = XonLexer;
}

statement: LINE_COMMENT # commentStatement | expression # expressionStatement;

expression
  : ID                             # idExpression
  | FLOAT                          # floatExpression
  | INTEGER                        # integerExpression
  | STRING                         # stringExpression
  | parameters                     # arrayExpression
  | expression (DOT | META) ID?    # memberExpression
  | expression parameters          # invokeExpression
  | expression OPERATOR expression # infixExpression
  | OPERATOR expression            # prefixExpression
  | expression OPERATOR            # postfixExpression
  | parameters* LAMBDA expression  # lambdaExpression
  | KEYWORD expression?            # keywordExpression
  ;

parameters: OPEN (expression (COMMA expression)* COMMA?)? CLOSE;

body:   NL INDENT source DEDENT;
source: NL? (statement nl += NL)* statement? NL?;
