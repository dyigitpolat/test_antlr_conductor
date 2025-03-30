import { Instruction } from "./RustLangCompiler";
import RustHeap from "./RustHeap";
import { Tag } from "./RustHeap";

class RustIdealizedVM {
    private E = [{}]; // heap Address
    private RTS = [];  // JS array (stack) of Addresses
    private OS = []; // JS array (stack) of words (Addresses, word-encoded literals, numbers)
    private instrs: Instruction[];
    private PC: number = 0;
    private unassigned = () => { };
    private HEAP = new RustHeap(100000);

    private False = this.HEAP.heap_allocate(Tag.False_tag, 1)
    private is_False = address => this.HEAP.heap_get_tag(address) === Tag.False_tag
    private True = this.HEAP.heap_allocate(Tag.True_tag, 1)
    private is_True = address => this.HEAP.heap_get_tag(address) === Tag.True_tag
    private is_Boolean = address => this.is_True(address) || this.is_False(address)
    private Unassigned = this.HEAP.heap_allocate(Tag.Unassigned_tag, 1)
    private is_Unassigned = address => this.HEAP.heap_get_tag(address) === Tag.Unassigned_tag
    private Undefined = this.HEAP.heap_allocate(Tag.Undefined_tag, 1)
    private is_Undefined = address => this.HEAP.heap_get_tag(address) === Tag.Undefined_tag
    private is_Number = address => 
    this.HEAP.heap_get_tag(address) === Tag.Number_tag

    private heap_allocate_Number = n => {
        const number_address = this.HEAP.heap_allocate(Tag.Number_tag, 2)
        this.HEAP.heap_set(number_address + 1, n)
        return number_address
    }

    // closure
    // [1 byte tag, 1 byte arity, 2 bytes pc, 1 byte unused, 
    //  2 bytes #children, 1 byte unused] 
    // followed by the address of env
    // note: currently bytes at offset 4 and 7 are not used;
    //   they could be used to increase pc and #children range

    private heap_allocate_Closure = (arity, pc, env) => {
        const address = this.HEAP.heap_allocate(Tag.Closure_tag, 2)
        this.HEAP.heap_set_byte_at_offset(address, 1, arity)
        this.HEAP.heap_set_2_bytes_at_offset(address, 2, pc)
        this.HEAP.heap_set(address + 1, env)
        return address
    }

    private heap_get_Closure_arity = address => this.HEAP.heap_get_byte_at_offset(address, 1);

    private heap_get_Closure_pc = address => this.HEAP.heap_get_2_bytes_at_offset(address, 2);

    private heap_get_Closure_environment = address => this.HEAP.heap_get_child(address, 0);

    private is_Closure = address => this.HEAP.heap_get_tag(address) === Tag.Closure_tag;

    // block frame 
    // [1 byte tag, 4 bytes unused, 
    //  2 bytes #children, 1 byte unused] 

    private heap_allocate_Blockframe = (env) => {
        const address = this.HEAP.heap_allocate(Tag.Blockframe_tag, 2)
        this.HEAP.heap_set(address + 1, env)
        return address
    }

    private heap_get_Blockframe_environment = address => this.HEAP.heap_get_child(address, 0)

    private is_Blockframe = address => this.HEAP.heap_get_tag(address) === Tag.Blockframe_tag

    // call frame 
    // [1 byte tag, 1 byte unused, 2 bytes pc, 
    //  1 byte unused, 2 bytes #children, 1 byte unused] 
    // followed by the address of env

    private heap_allocate_Callframe = (env, pc) => {
        const address = this.HEAP.heap_allocate(Tag.Callframe_tag, 2)
        this.HEAP.heap_set_2_bytes_at_offset(address, 2, pc)
        this.HEAP.heap_set(address + 1, env)
        return address
    }

    
    private heap_get_Callframe_environment = address => this.HEAP.heap_get_child(address, 0)

    private heap_get_Callframe_pc = address => this.HEAP.heap_get_2_bytes_at_offset(address, 2)

    private is_Callframe = address => this.HEAP.heap_get_tag(address) === Tag.Callframe_tag

    // environment frame
    // [1 byte tag, 4 bytes unused, 
    //  2 bytes #children, 1 byte unused] 
    // followed by the addresses of its values

    private heap_allocate_Frame = number_of_values => this.HEAP.heap_allocate(Tag.Frame_tag, number_of_values + 1)
        
    // environment
    // [1 byte tag, 4 bytes unused, 
    //  2 bytes #children, 1 byte unused] 
    // followed by the addresses of its frames

    private heap_allocate_Environment = number_of_frames => this.HEAP.heap_allocate(Tag.Environment_tag, number_of_frames + 1)

    private heap_empty_Environment = this.heap_allocate_Environment(0)

    // access environment given by address 
    // using a "position", i.e. a pair of 
    // frame index and value index
    private heap_get_Environment_value = 
    (env_address, position) => {
        const [frame_index, value_index] = position
        const frame_address =
            this.HEAP.heap_get_child(env_address, frame_index)
        return this.HEAP.heap_get_child(
                   frame_address, value_index)
    }

    private heap_set_Environment_value =
    (env_address, position, value) => {
        //display(env_address, "env_address:")
        const [frame_index, value_index] = position
        const frame_address =
            this.HEAP.heap_get_child(env_address, frame_index)
        this.HEAP.heap_set_child(
            frame_address, value_index, value)
    }

    // extend a given environment by a new frame: 
    // create a new environment that is bigger by 1
    // frame slot than the given environment.
    // copy the frame Addresses of the given 
    // environment to the new environment.
    // enter the address of the new frame to end 
    // of the new environment
    private heap_Environment_extend =
    (frame_address, env_address) => {
        const old_size = 
            this.HEAP.heap_get_size(env_address)
        const new_env_address =
            this.heap_allocate_Environment(old_size)
        let i
        for (i = 0; i < old_size - 1; i++) {
            this.HEAP.heap_set_child(
                new_env_address, i,
                this.HEAP.heap_get_child(env_address, i))
        }
        this.HEAP.heap_set_child(new_env_address, i, frame_address)
        return new_env_address
    }

    private JS_value_to_address =  x => 
        x instanceof Boolean
        ? (x ? this.True : this.False)
        : x instanceof Number
        ? this.heap_allocate_Number(x)
        : "unknown word tag: " + x

    private address_to_JS_value = x => 
        this.is_Boolean(x)
        ? (this.is_True(x) ? true : false)
        : this.is_Number(x)
        ? this.HEAP.heap_get(x + 1)
        : this.is_Closure(x)
        ? "<closure>"
        : "unknown word tag: " + x


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

    private apply_unop = (op, v) => this.JS_value_to_address(this.unop_microcode[op](this.address_to_JS_value(v)));

    private apply_binop = (op, v1, v2) => this.JS_value_to_address(this.binop_microcode[op](this.address_to_JS_value(v1), this.address_to_JS_value(v2)));

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
                this.push(this.OS, this.JS_value_to_address(instr.val));
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