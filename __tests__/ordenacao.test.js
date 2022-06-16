import bubbleSort from "../src/estudos/bubbleSort"
import insertionSort from "../src/estudos/insertionSort"
import selectionSort from "../src/estudos/selectionSort"

let n_ordenados = [4, 2, 5, 12, 7, 6, 23]
let ordenados = [2, 4, 5, 6, 7, 12, 23]

test("td certo no bubbleSort", ()=>{
    expect(bubbleSort(n_ordenados)).toStrictEqual(ordenados)
})

test("td certo no insertionSort", ()=>{
    expect(insertionSort(n_ordenados)).toStrictEqual(ordenados)
})

test("td certo no selectionSort", ()=>{
    expect(selectionSort(n_ordenados)).toStrictEqual(ordenados)
})