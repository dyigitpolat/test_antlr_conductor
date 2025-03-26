// Generated from src/Rust.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgramContext } from "./RustParser.js";
import { StatementContext } from "./RustParser.js";
import { FunctionDeclarationContext } from "./RustParser.js";
import { VariableAssignmentContext } from "./RustParser.js";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RustParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class RustVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `RustParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.variableAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableAssignment?: (ctx: VariableAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameters?: (ctx: ParametersContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.returnType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnType?: (ctx: ReturnTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.constantDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantDeclaration?: (ctx: ConstantDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.variableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.typeAnnotation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeAnnotation?: (ctx: TypeAnnotationContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.blockStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockStatement?: (ctx: BlockStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.expressionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.returnStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.arguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArguments?: (ctx: ArgumentsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.whileLoop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileLoop?: (ctx: WhileLoopContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.ifStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.conseqStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConseqStatement?: (ctx: ConseqStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.altStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltStatement?: (ctx: AltStatementContext) => Result;
}

