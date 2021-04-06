parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

program: (library | statement | definition | NL)*;

library:       libraryPath ':' libraryMember (',' libraryMember)*;
libraryPath:   id ('-' id)* '/' id ('-' id)*;
libraryMember: name = id ('as' alias = id)?;

definition:
    name = id generics? ('is' type)? ':' NL INDENT (member | NL)+ DEDENT
    ;

member:
    name = id generics? '(' (parameter (',' parameter)*)? ')' type? (':' body)? # methodMember
    | name = '@' generics? '(' (parameter (',' parameter)*)? ')' type? (
        ':' body
    )?                                                                           # initMember
    | name = '@' generics? '[' parameter (',' parameter)* ']' type (':' body)?   # indexMember
    | name = operator generics? '(' parameter ',' parameter ')' type (':' body)? # operatorMember
    | name = id generics? type (':' body)?                                       # propertyMember
    ;

type:
    id                                           # plainType
    | id '<' type (',' type)* '>'                # genericType
    | type '[' ']'                               # arrayType
    | '{' (parameter (',' parameter)*)? '}'      # objectType
    | '(' (parameter (',' parameter)*)? ')' type # functionType
    | type '|' type                              # unionType
    | '(' type ')'                               # parenthesizedType
    | literal                                    # literalType
    | type '#' id                                # metaType
    ;

statement:
    'loop' ((value = id (',' key = id?)? (',' index = id)? 'in')? expression)? ':' body # loopStatement
    | 'break'                                                                           # breakStatement
    | 'return' expression?                                                              # returnStatement
    | id '=' expression                                                                 # assignmentStatement
    | expression                                                                        # expressionStatement
    | PREPROCESSOR                                                                      # preprocessorStatement
    ;

expression:
    'if' expression ':' body ('else' body)?             # ifExpression
    | id                                                # idExpression
    | '@'                                               # instanceExpression
    | literal                                           # literalExpression
    | expression '.' id                                 # memberExpression
    | expression '(' (argument (',' argument)*)? ')'    # methodExpression
    | expression '[' (argument (',' argument)*)? ']'    # indexExpression
    | expression operator expression                    # operatorExpression
    | '[' (argument (',' argument)*)? ']'               # arrayExpression
    | '(' expression ')'                                # parenthesizedExpression
    | '\\' (parameter (',' parameter)* ':')? expression # lambdaExpression
    ;

literal:
    BOOLEAN_LITERAL   # booleanLiteral
    | INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | CHAR_LITERAL    # charLiteral
    | STRING_LITERAL  # stringLiteral
    ;

// helpful rules
operator:
    '+'
    | '-'
    | '*'
    | '/'
    | '%'
    | '<' '='?
    | '=' '='
    | '>' '='?
    | '!' '='?
    | '^'
    | '&' '&'?
    | '|' '|'?
    | '.' '.' '.'?
    ;

parameter: id type?;
argument:  (id '=')? expression;
generics:  '<' id (',' id)* '>';
body:      statement | NL INDENT (statement | NL)+ DEDENT;
id:        ID;
