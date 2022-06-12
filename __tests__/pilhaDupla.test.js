import pilhaDupla from "../src/questoes/pilhaDupla";
let p 
beforeEach(()=>{
    p = new pilhaDupla(5)
})

test("testando pilha", ()=>{
    expect(p.isEmptyA()).toBe(true)
    expect(p.isEmptyB()).toBe(true)
    p.pushA("1")
    expect(p.isEmptyA()).toBe(false)
    expect(p.isEmptyB()).toBe(true)
    p.popA()
    p.pushB("4")
    expect(p.isEmptyA()).toBe(true)
    expect(p.isEmptyB()).toBe(false)
    p.popB()
    expect(p.isEmptyA()).toBe(true)
    expect(p.isEmptyB()).toBe(true)




})