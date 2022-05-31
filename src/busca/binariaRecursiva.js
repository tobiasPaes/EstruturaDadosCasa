function buscaBinariaRecursiva(tabela, chave, esquerda, direita) {
   
    if(esquerda > direita-1){
        return -1;
    }
    
    let meio = Math.floor(esquerda+direita)/2;

    if(chave===tabela[meio]){
        return tabela[meio];
    }else if(chave < tabela[meio]){

        return buscaBinariaRecursiva(tabela, chave, esquerda, meio-1);

    }else{
        return buscaBinariaRecursiva(tabela, chave, meio+1, direita);
    }
}