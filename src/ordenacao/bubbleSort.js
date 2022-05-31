function bubble(dadosNordenados){
    let aux
    for(let i =0 ;i< dadosNordenados.length; i++ ){
        for(let j =0;j < dadosNordenados.length; j++){
            if(dadosNordenados[j]> dadosNordenados[j+1]){
                aux = dadosNordenados[j];
                dadosNordenados[j] = dadosNordenados[j+1];
                dadosNordenados[j+1] = aux;
            }
        }
    }
    return dadosNordenados;
}
export default bubble;