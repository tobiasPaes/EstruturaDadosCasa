import bubble from "../src/estudos/bubbleSort"

let n_ordenados = [4, 2, 5, 12, 7, 6, 23]
let ordenados = [2, 4, 5, 6, 7, 12, 23]

test("td certo", ()=>{
    expect(bubble(n_ordenados)).toStrictEqual(ordenados)
})