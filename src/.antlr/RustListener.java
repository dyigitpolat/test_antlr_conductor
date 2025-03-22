// Generated from /home/guest1/test_antlr_conductor/src/Rust.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link RustParser}.
 */
public interface RustListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link RustParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(RustParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(RustParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(RustParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(RustParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclaration(RustParser.VariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclaration(RustParser.VariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#blockStatement}.
	 * @param ctx the parse tree
	 */
	void enterBlockStatement(RustParser.BlockStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#blockStatement}.
	 * @param ctx the parse tree
	 */
	void exitBlockStatement(RustParser.BlockStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void enterExpressionStatement(RustParser.ExpressionStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void exitExpressionStatement(RustParser.ExpressionStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(RustParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(RustParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#whileLoop}.
	 * @param ctx the parse tree
	 */
	void enterWhileLoop(RustParser.WhileLoopContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#whileLoop}.
	 * @param ctx the parse tree
	 */
	void exitWhileLoop(RustParser.WhileLoopContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(RustParser.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(RustParser.ReturnStatementContext ctx);
}