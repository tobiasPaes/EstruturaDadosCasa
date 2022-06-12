class Node{
    constructor(chave){
        this.dado = chave
        this.direita = null
        this.esquerda = null
    }
}

class arvoreBinBusca{
    constructor(){
        this.raizArv = null
    }

    removerNode(){}

    remover(raiz, valor){
        //caso 1: raiz n tem filhos
        if((this.raizArv.esquerda === null) && (this.raizArv.direita === null)){
            this.raizArv = null
        }
        //===========
        //caso 2: raiz possui um unico filho
        if( (this.raizArv.esquerda !== null) && (this.raizArv.direita === null)  ){
            this.raizArv = this.raizArv.esquerda
        }
        if( (this.raizArv.esquerda === null) && (this.raizArv.direita !== null) ){
            this.raizArv = this.raizArv.direita
        }
        //===========
        //caso 3: raiz possui dois filhos
        //caso 3a: lado direito(maiores filhos) -> procura o menor e substitui por ele
        
        
        //caso 3b: lado esquerdo(menores filhos) -> procura o maior e substitui por ele
    }






    inserirNode(RAIZ, valor){
        if(RAIZ.dado < valor){
            if(RAIZ.esquerda === null){
                let folha = new Node(valor)
                RAIZ.esquerda = folha
            }else{
                this.inserirNode(RAIZ.esquerda, valor)
            }
        }else{
            if(RAIZ.direita === null){
                let folha = new Node(valor)
                RAIZ.direita = folha
            }else{
                this.inserirNode(RAIZ.direita, valor)
            }
        }
    }

    inserir(valor){
        if(this.raizArv === null){
            let new_node = new Node(valor)
            return this.raizArv = new_node
        }else{
            this.inserirNode(this.raizArv, valor)
        }
    }

    listarNode(){

    }

    listar(){

    }
}