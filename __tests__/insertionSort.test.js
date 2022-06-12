import insertionSort from "../src/estudos/insertionSort";

let n_ordenados = [4, 2, 5, 12, 7, 6, 23]
let ordenados = [2, 4, 5, 6, 7, 12, 23]

test("td derto", ()=>{
    expect(insertionSort(n_ordenados)).toStrictEqual(ordenados)
})