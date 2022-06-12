//compara um elemento com seu proximo, para saber qual e maior, 
//enquanto vai colocando o maior desses dois sempre pra frente

function bubbleSort(array){
    let i, j
    for (i = 0; i < array.length; i++) {
        for(j=0; j <= array.length - 1 - i; j++){
            if(array[j]>= array[j+1]){
                let aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux
                //[array[j], array[j+1] = array[j+1], array[j]] -- com esse deu erro
            }
        }        
    }

    return array
}

export default bubbleSort