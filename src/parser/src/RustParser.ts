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
    public static readonly RULE_program = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_functionDeclaration = 2;
    public static readonly RULE_variableAssignment = 3;
    public static readonly RULE_parameters = 4;
    public static readonly RULE_returnType = 5;
    public static readonly RULE_constantDeclaration = 6;
    public static readonly RULE_variableDeclaration = 7;
    public static readonly RULE_typeAnnotation = 8;
    public static readonly RULE_blockStatement = 9;
    public static readonly RULE_expressionStatement = 10;
    public static readonly RULE_expression = 11;
    public static readonly RULE_returnStatement = 12;
    public static readonly RULE_functionCall = 13;
    public static readonly RULE_functionName = 14;
    public static readonly RULE_arguments = 15;
    public static readonly RULE_whileLoop = 16;
    public static readonly RULE_ifStatement = 17;
    public static readonly RULE_conseqStatement = 18;
    public static readonly RULE_altStatement = 19;

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
    public static readonly ruleNames = [
        "program", "statement", "functionDeclaration", "variableAssignment", 
        "parameters", "returnType", "constantDeclaration", "variableDeclaration", 
        "typeAnnotation", "blockStatement", "expressionStatement", "expression", 
        "returnStatement", "functionCall", "functionName", "arguments", 
        "whileLoop", "ifStatement", "conseqStatement", "altStatement",
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
            this.state = 43;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1076167390) !== 0) || _la === 32 || _la === 33) {
                {
                {
                this.state = 40;
                this.statement();
                }
                }
                this.state = 45;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 46;
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
            this.state = 57;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 48;
                this.constantDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 49;
                this.variableDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 50;
                this.functionDeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 51;
                this.variableAssignment();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 52;
                this.expressionStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 53;
                this.blockStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 54;
                this.ifStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 55;
                this.whileLoop();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 56;
                this.returnStatement();
                }
                break;
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
        this.enterRule(localContext, 4, RustParser.RULE_functionDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 59;
            this.match(RustParser.FN);
            this.state = 60;
            this.match(RustParser.IDENT);
            this.state = 61;
            this.match(RustParser.LPAREN);
            this.state = 63;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 62;
                this.parameters();
                }
            }

            this.state = 65;
            this.match(RustParser.RPAREN);
            this.state = 67;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 66;
                this.returnType();
                }
            }

            this.state = 69;
            this.blockStatement();
            this.state = 70;
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
    public variableAssignment(): VariableAssignmentContext {
        let localContext = new VariableAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 6, RustParser.RULE_variableAssignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 72;
            this.match(RustParser.IDENT);
            this.state = 73;
            this.match(RustParser.ASSIGN);
            this.state = 74;
            this.expression(0);
            this.state = 75;
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
    public parameters(): ParametersContext {
        let localContext = new ParametersContext(this.context, this.state);
        this.enterRule(localContext, 8, RustParser.RULE_parameters);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 77;
            this.match(RustParser.IDENT);
            this.state = 78;
            this.match(RustParser.COLON);
            this.state = 79;
            this.match(RustParser.TYPE);
            this.state = 86;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 15) {
                {
                {
                this.state = 80;
                this.match(RustParser.COMMA);
                this.state = 81;
                this.match(RustParser.IDENT);
                this.state = 82;
                this.match(RustParser.COLON);
                this.state = 83;
                this.match(RustParser.TYPE);
                }
                }
                this.state = 88;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
    public returnType(): ReturnTypeContext {
        let localContext = new ReturnTypeContext(this.context, this.state);
        this.enterRule(localContext, 10, RustParser.RULE_returnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 89;
            this.match(RustParser.ARROW);
            this.state = 90;
            this.match(RustParser.TYPE);
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
    public constantDeclaration(): ConstantDeclarationContext {
        let localContext = new ConstantDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 12, RustParser.RULE_constantDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 92;
            this.match(RustParser.CONST);
            this.state = 93;
            this.match(RustParser.IDENT);
            this.state = 95;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14) {
                {
                this.state = 94;
                this.typeAnnotation();
                }
            }

            this.state = 97;
            this.match(RustParser.ASSIGN);
            this.state = 98;
            this.expression(0);
            this.state = 99;
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
    public variableDeclaration(): VariableDeclarationContext {
        let localContext = new VariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 14, RustParser.RULE_variableDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 101;
            this.match(RustParser.LET);
            this.state = 102;
            this.match(RustParser.IDENT);
            this.state = 104;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14) {
                {
                this.state = 103;
                this.typeAnnotation();
                }
            }

            this.state = 106;
            this.match(RustParser.ASSIGN);
            this.state = 107;
            this.expression(0);
            this.state = 108;
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
    public typeAnnotation(): TypeAnnotationContext {
        let localContext = new TypeAnnotationContext(this.context, this.state);
        this.enterRule(localContext, 16, RustParser.RULE_typeAnnotation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 110;
            this.match(RustParser.COLON);
            this.state = 111;
            this.match(RustParser.TYPE);
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
    public blockStatement(): BlockStatementContext {
        let localContext = new BlockStatementContext(this.context, this.state);
        this.enterRule(localContext, 18, RustParser.RULE_blockStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 113;
            this.match(RustParser.LBRACE);
            this.state = 117;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1076167390) !== 0) || _la === 32 || _la === 33) {
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
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 20, RustParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 122;
            this.expression(0);
            this.state = 123;
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
        let _startState = 22;
        this.enterRecursionRule(localContext, 22, RustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 136;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                {
                this.state = 126;
                this.match(RustParser.NUMBER);
                }
                break;
            case 2:
                {
                this.state = 127;
                this.match(RustParser.BOOL);
                }
                break;
            case 3:
                {
                this.state = 128;
                this.match(RustParser.IDENT);
                }
                break;
            case 4:
                {
                this.state = 129;
                this.functionCall();
                }
                break;
            case 5:
                {
                this.state = 130;
                _la = this.tokenStream.LA(1);
                if(!(_la === 21 || _la === 30)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 131;
                this.expression(2);
                }
                break;
            case 6:
                {
                this.state = 132;
                this.match(RustParser.LPAREN);
                this.state = 133;
                this.expression(0);
                this.state = 134;
                this.match(RustParser.RPAREN);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 149;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 147;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 138;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 139;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 22 || _la === 23)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 140;
                        this.expression(6);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 141;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 142;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 20 || _la === 21)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 143;
                        this.expression(5);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 144;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 145;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1056964608) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 146;
                        this.expression(4);
                        }
                        break;
                    }
                    }
                }
                this.state = 151;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
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
    public returnStatement(): ReturnStatementContext {
        let localContext = new ReturnStatementContext(this.context, this.state);
        this.enterRule(localContext, 24, RustParser.RULE_returnStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 152;
            this.match(RustParser.RETURN);
            this.state = 154;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & 27267201) !== 0)) {
                {
                this.state = 153;
                this.expression(0);
                }
            }

            this.state = 156;
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
    public functionCall(): FunctionCallContext {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 26, RustParser.RULE_functionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 158;
            this.functionName();
            this.state = 159;
            this.match(RustParser.LPAREN);
            this.state = 161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & 27267201) !== 0)) {
                {
                this.state = 160;
                this.arguments();
                }
            }

            this.state = 163;
            this.match(RustParser.RPAREN);
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
    public functionName(): FunctionNameContext {
        let localContext = new FunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 28, RustParser.RULE_functionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 165;
            this.match(RustParser.IDENT);
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
    public arguments(): ArgumentsContext {
        let localContext = new ArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 30, RustParser.RULE_arguments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 167;
            this.expression(0);
            this.state = 172;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 15) {
                {
                {
                this.state = 168;
                this.match(RustParser.COMMA);
                this.state = 169;
                this.expression(0);
                }
                }
                this.state = 174;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
        this.enterRule(localContext, 32, RustParser.RULE_whileLoop);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 175;
            this.match(RustParser.WHILE);
            this.state = 176;
            this.expression(0);
            this.state = 177;
            this.blockStatement();
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
    public ifStatement(): IfStatementContext {
        let localContext = new IfStatementContext(this.context, this.state);
        this.enterRule(localContext, 34, RustParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 179;
            this.match(RustParser.IF);
            this.state = 180;
            this.expression(0);
            this.state = 181;
            this.conseqStatement();
            this.state = 184;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 182;
                this.match(RustParser.ELSE);
                this.state = 183;
                this.altStatement();
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
    public conseqStatement(): ConseqStatementContext {
        let localContext = new ConseqStatementContext(this.context, this.state);
        this.enterRule(localContext, 36, RustParser.RULE_conseqStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 186;
            this.blockStatement();
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
    public altStatement(): AltStatementContext {
        let localContext = new AltStatementContext(this.context, this.state);
        this.enterRule(localContext, 38, RustParser.RULE_altStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 188;
            this.blockStatement();
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
        case 11:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 5);
        case 1:
            return this.precpred(this.context, 4);
        case 2:
            return this.precpred(this.context, 3);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,36,191,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,0,
        5,0,42,8,0,10,0,12,0,45,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,3,1,58,8,1,1,2,1,2,1,2,1,2,3,2,64,8,2,1,2,1,2,3,2,68,8,2,
        1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,
        85,8,4,10,4,12,4,88,9,4,1,5,1,5,1,5,1,6,1,6,1,6,3,6,96,8,6,1,6,1,
        6,1,6,1,6,1,7,1,7,1,7,3,7,105,8,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,
        9,1,9,5,9,116,8,9,10,9,12,9,119,9,9,1,9,1,9,1,10,1,10,1,10,1,11,
        1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,137,8,11,
        1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,148,8,11,10,11,
        12,11,151,9,11,1,12,1,12,3,12,155,8,12,1,12,1,12,1,13,1,13,1,13,
        3,13,162,8,13,1,13,1,13,1,14,1,14,1,15,1,15,1,15,5,15,171,8,15,10,
        15,12,15,174,9,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,3,
        17,185,8,17,1,18,1,18,1,19,1,19,1,19,0,1,22,20,0,2,4,6,8,10,12,14,
        16,18,20,22,24,26,28,30,32,34,36,38,0,4,2,0,21,21,30,30,1,0,22,23,
        1,0,20,21,1,0,24,29,197,0,43,1,0,0,0,2,57,1,0,0,0,4,59,1,0,0,0,6,
        72,1,0,0,0,8,77,1,0,0,0,10,89,1,0,0,0,12,92,1,0,0,0,14,101,1,0,0,
        0,16,110,1,0,0,0,18,113,1,0,0,0,20,122,1,0,0,0,22,136,1,0,0,0,24,
        152,1,0,0,0,26,158,1,0,0,0,28,165,1,0,0,0,30,167,1,0,0,0,32,175,
        1,0,0,0,34,179,1,0,0,0,36,186,1,0,0,0,38,188,1,0,0,0,40,42,3,2,1,
        0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,46,
        1,0,0,0,45,43,1,0,0,0,46,47,5,0,0,1,47,1,1,0,0,0,48,58,3,12,6,0,
        49,58,3,14,7,0,50,58,3,4,2,0,51,58,3,6,3,0,52,58,3,20,10,0,53,58,
        3,18,9,0,54,58,3,34,17,0,55,58,3,32,16,0,56,58,3,24,12,0,57,48,1,
        0,0,0,57,49,1,0,0,0,57,50,1,0,0,0,57,51,1,0,0,0,57,52,1,0,0,0,57,
        53,1,0,0,0,57,54,1,0,0,0,57,55,1,0,0,0,57,56,1,0,0,0,58,3,1,0,0,
        0,59,60,5,3,0,0,60,61,5,32,0,0,61,63,5,16,0,0,62,64,3,8,4,0,63,62,
        1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,67,5,17,0,0,66,68,3,10,5,
        0,67,66,1,0,0,0,67,68,1,0,0,0,68,69,1,0,0,0,69,70,3,18,9,0,70,71,
        5,13,0,0,71,5,1,0,0,0,72,73,5,32,0,0,73,74,5,12,0,0,74,75,3,22,11,
        0,75,76,5,13,0,0,76,7,1,0,0,0,77,78,5,32,0,0,78,79,5,14,0,0,79,86,
        5,10,0,0,80,81,5,15,0,0,81,82,5,32,0,0,82,83,5,14,0,0,83,85,5,10,
        0,0,84,80,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,9,
        1,0,0,0,88,86,1,0,0,0,89,90,5,31,0,0,90,91,5,10,0,0,91,11,1,0,0,
        0,92,93,5,2,0,0,93,95,5,32,0,0,94,96,3,16,8,0,95,94,1,0,0,0,95,96,
        1,0,0,0,96,97,1,0,0,0,97,98,5,12,0,0,98,99,3,22,11,0,99,100,5,13,
        0,0,100,13,1,0,0,0,101,102,5,1,0,0,102,104,5,32,0,0,103,105,3,16,
        8,0,104,103,1,0,0,0,104,105,1,0,0,0,105,106,1,0,0,0,106,107,5,12,
        0,0,107,108,3,22,11,0,108,109,5,13,0,0,109,15,1,0,0,0,110,111,5,
        14,0,0,111,112,5,10,0,0,112,17,1,0,0,0,113,117,5,18,0,0,114,116,
        3,2,1,0,115,114,1,0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,117,118,
        1,0,0,0,118,120,1,0,0,0,119,117,1,0,0,0,120,121,5,19,0,0,121,19,
        1,0,0,0,122,123,3,22,11,0,123,124,5,13,0,0,124,21,1,0,0,0,125,126,
        6,11,-1,0,126,137,5,33,0,0,127,137,5,9,0,0,128,137,5,32,0,0,129,
        137,3,26,13,0,130,131,7,0,0,0,131,137,3,22,11,2,132,133,5,16,0,0,
        133,134,3,22,11,0,134,135,5,17,0,0,135,137,1,0,0,0,136,125,1,0,0,
        0,136,127,1,0,0,0,136,128,1,0,0,0,136,129,1,0,0,0,136,130,1,0,0,
        0,136,132,1,0,0,0,137,149,1,0,0,0,138,139,10,5,0,0,139,140,7,1,0,
        0,140,148,3,22,11,6,141,142,10,4,0,0,142,143,7,2,0,0,143,148,3,22,
        11,5,144,145,10,3,0,0,145,146,7,3,0,0,146,148,3,22,11,4,147,138,
        1,0,0,0,147,141,1,0,0,0,147,144,1,0,0,0,148,151,1,0,0,0,149,147,
        1,0,0,0,149,150,1,0,0,0,150,23,1,0,0,0,151,149,1,0,0,0,152,154,5,
        6,0,0,153,155,3,22,11,0,154,153,1,0,0,0,154,155,1,0,0,0,155,156,
        1,0,0,0,156,157,5,13,0,0,157,25,1,0,0,0,158,159,3,28,14,0,159,161,
        5,16,0,0,160,162,3,30,15,0,161,160,1,0,0,0,161,162,1,0,0,0,162,163,
        1,0,0,0,163,164,5,17,0,0,164,27,1,0,0,0,165,166,5,32,0,0,166,29,
        1,0,0,0,167,172,3,22,11,0,168,169,5,15,0,0,169,171,3,22,11,0,170,
        168,1,0,0,0,171,174,1,0,0,0,172,170,1,0,0,0,172,173,1,0,0,0,173,
        31,1,0,0,0,174,172,1,0,0,0,175,176,5,7,0,0,176,177,3,22,11,0,177,
        178,3,18,9,0,178,33,1,0,0,0,179,180,5,4,0,0,180,181,3,22,11,0,181,
        184,3,36,18,0,182,183,5,5,0,0,183,185,3,38,19,0,184,182,1,0,0,0,
        184,185,1,0,0,0,185,35,1,0,0,0,186,187,3,18,9,0,187,37,1,0,0,0,188,
        189,3,18,9,0,189,39,1,0,0,0,15,43,57,63,67,86,95,104,117,136,147,
        149,154,161,172,184
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
    public constantDeclaration(): ConstantDeclarationContext | null {
        return this.getRuleContext(0, ConstantDeclarationContext);
    }
    public variableDeclaration(): VariableDeclarationContext | null {
        return this.getRuleContext(0, VariableDeclarationContext);
    }
    public functionDeclaration(): FunctionDeclarationContext | null {
        return this.getRuleContext(0, FunctionDeclarationContext);
    }
    public variableAssignment(): VariableAssignmentContext | null {
        return this.getRuleContext(0, VariableAssignmentContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public blockStatement(): BlockStatementContext | null {
        return this.getRuleContext(0, BlockStatementContext);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public whileLoop(): WhileLoopContext | null {
        return this.getRuleContext(0, WhileLoopContext);
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
    public blockStatement(): BlockStatementContext {
        return this.getRuleContext(0, BlockStatementContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public parameters(): ParametersContext | null {
        return this.getRuleContext(0, ParametersContext);
    }
    public returnType(): ReturnTypeContext | null {
        return this.getRuleContext(0, ReturnTypeContext);
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


export class VariableAssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
        return RustParser.RULE_variableAssignment;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterVariableAssignment) {
             listener.enterVariableAssignment(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitVariableAssignment) {
             listener.exitVariableAssignment(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitVariableAssignment) {
            return visitor.visitVariableAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode[];
    public IDENT(i: number): antlr.TerminalNode | null;
    public IDENT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.IDENT);
    	} else {
    		return this.getToken(RustParser.IDENT, i);
    	}
    }
    public COLON(): antlr.TerminalNode[];
    public COLON(i: number): antlr.TerminalNode | null;
    public COLON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COLON);
    	} else {
    		return this.getToken(RustParser.COLON, i);
    	}
    }
    public TYPE(): antlr.TerminalNode[];
    public TYPE(i: number): antlr.TerminalNode | null;
    public TYPE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.TYPE);
    	} else {
    		return this.getToken(RustParser.TYPE, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_parameters;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterParameters) {
             listener.enterParameters(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitParameters) {
             listener.exitParameters(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitParameters) {
            return visitor.visitParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(RustParser.ARROW, 0)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(RustParser.TYPE, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_returnType;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterReturnType) {
             listener.enterReturnType(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitReturnType) {
             listener.exitReturnType(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitReturnType) {
            return visitor.visitReturnType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstantDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONST(): antlr.TerminalNode {
        return this.getToken(RustParser.CONST, 0)!;
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
    public typeAnnotation(): TypeAnnotationContext | null {
        return this.getRuleContext(0, TypeAnnotationContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_constantDeclaration;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterConstantDeclaration) {
             listener.enterConstantDeclaration(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitConstantDeclaration) {
             listener.exitConstantDeclaration(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitConstantDeclaration) {
            return visitor.visitConstantDeclaration(this);
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
    public typeAnnotation(): TypeAnnotationContext | null {
        return this.getRuleContext(0, TypeAnnotationContext);
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


export class TypeAnnotationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(RustParser.TYPE, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeAnnotation;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterTypeAnnotation) {
             listener.enterTypeAnnotation(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitTypeAnnotation) {
             listener.exitTypeAnnotation(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitTypeAnnotation) {
            return visitor.visitTypeAnnotation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
        return RustParser.RULE_blockStatement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterBlockStatement) {
             listener.enterBlockStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitBlockStatement) {
             listener.exitBlockStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitBlockStatement) {
            return visitor.visitBlockStatement(this);
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
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.BOOL, 0);
    }
    public IDENT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.IDENT, 0);
    }
    public functionCall(): FunctionCallContext | null {
        return this.getRuleContext(0, FunctionCallContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NOT, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAR, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SLASH, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PLUS, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public GEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.GEQ, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.GT, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LT, 0);
    }
    public LEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LEQ, 0);
    }
    public NEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NEQ, 0);
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


export class FunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionName(): FunctionNameContext {
        return this.getRuleContext(0, FunctionNameContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionCall;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(RustParser.IDENT, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionName;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterFunctionName) {
             listener.enterFunctionName(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitFunctionName) {
             listener.exitFunctionName(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitFunctionName) {
            return visitor.visitFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_arguments;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterArguments) {
             listener.enterArguments(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitArguments) {
             listener.exitArguments(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
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
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockStatement(): BlockStatementContext {
        return this.getRuleContext(0, BlockStatementContext)!;
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


export class IfStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(RustParser.IF, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public conseqStatement(): ConseqStatementContext {
        return this.getRuleContext(0, ConseqStatementContext)!;
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.ELSE, 0);
    }
    public altStatement(): AltStatementContext | null {
        return this.getRuleContext(0, AltStatementContext);
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


export class ConseqStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockStatement(): BlockStatementContext {
        return this.getRuleContext(0, BlockStatementContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_conseqStatement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterConseqStatement) {
             listener.enterConseqStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitConseqStatement) {
             listener.exitConseqStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitConseqStatement) {
            return visitor.visitConseqStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AltStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockStatement(): BlockStatementContext {
        return this.getRuleContext(0, BlockStatementContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_altStatement;
    }
    public override enterRule(listener: RustListener): void {
        if(listener.enterAltStatement) {
             listener.enterAltStatement(this);
        }
    }
    public override exitRule(listener: RustListener): void {
        if(listener.exitAltStatement) {
             listener.exitAltStatement(this);
        }
    }
    public override accept<Result>(visitor: RustVisitor<Result>): Result | null {
        if (visitor.visitAltStatement) {
            return visitor.visitAltStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
