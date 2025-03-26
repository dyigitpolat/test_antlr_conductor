import { AbstractParseTreeVisitor, CharStream, CommonTokenStream, ParseTree } from "antlr4ng";
import { RustVisitor } from "./parser/src/RustVisitor";
import { BlockStatementContext, ConstantDeclarationContext, ExpressionContext, ExpressionStatementContext, FunctionCallContext, FunctionDeclarationContext, FunctionNameContext, IfStatementContext, ParametersContext, ProgramContext, ReturnStatementContext, RustParser, StatementContext, VariableDeclarationContext, WhileLoopContext } from "./parser/src/RustParser";

export type Instruction = {
    tag: string
    sym?: string
    val?: string | number | boolean | undefined
    syms?: string[]
    addr?: number
    arity?: number
}

class RustLangCompiler extends AbstractParseTreeVisitor<void> implements RustVisitor<void> {
    private wc: number = 0;
    private instrs: Instruction[] = [];

    public beautifiedPrint() : string {
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
                    }
                }
            } else {
                if (stmts.variableDeclaration()) {
                    out.push(stmts.variableDeclaration().IDENT().getText()); 
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

    private countArity(parameters: ParametersContext) : number {
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
        this.instrs[this.wc++] = {
            tag: 'LDF',
            syms: ctx.parameters().IDENT().map(node => node.getText()),
            addr: this.wc + 1
        }
        const goto_instruction = {tag: 'GOTO'}
        this.instrs[this.wc++] = goto_instruction
        // extend compile-time environment
        this.visit(ctx.blockStatement());
        this.instrs[this.wc++] = {tag: 'LDC', val: undefined}
        this.instrs[this.wc++] = {tag: 'RESET'}
        goto_instruction["addr"] = this.wc;
        this.instrs[this.wc++] = {tag: "ASSIGN", sym: ctx.IDENT().getText()};
    }

    public visitConstantDeclaration(ctx: ConstantDeclarationContext): void {
        this.visit(ctx.expression());
        this.instrs[this.wc++] = {tag: "ASSIGN", sym: ctx.IDENT().getText()}
    }

    public visitVariableDeclaration(ctx: VariableDeclarationContext): void {
        this.visit(ctx.expression());
        this.instrs[this.wc++] = { tag: "ASSIGN", sym: ctx.IDENT().getText() };
    }

    public visitExpressionStatement(ctx: ExpressionStatementContext): void {
        this.visit(ctx.expression());
    }

    public visitBlockStatement(ctx: BlockStatementContext): void {
        const locals = this.scan_declarations(ctx.statement());
        this.instrs[this.wc++] = {tag: "ENTER_SCOPE", syms: locals}
        const stmts = ctx.statement();
        this.handleStatements(stmts)
        this.instrs[this.wc++] = {tag: "EXIT_SCOPE"};
    }

    public visitIfStatement(ctx: IfStatementContext): void {
        this.visit(ctx.expression());
        const jump_on_false_instr = {"tag": "JOF"};
        this.instrs[this.wc++] = jump_on_false_instr;
        this.visit(ctx.conseqStatement());
        const goto_instr = {"tag": "GOTO"};
        this.instrs[this.wc++] = goto_instr;
        jump_on_false_instr["addr"] = this.wc;
        this.visit(ctx.altStatement());
        goto_instr["addr"] = this.wc;
    }

    public visitWhileLoop(ctx: WhileLoopContext) {
        const loop_start = this.wc;
        this.visit(ctx.expression());
        const jump_on_false_instr = {"tag": "JOF"};
        this.instrs[this.wc++] = jump_on_false_instr;
        this.visit(ctx.blockStatement());
        this.instrs[this.wc++] = {tag: 'POP'};
        this.instrs[this.wc++] = {tag: 'GOTO', addr: loop_start};
        jump_on_false_instr["addr"] = this.wc;
        this.instrs[this.wc++] = {tag: 'LDC', val: undefined}
    }

    public visitExpression(ctx: ExpressionContext): void {
        let count: number = ctx.getChildCount()
        if (count === 1) {
            if (ctx.BOOL()) {
                this.instrs[this.wc++] = { tag: "LDC", val: ctx.getChild(0).getText() };
            } else if (ctx.NUMBER()) {
                this.instrs[this.wc++] = { tag: "LDC", val: parseFloat(ctx.getChild(0).getText()) };
            } else if (ctx.IDENT()) {
                this.instrs[this.wc++] = { tag: "LD", sym: ctx.getChild(0).getText() };
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
        this.instrs[this.wc++] = {tag: "LD", sym: ctx.IDENT().getText()};
    }

    public visitFunctionCall(ctx: FunctionCallContext): void {
        this.visit(ctx.getChild(0));
        const args = ctx.arguments().expression();
        for (let expr of args) {
            this.visit(expr);
        }
        this.instrs[this.wc++] = {tag: "CALL", arity: args.length} 
    }
    
    public visitReturnStatement(ctx: ReturnStatementContext): void {
        this.visit(ctx.expression());
        if (this.instrs[this.wc - 1].tag === "CALL") {
            this.instrs[this.wc - 1].tag = "TAIL_CALL";
        } else {
            this.instrs[this.wc++] = {tag: "RESET"};
        }
    }
}

export default RustLangCompiler;