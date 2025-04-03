grammar Rust;

// Keywords
LET: 'let';
CONST: 'const';
FN: 'fn';
IF: 'if';
ELSE: 'else';
RETURN: 'return';
WHILE: 'while';
LOOP: 'loop';
BOOL: 'true' | 'false';
TYPE: 'num' | 'bool' | 'string';
MUT: 'mut';

// Operators and Symbols
ASSIGN: '=';
SEMI: ';';
COLON: ':';
COMMA: ',';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
PLUS: '+';
MINUS: '-';
STAR: '*';
SLASH: '/';
EQ: '==';
NEQ: '!=';
LT: '<';
GT: '>';
LEQ: '<=';
GEQ: '>=';
NOT: '!';
ARROW: '->';

// Identifiers and Literals
IDENT: [a-zA-Z_][a-zA-Z0-9_]*;
NUMBER: [0-9]+;
STRING_LITERAL: '"' ( ~["\\\r\n] | '\\' . )* '"';
WHITESPACE: [ \t\r\n]+ -> skip; // Ignore whitespace
LINE_COMMENT : '//' ~[\r\n]* -> skip ;  // Single-line comments
BLOCK_COMMENT : '/*' .*? '*/' -> skip ; // Multi-line comments (non-greedy)

program: statement* EOF;

statement:
      constantDeclaration
    | variableDeclaration
    | functionDeclaration
    | variableAssignment
    | expressionStatement
    | blockStatement
    | ifStatement
    | whileLoop
    | returnStatement
    ;

functionDeclaration: FN IDENT LPAREN parameters? RPAREN returnType? blockStatement SEMI;

variableAssignment: IDENT ASSIGN expression SEMI;

parameters: IDENT COLON TYPE (COMMA IDENT COLON TYPE)*;

returnType: ARROW TYPE;

constantDeclaration: CONST IDENT typeAnnotation? ASSIGN expression SEMI;

variableDeclaration: LET IDENT typeAnnotation? ASSIGN expression SEMI;

typeAnnotation: COLON TYPE;

blockStatement: LBRACE statement* RBRACE;

expressionStatement: expression SEMI;

expression:
      NUMBER
    | BOOL
    | IDENT
    | STRING_LITERAL
    | functionCall
    | expression (STAR | SLASH) expression
    | expression (PLUS | MINUS) expression
    | expression (EQ | GEQ | GT | LT | LEQ | NEQ) expression
    | (MINUS | NOT) expression
    | LPAREN expression RPAREN
    ;

// return statement
returnStatement: RETURN expression? SEMI;

// Function call
functionCall: functionName LPAREN arguments? RPAREN;

functionName: IDENT;

arguments: expression (COMMA expression)*;

// while loop
whileLoop: WHILE expression blockStatement;

// If statement
ifStatement: IF expression conseqStatement (ELSE altStatement)?;

conseqStatement: blockStatement;

altStatement: blockStatement;

