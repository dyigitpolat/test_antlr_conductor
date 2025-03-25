// Generated from src/Crust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class CrustLexer extends antlr.Lexer {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly INT = 16;
    public static readonly BOOL = 17;
    public static readonly CHAR = 18;
    public static readonly IDENTIFIER = 19;
    public static readonly WS = 20;
    public static readonly COMMENT = 21;
    public static readonly BLOCK_COMMENT = 22;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "';'", "'*'", "'/'", "'+'", "'-'", "'<'", "'<='", "'>'", "'>='", 
        "'=='", "'!='", "'&&'", "'||'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, "INT", "BOOL", "CHAR", "IDENTIFIER", 
        "WS", "COMMENT", "BLOCK_COMMENT"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "INT", 
        "BOOL", "CHAR", "IDENTIFIER", "WS", "COMMENT", "BLOCK_COMMENT",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, CrustLexer._ATN, CrustLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "Crust.g4"; }

    public get literalNames(): (string | null)[] { return CrustLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return CrustLexer.symbolicNames; }
    public get ruleNames(): string[] { return CrustLexer.ruleNames; }

    public get serializedATN(): number[] { return CrustLexer._serializedATN; }

    public get channelNames(): string[] { return CrustLexer.channelNames; }

    public get modeNames(): string[] { return CrustLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,22,140,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,
        5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,
        1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,15,4,15,83,8,
        15,11,15,12,15,84,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,
        16,96,8,16,1,17,1,17,1,17,1,17,1,18,1,18,5,18,104,8,18,10,18,12,
        18,107,9,18,1,19,4,19,110,8,19,11,19,12,19,111,1,19,1,19,1,20,1,
        20,1,20,1,20,5,20,120,8,20,10,20,12,20,123,9,20,1,20,1,20,1,21,1,
        21,1,21,1,21,5,21,131,8,21,10,21,12,21,134,9,21,1,21,1,21,1,21,1,
        21,1,21,1,132,0,22,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,
        21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,
        43,22,1,0,5,1,0,48,57,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,
        95,97,122,3,0,9,10,13,13,32,32,2,0,10,10,13,13,145,0,1,1,0,0,0,0,
        3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
        1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
        1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,
        1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,
        1,0,0,0,1,45,1,0,0,0,3,47,1,0,0,0,5,49,1,0,0,0,7,51,1,0,0,0,9,53,
        1,0,0,0,11,55,1,0,0,0,13,57,1,0,0,0,15,60,1,0,0,0,17,62,1,0,0,0,
        19,65,1,0,0,0,21,68,1,0,0,0,23,71,1,0,0,0,25,74,1,0,0,0,27,77,1,
        0,0,0,29,79,1,0,0,0,31,82,1,0,0,0,33,95,1,0,0,0,35,97,1,0,0,0,37,
        101,1,0,0,0,39,109,1,0,0,0,41,115,1,0,0,0,43,126,1,0,0,0,45,46,5,
        59,0,0,46,2,1,0,0,0,47,48,5,42,0,0,48,4,1,0,0,0,49,50,5,47,0,0,50,
        6,1,0,0,0,51,52,5,43,0,0,52,8,1,0,0,0,53,54,5,45,0,0,54,10,1,0,0,
        0,55,56,5,60,0,0,56,12,1,0,0,0,57,58,5,60,0,0,58,59,5,61,0,0,59,
        14,1,0,0,0,60,61,5,62,0,0,61,16,1,0,0,0,62,63,5,62,0,0,63,64,5,61,
        0,0,64,18,1,0,0,0,65,66,5,61,0,0,66,67,5,61,0,0,67,20,1,0,0,0,68,
        69,5,33,0,0,69,70,5,61,0,0,70,22,1,0,0,0,71,72,5,38,0,0,72,73,5,
        38,0,0,73,24,1,0,0,0,74,75,5,124,0,0,75,76,5,124,0,0,76,26,1,0,0,
        0,77,78,5,40,0,0,78,28,1,0,0,0,79,80,5,41,0,0,80,30,1,0,0,0,81,83,
        7,0,0,0,82,81,1,0,0,0,83,84,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,
        85,32,1,0,0,0,86,87,5,116,0,0,87,88,5,114,0,0,88,89,5,117,0,0,89,
        96,5,101,0,0,90,91,5,102,0,0,91,92,5,97,0,0,92,93,5,108,0,0,93,94,
        5,115,0,0,94,96,5,101,0,0,95,86,1,0,0,0,95,90,1,0,0,0,96,34,1,0,
        0,0,97,98,5,39,0,0,98,99,9,0,0,0,99,100,5,39,0,0,100,36,1,0,0,0,
        101,105,7,1,0,0,102,104,7,2,0,0,103,102,1,0,0,0,104,107,1,0,0,0,
        105,103,1,0,0,0,105,106,1,0,0,0,106,38,1,0,0,0,107,105,1,0,0,0,108,
        110,7,3,0,0,109,108,1,0,0,0,110,111,1,0,0,0,111,109,1,0,0,0,111,
        112,1,0,0,0,112,113,1,0,0,0,113,114,6,19,0,0,114,40,1,0,0,0,115,
        116,5,47,0,0,116,117,5,47,0,0,117,121,1,0,0,0,118,120,8,4,0,0,119,
        118,1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,
        124,1,0,0,0,123,121,1,0,0,0,124,125,6,20,0,0,125,42,1,0,0,0,126,
        127,5,47,0,0,127,128,5,42,0,0,128,132,1,0,0,0,129,131,9,0,0,0,130,
        129,1,0,0,0,131,134,1,0,0,0,132,133,1,0,0,0,132,130,1,0,0,0,133,
        135,1,0,0,0,134,132,1,0,0,0,135,136,5,42,0,0,136,137,5,47,0,0,137,
        138,1,0,0,0,138,139,6,21,0,0,139,44,1,0,0,0,7,0,84,95,105,111,121,
        132,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!CrustLexer.__ATN) {
            CrustLexer.__ATN = new antlr.ATNDeserializer().deserialize(CrustLexer._serializedATN);
        }

        return CrustLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(CrustLexer.literalNames, CrustLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return CrustLexer.vocabulary;
    }

    private static readonly decisionsToDFA = CrustLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}