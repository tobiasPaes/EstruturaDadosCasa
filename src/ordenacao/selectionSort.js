function selectionSort(dados){
    let i;
    for(i=0; i < dados.length; i++){
        let indiceMenor = i;

        for(let j=i; j < dados.length; j++){
            if(dados[indiceMenor] > dados[j]){
                indiceMenor = j;
            }
        }

        if(i != indiceMenor){
            let aux = dados[i];
            dados[i] = dados[indiceMenor];
            dados[indiceMenor] = aux;
        }
    }
    return dados
}
export default selectionSort;