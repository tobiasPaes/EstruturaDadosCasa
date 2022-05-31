function mergeSort (dados){
    if (dados.length === 1){
        return dados;
    }

    const mid = Math.floor(dados.length/2)

    const esquerda = dados.slice(0, mid)
    const direita = dados.slice(mid, dados.length)

    return Merge(mergeSort(direita), mergeSort(esquerda));

}

function Merge(dadosDireita, dadosEsquerda){
    let il=0, ir=0
    let dadosMais=[]
    while(ir < dadosDireita.length && il < dadosEsquerda.length){
        if(dadosDireita[ir] < dadosEsquerda[il]){
            dadosMais.push(dadosDireita[ir])
            ir++
        }else{
            dadosMais.push(dadosEsquerda[il])
            il++
        }
    }
    while(il < dadosEsquerda.length){
        dadosMais.push(dadosEsquerda[il])
        il++
    }
    while(ir < dadosDireita.length){
        dadosMais.push(dadosDireita[ir])
        ir++
    }
    return dadosMais;
}


export default mergeSort;