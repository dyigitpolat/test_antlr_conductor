// Generated from src/Rust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { RustListener } from "./RustListener.js";
import { RustVisitor } from "./RustVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class RustParser extends antlr.Parser {
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
    public static readonly RULE_program = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_variableDeclaration = 2;
    public static readonly RULE_functionDeclaration = 3;
    public static readonly RULE_expressionStatement = 4;
    public static readonly RULE_expression = 5;
    public static readonly RULE_ifStatement = 6;
    public static readonly RULE_whileLoop = 7;
    public static readonly RULE_loopStatement = 8;
    public static readonly RULE_returnStatement = 9;

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
    public static readonly ruleNames = [
        "program", "statement", "variableDeclaration", "functionDeclaration", 
        "expressionStatement", "expression", "ifStatement", "whileLoop", 
        "loopStatement", "returnStatement",
    ];

    public get grammarFileName(): string { return "Rust.g4"; }
    public get literalNames(): (string | null)[] { return RustParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return RustParser.symbolicNames; }
    public get ruleNames(): string[] { return RustParser.ruleNames; }
    public get serializedATN(): number[] { return RustParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, RustParser._ATN, RustParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, RustParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 23;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 201330926) !== 0)) {
                {
                {
                this.state = 20;
                this.statement();
                }
                }
                this.state = 25;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 26;
            this.match(RustParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 2, RustParser.RULE_statement);
        try {
            this.state = 35;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 28;
                this.variableDeclaration();
                }
                break;
            case RustParser.FN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 29;
                this.functionDeclaration();
                }
                break;
            case RustParser.LPAREN:
            case RustParser.IDENT:
            case RustParser.NUMBER:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 30;
                this.expressionStatement();
                }
                break;
            case RustParser.IF:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 31;
                this.ifStatement();
                }
                break;
            case RustParser.WHILE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 32;
                this.whileLoop();
                }
                break;
            case RustParser.LOOP:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 33;
                this.loopStatement();
                }
                break;
            case RustParser.RETURN:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 34;
                this.returnStatement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclaration(): VariableDeclarationContext {
        let localContext = new VariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 4, RustParser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 37;
            this.match(RustParser.LET);
            this.state = 38;
            this.match(RustParser.IDENT);
            this.state = 39;
            this.match(RustParser.ASSIGN);
            this.state = 40;
            this.expression(0);
            this.state = 41;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionDeclaration(): FunctionDeclarationContext {
        let localContext = new FunctionDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 6, RustParser.RULE_functionDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 43;
            this.match(RustParser.FN);
            this.state = 44;
            this.match(RustParser.IDENT);
            this.state = 45;
            this.match(RustParser.LPAREN);
            this.state = 46;
            this.match(RustParser.RPAREN);
            this.state = 47;
            this.match(RustParser.LBRACE);
            this.state = 51;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 201330926) !== 0)) {
                {
                {
                this.state = 48;
                this.statement();
                }
                }
                this.state = 53;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 54;
            this.match(RustParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, RustParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 56;
            this.expression(0);
            this.state = 57;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 10;
        this.enterRecursionRule(localContext, 10, RustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 66;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.NUMBER:
                {
                this.state = 60;
                this.match(RustParser.NUMBER);
                }
                break;
            case RustParser.IDENT:
                {
                this.state = 61;
                this.match(RustParser.IDENT);
                }
                break;
            case RustParser.LPAREN:
                {
                this.state = 62;
                this.match(RustParser.LPAREN);
                this.state = 63;
                this.expression(0);
                this.state = 64;
                this.match(RustParser.RPAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 73;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ExpressionContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                    this.state = 68;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 69;
                    _la = this.tokenStream.LA(1);
                    if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 983040) !== 0))) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 70;
                    this.expression(3);
                    }
                    }
                }
                this.state = 75;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public ifStatement(): IfStatementContext {
        let localContext = new IfStatementContext(this.context, this.state);
        this.enterRule(localContext, 12, RustParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 76;
            this.match(RustParser.IF);
            this.state = 77;
            this.match(RustParser.LPAREN);
            this.state = 78;
            this.expression(0);
            this.state = 79;
            this.match(RustParser.RPAREN);
            this.state = 80;
            this.match(RustParser.LBRACE);
            this.state = 84;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 201330926) !== 0)) {
                {
                {
                this.state = 81;
                this.statement();
                }
                }
                this.state = 86;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 87;
            this.match(RustParser.RBRACE);
            this.state = 97;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 88;
                this.match(RustParser.ELSE);
                this.state = 89;
                this.match(RustParser.LBRACE);
                this.state = 93;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 201330926) !== 0)) {
                    {
                    {
                    this.state = 90;
                    this.statement();
                    }
                    }
                    this.state = 95;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 96;
                this.match(RustParser.RBRACE);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileLoop(): WhileLoopContext {
        let localContext = new WhileLoopContext(this.context, this.state);
        this.enterRule(localContext, 14, RustParser.RULE_whileLoop);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 99;
            this.match(RustParser.WHILE);
            this.state = 100;
            this.match(RustParser.LPAREN);
            this.state = 101;
            this.expression(0);
            this.state = 102;
            this.match(RustParser.RPAREN);
            this.state = 103;
            this.match(RustParser.LBRACE);
            this.state = 107;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 201330926) !== 0)) {
                {
                {
                this.state = 104;
                this.statement();
                }
                }
                this.state = 109;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 110;
            this.match(RustParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loopStatement(): LoopStatementContext {
        let localContext = new LoopStatementContext(this.context, this.state);
        this.enterRule(localContext, 16, RustParser.RULE_loopStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 112;
            this.match(RustParser.LOOP);
            this.state = 113;
            this.match(RustParser.LBRACE);
            this.state = 117;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 201330926) !== 0)) {
                {
                {
                this.state = 114;
                this.statement();
                }
                }
                this.state = 119;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 120;
            this.match(RustParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnStatement(): ReturnStatementContext {
        let localContext = new ReturnStatementContext(this.context, this.state);
        this.enterRule(localContext, 18, RustParser.RULE_returnStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 122;
            this.match(RustParser.RETURN);
            this.state = 124;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 201330688) !== 0)) {
                {
                this.state = 123;
                this.expression(0);
                }
            }

            this.state = 126;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 5:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,28,129,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,0,1,0,1,
        0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,36,8,1,1,2,1,2,1,2,1,2,1,2,1,2,
        1,3,1,3,1,3,1,3,1,3,1,3,5,3,50,8,3,10,3,12,3,53,9,3,1,3,1,3,1,4,
        1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,67,8,5,1,5,1,5,1,5,5,5,72,
        8,5,10,5,12,5,75,9,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,83,8,6,10,6,12,
        6,86,9,6,1,6,1,6,1,6,1,6,5,6,92,8,6,10,6,12,6,95,9,6,1,6,3,6,98,
        8,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,106,8,7,10,7,12,7,109,9,7,1,7,1,
        7,1,8,1,8,1,8,5,8,116,8,8,10,8,12,8,119,9,8,1,8,1,8,1,9,1,9,3,9,
        125,8,9,1,9,1,9,1,9,0,1,10,10,0,2,4,6,8,10,12,14,16,18,0,1,1,0,16,
        19,135,0,23,1,0,0,0,2,35,1,0,0,0,4,37,1,0,0,0,6,43,1,0,0,0,8,56,
        1,0,0,0,10,66,1,0,0,0,12,76,1,0,0,0,14,99,1,0,0,0,16,112,1,0,0,0,
        18,122,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,
        0,0,0,23,24,1,0,0,0,24,26,1,0,0,0,25,23,1,0,0,0,26,27,5,0,0,1,27,
        1,1,0,0,0,28,36,3,4,2,0,29,36,3,6,3,0,30,36,3,8,4,0,31,36,3,12,6,
        0,32,36,3,14,7,0,33,36,3,16,8,0,34,36,3,18,9,0,35,28,1,0,0,0,35,
        29,1,0,0,0,35,30,1,0,0,0,35,31,1,0,0,0,35,32,1,0,0,0,35,33,1,0,0,
        0,35,34,1,0,0,0,36,3,1,0,0,0,37,38,5,1,0,0,38,39,5,26,0,0,39,40,
        5,8,0,0,40,41,3,10,5,0,41,42,5,9,0,0,42,5,1,0,0,0,43,44,5,2,0,0,
        44,45,5,26,0,0,45,46,5,12,0,0,46,47,5,13,0,0,47,51,5,14,0,0,48,50,
        3,2,1,0,49,48,1,0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,
        52,54,1,0,0,0,53,51,1,0,0,0,54,55,5,15,0,0,55,7,1,0,0,0,56,57,3,
        10,5,0,57,58,5,9,0,0,58,9,1,0,0,0,59,60,6,5,-1,0,60,67,5,27,0,0,
        61,67,5,26,0,0,62,63,5,12,0,0,63,64,3,10,5,0,64,65,5,13,0,0,65,67,
        1,0,0,0,66,59,1,0,0,0,66,61,1,0,0,0,66,62,1,0,0,0,67,73,1,0,0,0,
        68,69,10,2,0,0,69,70,7,0,0,0,70,72,3,10,5,3,71,68,1,0,0,0,72,75,
        1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,11,1,0,0,0,75,73,1,0,0,0,
        76,77,5,3,0,0,77,78,5,12,0,0,78,79,3,10,5,0,79,80,5,13,0,0,80,84,
        5,14,0,0,81,83,3,2,1,0,82,81,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,
        84,85,1,0,0,0,85,87,1,0,0,0,86,84,1,0,0,0,87,97,5,15,0,0,88,89,5,
        4,0,0,89,93,5,14,0,0,90,92,3,2,1,0,91,90,1,0,0,0,92,95,1,0,0,0,93,
        91,1,0,0,0,93,94,1,0,0,0,94,96,1,0,0,0,95,93,1,0,0,0,96,98,5,15,
        0,0,97,88,1,0,0,0,97,98,1,0,0,0,98,13,1,0,0,0,99,100,5,6,0,0,100,
        101,5,12,0,0,101,102,3,10,5,0,102,103,5,13,0,0,103,107,5,14,0,0,
        104,106,3,2,1,0,105,104,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,
        107,108,1,0,0,0,108,110,1,0,0,0,109,107,1,0,0,0,110,111,5,15,0,0,
        111,15,1,0,0,0,112,113,5,7,0,0,113,117,5,14,0,0,114,116,3,2,1,0,
        115,114,1,0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,
        118,120,1,0,0,0,119,117,1,0,0,0,120,121,5,15,0,0,121,17,1,0,0,0,
        122,124,5,5,0,0,123,125,3,10,5,0,124,123,1,0,0,0,124,125,1,0,0,0,
        125,126,1,0,0,0,126,127,5,9,0,0,127,19,1,0,0,0,11,23,35,51,66,73,
        84,93,97,107,117,124
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!RustParser.__ATN) {
            RustParser.__ATN = new antlr.ATNDeserializer().deserialize(RustParser._serializedATN);
        }

        return RustParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(RustParser.literalNames, RustParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return RustParser.vocabulary;
    }

    private static readonly decisionsToDFA = RustParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(RustParser.EOF, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_program;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclaration(): VariableDeclarationContext | null {
        return this.getRuleContext(0, VariableDeclarationContext);
    }
    public functionDeclaration(): FunctionDeclarationContext | null {
        return this.getRuleContext(0, FunctionDeclarationContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public whileLoop(): WhileLoopContext | null {
        return this.getRuleContext(0, WhileLoopContext);
    }
    public loopStatement(): LoopStatementContext | null {
        return this.getRuleContext(0, LoopStatementContext);
    }
    public returnStatement(): ReturnStatementContext | null {
        return this.getRuleContext(0, ReturnStatementContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_statement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LET(): antlr.TerminalNode {
        return this.getToken(RustParser.LET, 0)!;
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(RustParser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_variableDeclaration;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterVariableDeclaration) {
             listener.enterVariableDeclaration(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitVariableDeclaration) {
             listener.exitVariableDeclaration(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FN(): antlr.TerminalNode {
        return this.getToken(RustParser.FN, 0)!;
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RBRACE, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionDeclaration;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterFunctionDeclaration) {
             listener.enterFunctionDeclaration(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitFunctionDeclaration) {
             listener.exitFunctionDeclaration(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_expressionStatement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterExpressionStatement) {
             listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitExpressionStatement) {
             listener.exitExpressionStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NUMBER, 0);
    }
    public IDENT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.IDENT, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAR, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SLASH, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_expression;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(RustParser.IF, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public LBRACE(): antlr.TerminalNode[];
    public LBRACE(i: number): antlr.TerminalNode | null;
    public LBRACE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.LBRACE);
    	} else {
    		return this.getToken(RustParser.LBRACE, i);
    	}
    }
    public RBRACE(): antlr.TerminalNode[];
    public RBRACE(i: number): antlr.TerminalNode | null;
    public RBRACE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.RBRACE);
    	} else {
    		return this.getToken(RustParser.RBRACE, i);
    	}
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.ELSE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_ifStatement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterIfStatement) {
             listener.enterIfStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitIfStatement) {
             listener.exitIfStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileLoopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHILE(): antlr.TerminalNode {
        return this.getToken(RustParser.WHILE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RBRACE, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_whileLoop;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterWhileLoop) {
             listener.enterWhileLoop(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitWhileLoop) {
             listener.exitWhileLoop(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitWhileLoop) {
            return visitor.visitWhileLoop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOOP(): antlr.TerminalNode {
        return this.getToken(RustParser.LOOP, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RBRACE, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_loopStatement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterLoopStatement) {
             listener.enterLoopStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitLoopStatement) {
             listener.exitLoopStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitLoopStatement) {
            return visitor.visitLoopStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RETURN(): antlr.TerminalNode {
        return this.getToken(RustParser.RETURN, 0)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_returnStatement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterReturnStatement) {
             listener.enterReturnStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitReturnStatement) {
             listener.exitReturnStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
