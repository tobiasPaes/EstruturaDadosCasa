import fila from "../src/dequeL2Q5";

let f;
test("teste remover do comeco", ()=>{
    f = new fila(8);
    f.inserirComeco(10);
    f.inserirComeco(9);
    f.inserirComeco(8);
    f.inserirComeco(7);
    f.inserirComeco(6);
    f.inserirComeco(5);
    f.inserirFinal(2);
    expect(f.removerComeco()).toBe(2)
})

test("teste remover do final", ()=>{
    f = new fila(8);
    f.inserirComeco(10);
    f.inserirComeco(9);
    f.inserirComeco(8);
    f.inserirComeco(7);
    f.inserirComeco(6);
    f.inserirComeco(5);
    f.inserirFinal(2);
    expect(f.removerFinal()).toBe(5)
    expect(f.removerFinal()).toBe(6)
})