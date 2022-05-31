function insertionSort(vetor){
    let escolhido;
    let j, i;
    for (i =1; i < vetor.length; i++){
        escolhido = vetor[i];
        j = i-1;

        while(j >= 0 && vetor[j] > escolhido){
            vetor[j+1] = vetor[j];
            j = j-1;
        }
        vetor[j+1] = escolhido;
    }
    return vetor;
}
export default insertionSort;