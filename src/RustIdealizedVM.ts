import { Instruction } from "./RustLangCompiler";
import RustHeap from "./RustHeap";

class RustIdealizedVM {
    private E = [{}];
    private RTS = [];
    private OS = [];
    private instrs: Instruction[];
    private PC: number = 0;
    private unassigned = () => { };

    public constructor(instrs: Instruction[]) {
        this.instrs = instrs
    }

    public execute() {
        while(this.instrs[this.PC].tag !== "DONE") {
            const instr = this.instrs[this.PC];
            this.microcode[instr.tag](instr);
        }
        return this.peek(this.OS);
    }

    private push = (array, ...items) => {
        array.push(...items);
        return array;
    }

    private apply_unop = (op, v) => this.unop_microcode[op](v);

    private apply_binop = (op, v1, v2) => this.binop_microcode[op](v1, v2);

    private unop_microcode = {
        '-': x => - x,
        '!': x => !x
    }

    private binop_microcode = {
        '+': (x, y) => x + y,
        '*': (x, y) => x * y,
        '-': (x, y) => x - y,
        '/': (x, y) => x / y,
        '%': (x, y) => x % y,
        '<': (x, y) => x < y,
        '<=': (x, y) => x <= y,
        '>=': (x, y) => x >= y,
        '>': (x, y) => x > y,
        '==': (x, y) => x === y,
        '!=': (x, y) => x !== y
    }

    private extend = (xs, vs, e) => {
        if (vs.length > xs.length)
            throw new Error('too many arguments')
        if (vs.length < xs.length)
            throw new Error('too few arguments')
        const new_frame = {}
        for (let i = 0; i < xs.length; i++)
            new_frame[xs[i]] = vs[i]
        return [new_frame, ...e]
    }

    private lookup = (x, E) => {
        for (let i = 0; i < E.length; i++) {
            let e = E[i];
            if (e.hasOwnProperty(x)) {
                const v = e[x]
                if (v === this.unassigned)
                    throw new Error(`unassigned name:${x} at ${this.PC}`);
                return v
            }
        }
        throw new Error(`unbound name:${x} at ${this.PC}`);
    }

    private assign_value(x, v, E) {
        for (let i = 0; i < E.length; i++) {
            let e = E[i];
            if (e.hasOwnProperty(x)) {
                e[x] = v;
                return undefined;
            }
        }
        console.log(this.E);
        throw new Error(`unbound name: ${x} at ${this.PC}`);
    }

    private peek = array => array.slice(-1)[0];

    private microcode = {
        LDC:
            instr => {
                this.PC++
                this.push(this.OS, instr.val);
            },
        UNOP:
            instr => {
                this.PC++
                this.push(this.OS, this.apply_unop(instr.sym, this.OS.pop()));
            },
        BINOP:
            instr => {
                this.PC++
                let val2 = this.OS.pop();
                let val1 = this.OS.pop();
                this.push(this.OS, this.apply_binop(instr.sym, val1, val2));
            },

        POP:
            instr => {
                this.PC++;
                this.OS.pop();
            },
        JOF:
            instr => {
                this.PC = this.OS.pop() ? this.PC + 1 : instr.addr;
            },
        GOTO:
            instr => {
                this.PC = instr.addr;
            },
        ENTER_SCOPE:
            instr => {
                this.PC++
                this.push(this.RTS, { tag: 'BLOCK_FRAME', env: this.E })
                const locals = instr.syms
                const unassigneds = locals.map(_ => this.unassigned)
                this.E = this.extend(locals, unassigneds, this.E)
            },
        EXIT_SCOPE:
            instr => {
                this.PC++
                this.E = this.RTS.pop().env
            },
        LD:
            instr => {
                this.PC++
                this.push(this.OS, this.lookup(instr.sym, this.E))
            },
        ASSIGN:
            instr => {
                this.PC++
                this.assign_value(instr.sym, this.peek(this.OS), this.E)
            },
        LDF:
            instr => {
                this.PC++
                this.push(this.OS, {
                    tag: 'CLOSURE', prms: instr.syms,
                    addr: instr.addr, env: this.E
                })
            },
        CALL:
            instr => {
                const arity = instr.arity
                let args = []
                for (let i = arity - 1; i >= 0; i--)
                    args[i] = this.OS.pop()
                const sf = this.OS.pop()
                // if (sf.tag === 'BUILTIN') {
                //     this.PC++
                //     return this.push(this.OS, apply_builtin(sf.sym, args))
                // }
                this.push(this.RTS, { tag: 'CALL_FRAME', addr: this.PC + 1, env: this.E })
                this.E = this.extend(sf.prms, args, sf.env)
                this.PC = sf.addr
            },
        TAIL_CALL:
            instr => {
                const arity = instr.arity
                let args = []
                for (let i = arity - 1; i >= 0; i--)
                    args[i] = this.OS.pop()
                const sf = this.OS.pop()
                // if (sf.tag === 'BUILTIN') {
                //     this.PC++
                //     return this.push(this.OS, apply_builtin(sf.sym, args))
                // }
                // dont push on RTS here
                this.E = this.extend(sf.prms, args, sf.env)
                this.PC = sf.addr
            },
        RESET:
            instr => {
                // keep popping...
                const top_frame = this.RTS.pop()
                if (top_frame.tag === 'CALL_FRAME') {
                    // ...until top frame is a call frame
                    this.PC = top_frame.addr
                    this.E = top_frame.env
                }
            }
    }
}

export default RustIdealizedVM;