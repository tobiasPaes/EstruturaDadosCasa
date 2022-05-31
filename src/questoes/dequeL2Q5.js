class fila{
    constructor (size){
        this.inicio = -1;
        this.fim = -1;
        this.dados = [];
        this.tamanho = size;
    }

    inserirFinal(dado){
        if(this.isFull()){
            throw new Error("ta cheio carai");
        }else{
            if(this.isEmpty()){
                this.inicio = 0;
                this.fim = 0;
            }else{
                if(this.inicio === 0){
                    this.inicio = this.tamanho;
                }else{
                    this.inicio--;
                }
            }
            this.dados[this.inicio] = dado;
        }
    }

    inserirComeco(dado){
        if(this.isFull()){
            throw new Error("ta cheio carai");
        }else{
            if(this.isEmpty()){
                this.inicio = 0;
                this.fim = 0;
            }else{
                if(this.fim === this.tamanho){
                    this.fim = 0;
                }else{
                    this.fim++;
                }
            }
            this.dados[this.fim] = dado;
        }
    }

    removerFina(){
        let excluido = this.dados[this.inicio];
        if(this.isEmpty()){
            throw new Error ("n da pra remover se n tem :)");
        }else{
            if(!this.isFull()){
                if(this.inicio === this.tamanho){
                    this.inicio = 0;
                }else{
                    this.inicio++;
                }
            }
            return excluido;
        }
    }

    removerComeco(){
        let excluido = this.dados[this.fim];
        if(this.isEmpty()){
            throw new Error ("n da pra remover se n tem :)");
        }else{
            if(!this.isFull()){
                if(this.fim === this.tamanho){
                    this.fim = 0;
                }else{
                    this.fim++;
                }
            }
            return excluido;
        }
    }
    
    isFull(){
        if(this.inicio === 0){
            return this.fim === this.tamanho;
        }
        return this.fim + 1 === this.inicio;
    }

    isEmpty(){
        return this.inicio === -1;
    }
}

export default fila;