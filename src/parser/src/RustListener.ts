// Generated from src/Rust.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgramContext } from "./RustParser.js";
import { StatementContext } from "./RustParser.js";
import { FunctionDeclarationContext } from "./RustParser.js";
import { ParametersContext } from "./RustParser.js";
import { ReturnTypeContext } from "./RustParser.js";
import { ConstantDeclarationContext } from "./RustParser.js";
import { VariableDeclarationContext } from "./RustParser.js";
import { TypeAnnotationContext } from "./RustParser.js";
import { BlockStatementContext } from "./RustParser.js";
import { ExpressionStatementContext } from "./RustParser.js";
import { ExpressionContext } from "./RustParser.js";
import { ReturnStatementContext } from "./RustParser.js";
import { FunctionCallContext } from "./RustParser.js";
import { FunctionNameContext } from "./RustParser.js";
import { ArgumentsContext } from "./RustParser.js";
import { WhileLoopContext } from "./RustParser.js";
import { IfStatementContext } from "./RustParser.js";
import { ConseqStatementContext } from "./RustParser.js";
import { AltStatementContext } from "./RustParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RustParser`.
 */
export class RustListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `RustParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionDeclaration`.
     * @param ctx the parse tree
     */
    enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionDeclaration`.
     * @param ctx the parse tree
     */
    exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.parameters`.
     * @param ctx the parse tree
     */
    enterParameters?: (ctx: ParametersContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.parameters`.
     * @param ctx the parse tree
     */
    exitParameters?: (ctx: ParametersContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.returnType`.
     * @param ctx the parse tree
     */
    enterReturnType?: (ctx: ReturnTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.returnType`.
     * @param ctx the parse tree
     */
    exitReturnType?: (ctx: ReturnTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.constantDeclaration`.
     * @param ctx the parse tree
     */
    enterConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.constantDeclaration`.
     * @param ctx the parse tree
     */
    exitConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.variableDeclaration`.
     * @param ctx the parse tree
     */
    enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.variableDeclaration`.
     * @param ctx the parse tree
     */
    exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.typeAnnotation`.
     * @param ctx the parse tree
     */
    enterTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.typeAnnotation`.
     * @param ctx the parse tree
     */
    exitTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.blockStatement`.
     * @param ctx the parse tree
     */
    enterBlockStatement?: (ctx: BlockStatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.blockStatement`.
     * @param ctx the parse tree
     */
    exitBlockStatement?: (ctx: BlockStatementContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.expressionStatement`.
     * @param ctx the parse tree
     */
    enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.expressionStatement`.
     * @param ctx the parse tree
     */
    exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.returnStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.returnStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionCall`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionCall`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionName`.
     * @param ctx the parse tree
     */
    enterFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionName`.
     * @param ctx the parse tree
     */
    exitFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.arguments`.
     * @param ctx the parse tree
     */
    enterArguments?: (ctx: ArgumentsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.arguments`.
     * @param ctx the parse tree
     */
    exitArguments?: (ctx: ArgumentsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.whileLoop`.
     * @param ctx the parse tree
     */
    enterWhileLoop?: (ctx: WhileLoopContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.whileLoop`.
     * @param ctx the parse tree
     */
    exitWhileLoop?: (ctx: WhileLoopContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.ifStatement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.ifStatement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.conseqStatement`.
     * @param ctx the parse tree
     */
    enterConseqStatement?: (ctx: ConseqStatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.conseqStatement`.
     * @param ctx the parse tree
     */
    exitConseqStatement?: (ctx: ConseqStatementContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.altStatement`.
     * @param ctx the parse tree
     */
    enterAltStatement?: (ctx: AltStatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.altStatement`.
     * @param ctx the parse tree
     */
    exitAltStatement?: (ctx: AltStatementContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

