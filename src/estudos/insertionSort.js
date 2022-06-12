//presupoe q o 1 ta ordenado, dps compara o escolhido com o anterior, se o esc for maior mantem ele(ja ta oredenado)
//se nao, coloca o arterior no pocisao q o esc tava, e compara o esc com o anterior do q mudou 

function insertionSort(array){
    for (let i = 0; i < array.length; i++) {
        let escolhido = array[i] // escolhido tmb e um auxiliar para a troca
        let j = i-1
        
        while(j >= 0 && array[j] > escolhido){
            array[j+1] = array[j]
            j--
        }

        array[j+1] = escolhido
    }

    return array
}

export default insertionSort