// Generated from src/Rust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class RustLexer extends antlr.Lexer {
    public static readonly LET = 1;
    public static readonly CONST = 2;
    public static readonly FN = 3;
    public static readonly IF = 4;
    public static readonly ELSE = 5;
    public static readonly RETURN = 6;
    public static readonly WHILE = 7;
    public static readonly LOOP = 8;
    public static readonly BOOL = 9;
    public static readonly TYPE = 10;
    public static readonly MUT = 11;
    public static readonly ASSIGN = 12;
    public static readonly SEMI = 13;
    public static readonly COLON = 14;
    public static readonly COMMA = 15;
    public static readonly LPAREN = 16;
    public static readonly RPAREN = 17;
    public static readonly LBRACE = 18;
    public static readonly RBRACE = 19;
    public static readonly PLUS = 20;
    public static readonly MINUS = 21;
    public static readonly STAR = 22;
    public static readonly SLASH = 23;
    public static readonly EQ = 24;
    public static readonly NEQ = 25;
    public static readonly LT = 26;
    public static readonly GT = 27;
    public static readonly LEQ = 28;
    public static readonly GEQ = 29;
    public static readonly NOT = 30;
    public static readonly ARROW = 31;
    public static readonly IDENT = 32;
    public static readonly NUMBER = 33;
    public static readonly WHITESPACE = 34;
    public static readonly LINE_COMMENT = 35;
    public static readonly BLOCK_COMMENT = 36;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'let'", "'const'", "'fn'", "'if'", "'else'", "'return'", 
        "'while'", "'loop'", null, null, "'mut'", "'='", "';'", "':'", "','", 
        "'('", "')'", "'{'", "'}'", "'+'", "'-'", "'*'", "'/'", "'=='", 
        "'!='", "'<'", "'>'", "'<='", "'>='", "'!'", "'->'"
    ];

    public static readonly symbolicNames = [
        null, "LET", "CONST", "FN", "IF", "ELSE", "RETURN", "WHILE", "LOOP", 
        "BOOL", "TYPE", "MUT", "ASSIGN", "SEMI", "COLON", "COMMA", "LPAREN", 
        "RPAREN", "LBRACE", "RBRACE", "PLUS", "MINUS", "STAR", "SLASH", 
        "EQ", "NEQ", "LT", "GT", "LEQ", "GEQ", "NOT", "ARROW", "IDENT", 
        "NUMBER", "WHITESPACE", "LINE_COMMENT", "BLOCK_COMMENT"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "LET", "CONST", "FN", "IF", "ELSE", "RETURN", "WHILE", "LOOP", "BOOL", 
        "TYPE", "MUT", "ASSIGN", "SEMI", "COLON", "COMMA", "LPAREN", "RPAREN", 
        "LBRACE", "RBRACE", "PLUS", "MINUS", "STAR", "SLASH", "EQ", "NEQ", 
        "LT", "GT", "LEQ", "GEQ", "NOT", "ARROW", "IDENT", "NUMBER", "WHITESPACE", 
        "LINE_COMMENT", "BLOCK_COMMENT",
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
        4,0,36,225,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,
        32,2,33,7,33,2,34,7,34,2,35,7,35,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,
        1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,
        1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,
        1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,122,8,8,1,9,1,9,1,9,1,9,1,9,
        1,9,1,9,3,9,131,8,9,1,10,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,13,
        1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,
        1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,25,
        1,25,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,30,1,30,
        1,30,1,31,1,31,5,31,184,8,31,10,31,12,31,187,9,31,1,32,4,32,190,
        8,32,11,32,12,32,191,1,33,4,33,195,8,33,11,33,12,33,196,1,33,1,33,
        1,34,1,34,1,34,1,34,5,34,205,8,34,10,34,12,34,208,9,34,1,34,1,34,
        1,35,1,35,1,35,1,35,5,35,216,8,35,10,35,12,35,219,9,35,1,35,1,35,
        1,35,1,35,1,35,1,217,0,36,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,
        9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,
        20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,
        31,63,32,65,33,67,34,69,35,71,36,1,0,5,3,0,65,90,95,95,97,122,4,
        0,48,57,65,90,95,95,97,122,1,0,48,57,3,0,9,10,13,13,32,32,2,0,10,
        10,13,13,231,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,
        1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,
        1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,
        1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,
        1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,
        1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,
        1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,
        1,0,0,0,0,71,1,0,0,0,1,73,1,0,0,0,3,77,1,0,0,0,5,83,1,0,0,0,7,86,
        1,0,0,0,9,89,1,0,0,0,11,94,1,0,0,0,13,101,1,0,0,0,15,107,1,0,0,0,
        17,121,1,0,0,0,19,130,1,0,0,0,21,132,1,0,0,0,23,136,1,0,0,0,25,138,
        1,0,0,0,27,140,1,0,0,0,29,142,1,0,0,0,31,144,1,0,0,0,33,146,1,0,
        0,0,35,148,1,0,0,0,37,150,1,0,0,0,39,152,1,0,0,0,41,154,1,0,0,0,
        43,156,1,0,0,0,45,158,1,0,0,0,47,160,1,0,0,0,49,163,1,0,0,0,51,166,
        1,0,0,0,53,168,1,0,0,0,55,170,1,0,0,0,57,173,1,0,0,0,59,176,1,0,
        0,0,61,178,1,0,0,0,63,181,1,0,0,0,65,189,1,0,0,0,67,194,1,0,0,0,
        69,200,1,0,0,0,71,211,1,0,0,0,73,74,5,108,0,0,74,75,5,101,0,0,75,
        76,5,116,0,0,76,2,1,0,0,0,77,78,5,99,0,0,78,79,5,111,0,0,79,80,5,
        110,0,0,80,81,5,115,0,0,81,82,5,116,0,0,82,4,1,0,0,0,83,84,5,102,
        0,0,84,85,5,110,0,0,85,6,1,0,0,0,86,87,5,105,0,0,87,88,5,102,0,0,
        88,8,1,0,0,0,89,90,5,101,0,0,90,91,5,108,0,0,91,92,5,115,0,0,92,
        93,5,101,0,0,93,10,1,0,0,0,94,95,5,114,0,0,95,96,5,101,0,0,96,97,
        5,116,0,0,97,98,5,117,0,0,98,99,5,114,0,0,99,100,5,110,0,0,100,12,
        1,0,0,0,101,102,5,119,0,0,102,103,5,104,0,0,103,104,5,105,0,0,104,
        105,5,108,0,0,105,106,5,101,0,0,106,14,1,0,0,0,107,108,5,108,0,0,
        108,109,5,111,0,0,109,110,5,111,0,0,110,111,5,112,0,0,111,16,1,0,
        0,0,112,113,5,116,0,0,113,114,5,114,0,0,114,115,5,117,0,0,115,122,
        5,101,0,0,116,117,5,102,0,0,117,118,5,97,0,0,118,119,5,108,0,0,119,
        120,5,115,0,0,120,122,5,101,0,0,121,112,1,0,0,0,121,116,1,0,0,0,
        122,18,1,0,0,0,123,124,5,110,0,0,124,125,5,117,0,0,125,131,5,109,
        0,0,126,127,5,98,0,0,127,128,5,111,0,0,128,129,5,111,0,0,129,131,
        5,108,0,0,130,123,1,0,0,0,130,126,1,0,0,0,131,20,1,0,0,0,132,133,
        5,109,0,0,133,134,5,117,0,0,134,135,5,116,0,0,135,22,1,0,0,0,136,
        137,5,61,0,0,137,24,1,0,0,0,138,139,5,59,0,0,139,26,1,0,0,0,140,
        141,5,58,0,0,141,28,1,0,0,0,142,143,5,44,0,0,143,30,1,0,0,0,144,
        145,5,40,0,0,145,32,1,0,0,0,146,147,5,41,0,0,147,34,1,0,0,0,148,
        149,5,123,0,0,149,36,1,0,0,0,150,151,5,125,0,0,151,38,1,0,0,0,152,
        153,5,43,0,0,153,40,1,0,0,0,154,155,5,45,0,0,155,42,1,0,0,0,156,
        157,5,42,0,0,157,44,1,0,0,0,158,159,5,47,0,0,159,46,1,0,0,0,160,
        161,5,61,0,0,161,162,5,61,0,0,162,48,1,0,0,0,163,164,5,33,0,0,164,
        165,5,61,0,0,165,50,1,0,0,0,166,167,5,60,0,0,167,52,1,0,0,0,168,
        169,5,62,0,0,169,54,1,0,0,0,170,171,5,60,0,0,171,172,5,61,0,0,172,
        56,1,0,0,0,173,174,5,62,0,0,174,175,5,61,0,0,175,58,1,0,0,0,176,
        177,5,33,0,0,177,60,1,0,0,0,178,179,5,45,0,0,179,180,5,62,0,0,180,
        62,1,0,0,0,181,185,7,0,0,0,182,184,7,1,0,0,183,182,1,0,0,0,184,187,
        1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,64,1,0,0,0,187,185,1,
        0,0,0,188,190,7,2,0,0,189,188,1,0,0,0,190,191,1,0,0,0,191,189,1,
        0,0,0,191,192,1,0,0,0,192,66,1,0,0,0,193,195,7,3,0,0,194,193,1,0,
        0,0,195,196,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,197,198,1,0,
        0,0,198,199,6,33,0,0,199,68,1,0,0,0,200,201,5,47,0,0,201,202,5,47,
        0,0,202,206,1,0,0,0,203,205,8,4,0,0,204,203,1,0,0,0,205,208,1,0,
        0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,206,1,0,
        0,0,209,210,6,34,0,0,210,70,1,0,0,0,211,212,5,47,0,0,212,213,5,42,
        0,0,213,217,1,0,0,0,214,216,9,0,0,0,215,214,1,0,0,0,216,219,1,0,
        0,0,217,218,1,0,0,0,217,215,1,0,0,0,218,220,1,0,0,0,219,217,1,0,
        0,0,220,221,5,42,0,0,221,222,5,47,0,0,222,223,1,0,0,0,223,224,6,
        35,0,0,224,72,1,0,0,0,8,0,121,130,185,191,196,206,217,1,6,0,0
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