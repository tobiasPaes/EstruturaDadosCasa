import Fila from "../src/fila";


let f;

beforeEach(
    ()=>{
        f = new Fila(5);
    }
);

test("adicionar um elemento", 
    ()=>{
        f.enqueue("A")
        expect(f.isEmpty()).toBe(false);
    }
)

test("overflow", ()=>{
    f.enqueue("A")
    f.enqueue("B")
    f.enqueue("C")
    f.enqueue("D")
    f.enqueue("E")
    expect(()=>{
        f.enqueue("F")
    }).toThrowError("queue overflow");
})

test("underflow", ()=>{
    expect(()=>{
        f.dequeue()
    }).toThrowError("queue underflow");
})

test("length", ()=>{
    f.enqueue("1")
    f.enqueue("2")
    f.enqueue("3")
    expect(f.length()).toBe(3)
})