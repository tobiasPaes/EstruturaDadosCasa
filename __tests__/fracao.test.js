import fracao from "../src/questoes/fracao";


let f1, f2, f3
beforeEach(()=>{
    f1 = new fracao(1,4)
    f2 = new fracao(2,5)
});

test("teste de operacoes",()=>{
    f3 = f1.multiplicacao(f2)
    expect(f3.toString()).toBe("2/20")
    f3 = f1.divisao(f2)
    expect(f3.toString()).toBe("5/8")

})

