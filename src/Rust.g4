
// Rust.g4 - Defines Rust's basic grammar
grammar Rust;

program: statement* EOF;

statement:
      variableDeclaration
    | functionDeclaration
    | expression
    | ifStatement
    | whileLoop
    | loopStatement
    | returnStatement
    ;

variableDeclaration: LET IDENT ASSIGN expression SEMI;

functionDeclaration: FN IDENT LPAREN RPAREN LBRACE statement* RBRACE;

// expressionStatement: expression SEMI;

expression:
      NUMBER SEMI
    | IDENT SEMI
    | expression (PLUS | MINUS | STAR | SLASH) expression SEMI
    | LPAREN expression RPAREN SEMI
    ;

ifStatement: IF LPAREN expression RPAREN LBRACE statement* RBRACE (ELSE LBRACE statement* RBRACE)?;

whileLoop: WHILE LPAREN expression RPAREN LBRACE statement* RBRACE;

loopStatement: LOOP LBRACE statement* RBRACE;

returnStatement: RETURN expression? SEMI;

// RustLexer.g4 - Defines tokens

// Keywords
LET: 'let';
FN: 'fn';
IF: 'if';
ELSE: 'else';
RETURN: 'return';
WHILE: 'while';
LOOP: 'loop';

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

// Identifiers and Literals
IDENT: [a-zA-Z_][a-zA-Z0-9_]*;
NUMBER: [0-9]+;
WHITESPACE: [ \t\r\n]+ -> skip; // Ignore whitespace