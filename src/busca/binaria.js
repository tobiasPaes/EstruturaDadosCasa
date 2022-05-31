function buscaBinaria (chave, tabela){//tabela tabela = vetor
    let esquerda = -1
    let direita = tabela.length
    while (esquerda < direita-1){
        let meio = (esquerda + direita)/2
        if (tabela[meio] < chave){
            esquerda = meio
        }else{
            direita = meio
        }
    }
    return tabela[direita]
}
