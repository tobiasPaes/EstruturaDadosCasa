import deque from "../src/questoes/deque";

let d

beforeEach(()=>{
    d = new deque(5)
})

test("iniciacao", ()=>{
    expect(d.size()).toBe(0)
})

test("insercao e remocao do inicio", ()=>{
    d.inserirInicio(10)
    d.inserirInicio(15)
    expect(d.removerInicio()).toBe(15)
})

test("insercao e remocao do fim", ()=>{
    d.inserirFim(10)
    d.inserirFim(15)
    expect(d.removerFim()).toBe(15)
})

test("conversao para string", ()=>{
    d.inserirInicio('A')
    d.inserirInicio('B')
    d.inserirInicio('C')
    d.inserirInicio('D')
    d.inserirFim('E')
    expect(d.toString()).toStrictEqual("[D, C, B, A, E]")
})