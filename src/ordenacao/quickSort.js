function quickSort(array, inferior, superior) {
    if(inferior < superior){
        let pivo = array[superior];
        let i, j;
        i = inferior -1;
        for (j = inferior; j <= superior-1; j++) {
            if(array[j] <= pivo){
                i++;
                let aux = array[j]
                array[j] = array[i]
                array[i] = aux;
            }   
        }
        let aux = array[superior]
        array[superior] = array[i+1]
        array[i+1] = aux;
        pivo_pos = i+1;

        quickSort(array, inferior, pivo_pos-1)
        quickSort(array, pivo_pos+1, superior)

    }

    return array; 
}