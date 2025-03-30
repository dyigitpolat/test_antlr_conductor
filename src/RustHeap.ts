export enum Tag {
    False_tag          = 0,
    True_tag           = 1,
    Number_tag         = 2,
    Null_tag           = 3,
    Unassigned_tag     = 4,
    Undefined_tag      = 5,
    Blockframe_tag     = 6,
    Callframe_tag      = 7,
    Closure_tag        = 8,
    Frame_tag          = 9,
    Environment_tag    = 10,
    Pair_tag           = 11,
    Builtin_tag        = 12
}

class RustHeap {
    private word_size: number = 8;
    private mega: number = 2 ** 20;
    private size_offset: number = 5;
    private data: ArrayBuffer;
    private heap: DataView;
    public free: number = 0;

    public constructor(bytes: number) {
        this.heap_make(bytes);
    }

    private heap_make(bytes: number): void {
        if (bytes % 8 !== 0) {
            throw Error("heap bytes must be divisible by 8")
        }
        this.data = new ArrayBuffer(bytes);
        this.heap = new DataView(this.data); 
    }

    public heap_allocate(tag: number, size: number) : number {
        const addr: number = this.free;
        this.free += size;

        this.heap.setUint8(addr * this.word_size, tag);
        this.heap.setUint16(addr * this.word_size + this.size_offset, size);
        return addr;
    }

    public heap_get = address =>
        this.heap.getFloat64(address * this.word_size)

    public heap_set = (address, x) =>
        this.heap.setFloat64(address * this.word_size, x)

    // child index starts at 0
    public heap_get_child = (address, child_index) =>
        this.heap_get(address + 1 + child_index)

    public heap_set_child = (address, child_index, value) =>
        this.heap_set(address + 1 + child_index, value)

    public heap_get_tag = 
        address => this.heap.getUint8(address * this.word_size)
    
    public heap_get_size = 
        address => this.heap.getUint16(address * this.word_size + 
                              this.size_offset)

    public heap_get_number_of_children = 
        address => this.heap_get_tag(address) === Tag.Number_tag
               ? 0
               : this.heap_get_size(address) - 1

    public heap_set_byte_at_offset =
        (address, offset, value) => 
        this.heap.setUint8(address * this.word_size + offset, value)
        
    public heap_get_byte_at_offset =
        (address, offset) => 
        this.heap.getUint8(address * this.word_size + offset)
    
    public heap_set_2_bytes_at_offset =
        (address, offset, value) => 
        this.heap.setUint16(address * this.word_size + offset, value)
        
    public heap_get_2_bytes_at_offset =
        (address, offset) => 
        this.heap.getUint16(address * this.word_size + offset)
}

export default RustHeap;