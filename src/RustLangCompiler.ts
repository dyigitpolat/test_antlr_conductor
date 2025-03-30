import { AbstractParseTreeVisitor, CharStream, CommonTokenStream, ParseTree } from "antlr4ng";
import { RustVisitor } from "./parser/src/RustVisitor";
import { BlockStatementContext, ConstantDeclarationContext, ExpressionContext, ExpressionStatementContext, FunctionCallContext, FunctionDeclarationContext, FunctionNameContext, IfStatementContext, ParametersContext, ProgramContext, ReturnStatementContext, RustParser, StatementContext, VariableAssignmentContext, VariableDeclarationContext, WhileLoopContext } from "./parser/src/RustParser";

export type Instruction = {
    tag: string
    sym?: string
    val?: string | number | boolean | undefined
    syms?: string[]
    addr?: number
    arity?: number
    pos?: number[]
}

class RustLangCompiler extends AbstractParseTreeVisitor<void> implements RustVisitor<void> {
    private wc: number = 0;
    private instrs: Instruction[] = [];
    private compile_time_environment = [] // compile-time frames only need symbols, each environment is an array

    private value_index(frame, x) {
        for (let i = 0; i < frame.length; i++) {
            if (frame[i] === x)
                return i;
        }
        return -1;
    }

    private compile_time_environment_position(env, x) {
        let last_ind = env.length - 1;
        while (this.value_index(env[last_ind], x) === -1) {
            last_ind--;
        }
        return [last_ind, this.value_index(env[last_ind], x)]
    }

    private compile_time_environment_extend(vs: any[], e: any[]): any[] {
        let res = [...e];
        if (vs.length > 0) {
            res.push(vs);
        }
        return res;
    }

    public beautifiedPrint(): string {
        let out = "";
        for (let i = 0; i < this.instrs.length; i++) {
            let instr = this.instrs[i];
            out += `${i}: ` + JSON.stringify(instr) + "\n";
        }
        return out;
    }

    private scan_declarations(stmts: StatementContext | StatementContext[] | null): string[] {
        let out = []
        if (stmts !== null) {
            if (Array.isArray(stmts)) {
                for (let i = 0; i <= stmts.length - 1; i++) {
                    const stmt = stmts[i];
                    if (stmt.variableDeclaration()) {
                        out.push(stmt.variableDeclaration().IDENT().getText());
                    } else if (stmt.functionDeclaration()) {
                        out.push(stmt.functionDeclaration().IDENT().getText());
                    } else if (stmt.constantDeclaration()) {
                        out.push(stmt.constantDeclaration().IDENT().getText());
                    }
                }
            } else {
                if (stmts.variableDeclaration()) {
                    out.push(stmts.variableDeclaration().IDENT().getText());
                } else if (stmts.functionDeclaration()) {
                    out.push(stmts.functionDeclaration().IDENT().getText());
                } else if (stmts.constantDeclaration()) {
                    out.push(stmts.constantDeclaration().IDENT().getText());
                }
            }
        }
        return out
    }

    private handleStatements(stmts: StatementContext | StatementContext[] | null) {
        if (stmts !== null) {
            if (Array.isArray(stmts)) {
                for (let i = 0; i <= stmts.length - 1; i++) {
                    const stmt = stmts[i];
                    this.visit(stmt);
                    if (i !== stmts.length - 1)
                        this.instrs[this.wc++] = { tag: "POP" };
                }
            } else {
                this.visit(stmts);
            }
        }
    }

    private countArity(parameters: ParametersContext): number {
        return parameters.IDENT().length;
    }

    public getInstructions(): Instruction[] {
        return this.instrs;
    }

    public visitProgram(ctx: ProgramContext): void {
        let stmts = ctx.statement();
        this.handleStatements(stmts);
        this.instrs[this.wc++] = { tag: "DONE" };
    }

    public visitFunctionDeclaration(ctx: FunctionDeclarationContext): void {
        let params = ctx.parameters().IDENT().map(node => node.getText());
        let current_ce = this.compile_time_environment;

        this.instrs[this.wc++] = {
            tag: 'LDF',
            syms: params,
            addr: this.wc + 1
        }

        const goto_instruction = { tag: 'GOTO' }
        this.instrs[this.wc++] = goto_instruction
        // extend compile-time environment
        this.compile_time_environment = this.compile_time_environment_extend(params, current_ce);
        this.visit(ctx.blockStatement());
        this.instrs[this.wc++] = { tag: 'LDC', val: undefined }
        this.instrs[this.wc++] = { tag: 'RESET' }
        goto_instruction["addr"] = this.wc;
        this.compile_time_environment = current_ce;

        let function_name = ctx.IDENT().getText();
        this.instrs[this.wc++] = {
            tag: "ASSIGN",
            sym: function_name,
            pos: this.compile_time_environment_position(this.compile_time_environment, function_name)
        };
    }

