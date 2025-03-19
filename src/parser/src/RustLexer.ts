// Generated from src/Rust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class RustLexer extends antlr.Lexer {
    public static readonly LET = 1;
    public static readonly FN = 2;
    public static readonly IF = 3;
    public static readonly ELSE = 4;
    public static readonly RETURN = 5;
    public static readonly WHILE = 6;
    public static readonly LOOP = 7;
    public static readonly ASSIGN = 8;
    public static readonly SEMI = 9;
    public static readonly COLON = 10;
    public static readonly COMMA = 11;
    public static readonly LPAREN = 12;
    public static readonly RPAREN = 13;
    public static readonly LBRACE = 14;
    public static readonly RBRACE = 15;
    public static readonly PLUS = 16;
    public static readonly MINUS = 17;
    public static readonly STAR = 18;
    public static readonly SLASH = 19;
    public static readonly EQ = 20;
    public static readonly NEQ = 21;
    public static readonly LT = 22;
    public static readonly GT = 23;
    public static readonly LEQ = 24;
    public static readonly GEQ = 25;
    public static readonly IDENT = 26;
    public static readonly NUMBER = 27;
    public static readonly WHITESPACE = 28;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'let'", "'fn'", "'if'", "'else'", "'return'", "'while'", 
        "'loop'", "'='", "';'", "':'", "','", "'('", "')'", "'{'", "'}'", 
        "'+'", "'-'", "'*'", "'/'", "'=='", "'!='", "'<'", "'>'", "'<='", 
        "'>='"
    ];

    public static readonly symbolicNames = [
        null, "LET", "FN", "IF", "ELSE", "RETURN", "WHILE", "LOOP", "ASSIGN", 
        "SEMI", "COLON", "COMMA", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
        "PLUS", "MINUS", "STAR", "SLASH", "EQ", "NEQ", "LT", "GT", "LEQ", 
        "GEQ", "IDENT", "NUMBER", "WHITESPACE"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "LET", "FN", "IF", "ELSE", "RETURN", "WHILE", "LOOP", "ASSIGN", 
        "SEMI", "COLON", "COMMA", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
        "PLUS", "MINUS", "STAR", "SLASH", "EQ", "NEQ", "LT", "GT", "LEQ", 
        "GEQ", "IDENT", "NUMBER", "WHITESPACE",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, RustLexer._ATN, RustLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "Rust.g4"; }

    public get literalNames(): (string | null)[] { return RustLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return RustLexer.symbolicNames; }
    public get ruleNames(): string[] { return RustLexer.ruleNames; }

    public get serializedATN(): number[] { return RustLexer._serializedATN; }

    public get channelNames(): string[] { return RustLexer.channelNames; }

    public get modeNames(): string[] { return RustLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,28,149,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,
        3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,
        5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,
        1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,
        1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,
        1,23,1,24,1,24,1,24,1,25,1,25,5,25,133,8,25,10,25,12,25,136,9,25,
        1,26,4,26,139,8,26,11,26,12,26,140,1,27,4,27,144,8,27,11,27,12,27,
        145,1,27,1,27,0,0,28,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
        10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,
        21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,1,0,4,3,0,65,90,95,
        95,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,3,0,9,10,13,13,
        32,32,151,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,
        0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,
        0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,
        0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,
        0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,
        0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,1,57,1,0,0,0,3,61,1,
        0,0,0,5,64,1,0,0,0,7,67,1,0,0,0,9,72,1,0,0,0,11,79,1,0,0,0,13,85,
        1,0,0,0,15,90,1,0,0,0,17,92,1,0,0,0,19,94,1,0,0,0,21,96,1,0,0,0,
        23,98,1,0,0,0,25,100,1,0,0,0,27,102,1,0,0,0,29,104,1,0,0,0,31,106,
        1,0,0,0,33,108,1,0,0,0,35,110,1,0,0,0,37,112,1,0,0,0,39,114,1,0,
        0,0,41,117,1,0,0,0,43,120,1,0,0,0,45,122,1,0,0,0,47,124,1,0,0,0,
        49,127,1,0,0,0,51,130,1,0,0,0,53,138,1,0,0,0,55,143,1,0,0,0,57,58,
        5,108,0,0,58,59,5,101,0,0,59,60,5,116,0,0,60,2,1,0,0,0,61,62,5,102,
        0,0,62,63,5,110,0,0,63,4,1,0,0,0,64,65,5,105,0,0,65,66,5,102,0,0,
        66,6,1,0,0,0,67,68,5,101,0,0,68,69,5,108,0,0,69,70,5,115,0,0,70,
        71,5,101,0,0,71,8,1,0,0,0,72,73,5,114,0,0,73,74,5,101,0,0,74,75,
        5,116,0,0,75,76,5,117,0,0,76,77,5,114,0,0,77,78,5,110,0,0,78,10,
        1,0,0,0,79,80,5,119,0,0,80,81,5,104,0,0,81,82,5,105,0,0,82,83,5,
        108,0,0,83,84,5,101,0,0,84,12,1,0,0,0,85,86,5,108,0,0,86,87,5,111,
        0,0,87,88,5,111,0,0,88,89,5,112,0,0,89,14,1,0,0,0,90,91,5,61,0,0,
        91,16,1,0,0,0,92,93,5,59,0,0,93,18,1,0,0,0,94,95,5,58,0,0,95,20,
        1,0,0,0,96,97,5,44,0,0,97,22,1,0,0,0,98,99,5,40,0,0,99,24,1,0,0,
        0,100,101,5,41,0,0,101,26,1,0,0,0,102,103,5,123,0,0,103,28,1,0,0,
        0,104,105,5,125,0,0,105,30,1,0,0,0,106,107,5,43,0,0,107,32,1,0,0,
        0,108,109,5,45,0,0,109,34,1,0,0,0,110,111,5,42,0,0,111,36,1,0,0,
        0,112,113,5,47,0,0,113,38,1,0,0,0,114,115,5,61,0,0,115,116,5,61,
        0,0,116,40,1,0,0,0,117,118,5,33,0,0,118,119,5,61,0,0,119,42,1,0,
        0,0,120,121,5,60,0,0,121,44,1,0,0,0,122,123,5,62,0,0,123,46,1,0,
        0,0,124,125,5,60,0,0,125,126,5,61,0,0,126,48,1,0,0,0,127,128,5,62,
        0,0,128,129,5,61,0,0,129,50,1,0,0,0,130,134,7,0,0,0,131,133,7,1,
        0,0,132,131,1,0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,
        0,0,135,52,1,0,0,0,136,134,1,0,0,0,137,139,7,2,0,0,138,137,1,0,0,
        0,139,140,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,54,1,0,0,0,
        142,144,7,3,0,0,143,142,1,0,0,0,144,145,1,0,0,0,145,143,1,0,0,0,
        145,146,1,0,0,0,146,147,1,0,0,0,147,148,6,27,0,0,148,56,1,0,0,0,
        4,0,134,140,145,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!RustLexer.__ATN) {
            RustLexer.__ATN = new antlr.ATNDeserializer().deserialize(RustLexer._serializedATN);
        }

        return RustLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(RustLexer.literalNames, RustLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return RustLexer.vocabulary;
    }

    private static readonly decisionsToDFA = RustLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}