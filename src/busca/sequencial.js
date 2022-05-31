function buscaSequencial(chave, dados){
    var tam = dados.length;
    dados[tam] = chave 
    let i 
    for (i = 0; chave < dados[i]; i++) {}

    if( i != tam){
        return dados[i];
    }

    return -1
}