    public visitConstantDeclaration(ctx: ConstantDeclarationContext): void {
        this.visit(ctx.expression());
        const symbol: string = ctx.IDENT().getText();
        this.instrs[this.wc++] = {
            tag: "ASSIGN",
            sym: symbol,
            pos: this.compile_time_environment_position(this.compile_time_environment, symbol)
        };
    }

    public visitVariableDeclaration(ctx: VariableDeclarationContext): void {
        this.visit(ctx.expression());
        const symbol: string = ctx.IDENT().getText();
        this.instrs[this.wc++] = {
            tag: "ASSIGN",
            sym: symbol,
            pos: this.compile_time_environment_position(this.compile_time_environment, symbol)
        };
    }

    public visitExpressionStatement(ctx: ExpressionStatementContext): void {
        this.visit(ctx.expression());
    }

    public visitBlockStatement(ctx: BlockStatementContext): void {
        const locals = this.scan_declarations(ctx.statement());
        // console.log(locals.length > 0);
        let current = this.compile_time_environment
        this.instrs[this.wc++] = { tag: "ENTER_SCOPE", syms: locals }
        // Extend current compile_time_environment
        this.compile_time_environment = this.compile_time_environment_extend(locals, current)
        const stmts = ctx.statement();
        this.handleStatements(stmts)
        this.instrs[this.wc++] = { tag: "EXIT_SCOPE" };
        this.compile_time_environment = current;
    }

    public visitIfStatement(ctx: IfStatementContext): void {
        this.visit(ctx.expression());
        const jump_on_false_instr = { "tag": "JOF" };
        this.instrs[this.wc++] = jump_on_false_instr;
        this.visit(ctx.conseqStatement());
        const goto_instr = { "tag": "GOTO" };
        this.instrs[this.wc++] = goto_instr;
        jump_on_false_instr["addr"] = this.wc;
        if (ctx.altStatement())
            this.visit(ctx.altStatement());
        goto_instr["addr"] = this.wc;
    }

    public visitWhileLoop(ctx: WhileLoopContext) {
        const loop_start = this.wc;
        this.visit(ctx.expression());
        const jump_on_false_instr = { "tag": "JOF" };
        this.instrs[this.wc++] = jump_on_false_instr;
        this.visit(ctx.blockStatement());
        this.instrs[this.wc++] = { tag: 'POP' };
        this.instrs[this.wc++] = { tag: 'GOTO', addr: loop_start };
        jump_on_false_instr["addr"] = this.wc;
        this.instrs[this.wc++] = { tag: 'LDC', val: undefined }
    }

    public visitExpression(ctx: ExpressionContext): void {
        let count: number = ctx.getChildCount()
        if (count === 1) {
            if (ctx.BOOL()) {
                this.instrs[this.wc++] = { tag: "LDC", val: ctx.getChild(0).getText() };
            } else if (ctx.NUMBER()) {
                this.instrs[this.wc++] = { tag: "LDC", val: parseFloat(ctx.getChild(0).getText()) };
            } else if (ctx.IDENT()) {
                let symbol = ctx.getChild(0).getText();
                this.instrs[this.wc++] = { tag: "LD", sym: symbol, pos: this.compile_time_environment_position(this.compile_time_environment, symbol) };
            } else {
                this.visit(ctx.functionCall());
            }
        } else if (count === 2) {
            this.visit(ctx.getChild(1));
            this.instrs[this.wc++] = { tag: "UNOP", sym: ctx.getChild(0).getText() }
        } else if (count === 3) {
            if (ctx.LPAREN() && ctx.RPAREN()) {
                this.visit(ctx.getChild(1));
            } else {
                this.visit(ctx.getChild(0));
                this.visit(ctx.getChild(2));
                this.instrs[this.wc++] = { tag: "BINOP", sym: ctx.getChild(1).getText() };
            }
        } else {
            throw new Error("Unrecognizable instructions");
        }
    }

    public visitFunctionName(ctx: FunctionNameContext): void {
        let symbol: string = ctx.IDENT().getText();
        this.instrs[this.wc++] = {
            tag: "LD",
            sym: symbol,
            pos: this.compile_time_environment_position(this.compile_time_environment, symbol)
        };
    }

    public visitFunctionCall(ctx: FunctionCallContext): void {
        this.visit(ctx.getChild(0));
        const args = ctx.arguments().expression();
        for (let expr of args) {
            this.visit(expr);
        }
        this.instrs[this.wc++] = { tag: "CALL", arity: args.length }
    }

    public visitReturnStatement(ctx: ReturnStatementContext): void {
        this.visit(ctx.expression());
        if (this.instrs[this.wc - 1].tag === "CALL") {
            this.instrs[this.wc - 1].tag = "TAIL_CALL";
        } else {
            this.instrs[this.wc++] = { tag: "RESET" };
        }
    }

    public visitVariableAssignment(ctx: VariableAssignmentContext) {
        this.visit(ctx.expression());
        let symbol: string = ctx.IDENT().getText();
        this.instrs[this.wc++] = {
            tag: "ASSIGN",
            sym: symbol,
            pos: this.compile_time_environment_position(this.compile_time_environment, symbol)
        };
    }
}

export default RustLangCompiler;