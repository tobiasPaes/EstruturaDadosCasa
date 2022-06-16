function selectionSort(array){
    let i, j
    for(i = 0; i < array.length; i++){
        let indiceMenor = i
        for(j = 0; j < array.length; j++){
            if(array[j] < array[i]){
                indiceMenor = j
            }
        }
        if(indiceMenor != i){
            [array[i], array[indiceMenor] = array[indiceMenor], array[i]]
        }
    }
    return array
}

export default selectionSort