import Pilha from "../src/pilha";

let p;

beforeEach(
    () => {
        p = new Pilha(5);
    }
);

test ("adicionar um elemento", 
    () => {
        p.push(1);
        expect(p.isEmpty()).toBe(false);
    }
);

test ("stack underflow", 
    ()=>{
        expect(
            ()=>{
                p.pop()
            }
        ).toThrowError("stack underflow");
    }
);

test ("stack overflow", 
    ()=>{
        p.push("a");
        p.push("b");
        p.push("c");
        p.push("d");
        p.push("e");
        expect(
            ()=>{
                p.push("f")
            }
        ).toThrowError("stack overflow");
    }
);

test("inicial é vazio", 
    ()=>{
        expect(p.isEmpty()).toBe(true);
    }
);

test("tamanho inicial", 
    ()=>{
        expect(p.length()).toBe(0)
    }
);

test(
    "Push(5)",
    () => {
        p.push(5);
        expect(p.length()).toBe(1);
    }
);

test(
    "Push(5), Push(6), Push(7)",
    () => {
        p.push(5);
        p.push(6);
        p.push(7);
        expect(p.length()).toBe(3);
    }
);

test(
    "Push(5), Push(6), Push(7), Pop(), Top()",
    () => {
        p.push(5);
        p.push(6);
        p.push(7);
        p.pop()
        console.log(p.topo, p.dados)
        expect(p.length()).toBe(2);
        expect(p.top()).toBe(6);
    }
);