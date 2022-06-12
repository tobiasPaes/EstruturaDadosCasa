class deque{
    constructor(maxSize = 10){
        this.dados = [];
        this.tam = maxSize;
        this.inicio = -1;
        this.fim = 0;
    }
    
    isEmpty(){
        return this.inicio === -1;
    }

    isFull(){
        return (this.inicio === 0 && this.fim === this.tam) || (this.inicio === this.fim + 1);
    }

    inserirInicio(dado){
        if(this.isFull()){
            throw new Error("ta cheio");
        }else{
            if(this.isEmpty()){
                this.inicio = 0;
            }else{
                if(this.inicio === 0){
                    this.inicio = this.tam - 1;
                }else{
                    this.inicio--;
                }
            }
        }

        this.dados[this.inicio] = dado
    }

    inserirFim(dado){
        if(this.isFull()){
            throw new Error("ta cheio");
        }else{
            if(this.isEmpty()){
                this.inicio = 0;
            }else{
                if(this.fim === this.tam - 1){
                    this.fim = 0
                }else{
                    this.fim++;
                }
            }
        }

        this.dados[this.fim] = dado
    }

    removerInicio(){
        if(this.isEmpty()){
            throw new Error("ta vazio");
        }
        let resultado = this.dados[this.inicio]
        if(this.inicio === this.fim){
            this.inicio = -1
            this.fim = 0
        }else{
            if(this.inicio === this.tam -1){
                this.inicio = 0
            }else{
                this.inicio ++
            }
        }

        return resultado
    }

    removerFim(){
        if(this.isEmpty()){
            throw new Error("ta vazio");
        }
        let resultado = this.dados[this.fim]
        if(this.fim === this.inicio){
            this.inicio = -1
            this.fim = 0
        }else{
            if(this.fim === 0){
                this.fim = this.tam - 1
            }else{
                this.fim --
            }
        }

        return resultado
    }

    size(){
        if(this.isEmpty()){
            return 0
        }else{
            if(this.inicio < this.fim){
                return this.fim - this.inicio + 1
            }else{
                return this.tam - this.fim + this.inicio + 1
            }
        }
    }

    toString(){
        let resultado = "["
        if(this.inicio > this.fim){
            for(let i = this.inicio; i < this.tam; i++){
                resultado += `${this.dados[i]}` + ", "
            }
            for(let j = 0; j <= this.fim; j++){
                resultado += `${this.dados[j]}`
                if(j != this.fim){
                    resultado += ", "
                }
            }
        }else{
            for(let i = 0; i <= this.fim; i++){
                resultado +=`${this.dados[i]}`
                if(i != this.fim){
                    resultado += ", "
                }
            }
        }
        resultado +="]"
        return resultado
    }

}


export default deque;