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
TYPE: 'num' | 'bool';
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
WHITESPACE: [ \t\r\n]+ -> skip; // Ignore whitespace

program: statement* EOF;

statement:
      constantDeclaration
    | variableDeclaration
    | functionDeclaration
    | expressionStatement
    | blockStatement
    | ifStatement
    | whileLoop
    ;

functionDeclaration: FN IDENT LPAREN parameters? RPAREN returnType? blockStatement SEMI;

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
    | functionCall
    | expression (STAR | SLASH) expression
    | expression (PLUS | MINUS) expression 
    | expression (EQ | GEQ | GT | LT | LEQ | NEQ) expression
    | (MINUS | NOT) expression
    | LPAREN expression RPAREN
    ;

// Function call
functionCall: IDENT LPAREN arguments? RPAREN;

arguments: expression (COMMA expression)*;

// while loop
whileLoop: WHILE expression blockStatement;

// If statement
ifStatement: IF expression conseqStatement (ELSE altStatement)?;

conseqStatement: blockStatement;

altStatement: blockStatement;

// return statement
returnStatement: RETURN expression? SEMI;
