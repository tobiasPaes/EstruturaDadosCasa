class pilhaDupla{
    constructor(tamanho = 10){
        this.tam = tamanho
        this.dados = []
        this.topoA = -1
        this.topoB = tamanho
    }

    isEmptyA(){
        return this.topoA === -1
    }

    isEmptyB(){
        return this.topoB === this.tam
    }

    isFull(){
        return this.topoA + 1 === this.topoB || this.topoB - 1 === this.topoA
    }

    pushA(dado){
        if(this.isFull()){
            throw new Error("ta cheio ja")
        }else{
            this.dados[++this.topoA] = dado
        }
    }

    pushB(dado){
        if(this.isFull()){
            throw new Error("overflow")
        }else{
            this.dados[--this.topoB] = dado
        }
    }

    popA(){
        if(this.isEmptyA()){
            throw new Error("underflow")
        }else{
            return this.dados[this.topoA--]
            

        }
    }

    popB(){
        if(this.isEmptyB()){
            throw new Error("underflow")
        }else{
            return this.dados[this.topoB++] 
        }
    }
}

export default pilhaDupla