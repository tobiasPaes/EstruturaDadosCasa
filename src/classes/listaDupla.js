class Node {
    constructor(dado) {
        this.dado = dado;
        this.proximo = null;
        this.anterior = null;
    }
}

class ListaDuplamenteLigada {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(dado){
        let novo_no = new Node(dado);
        
        if(this.isEmpty()){
            this.head = novo_no;
            this.tail = novo_no;
        }else{
            novo_no.proximo = this.head;
            novo_no.anterior = null;
            this.head.anterior = novo_no;
            this.head = novo_no;
        }
    }

    append(dado){
        let novo_no = new Node(dado);
        
        if(this.isEmpty()){
            this.head = novo_no;
            this.tail = novo_no;
        }else{
            novo_no.anterior = this.tail;
            novo_no.proximo = null;
            this.tail.proximo = novo_no;
            this.tail = novo_no;
        }
    }

    removeFirst(){
        if(this.isEmpty()){
            throw new Error("esta vazia");
        }else{
            if(this.length() === 1){
                this.head = null;
                this.tail = null;
            }else{
                this.head = this.head.proximo;
                this.head.anterior = null;
            }
        }
    }

    remove(esse){
        if(!this.isEmpty()){
            let current = this.head; // esse tem sempre q esta atras da variavel 'next', por isso nao usa o head 
            let next = this.head.proximo;
            let last = this.tail;
            let aux;

            if(current.dado === esse){
                return this.removeFirst(); // esse if vai verificar se o dado q eu quero tirar vai ser o primeiro, ja q o current é o head.
            } else if(last.dado === esse){
                return this.removeLast(); // esse if vai verificar se o dado q eu qeuro tirar vai ser o ultimo, ja q o last é o tail.
            } else {
                while(next != null){ // esse while vai varrer a lista item a item 
                    if(next.dado === esse){ // se estiver no item q quero excluir, dps vai fazer o anterior desse item apontar pro sucessor dele e vice versa
                        aux = next.proximo;
                        current.proximo = aux;
                        aux.anterior = current;
                        return true;
                    }
                    current = next;
                    next = next.proximo;
                }
            }

        }
        return false;
    }

    removeLast(){
        if(this.isEmpty()){
            throw new Error("esta vazio");
        }else{
            if(this.length() === 1){
                this.head = null;
                this.tail = null;
            }else{
                this.tail = this.tail.anterior;
                this.tail.proximo = null;
            }
        }
    }

    isEmpty(){
        return this.head === null;    
    }

    toString(){ // n sei oq faz???
        let tmp = this.head;
        let text = "";

        while(tmp != null){
            text += tmp.dado + (tmp.proximo ? "->" : "");
            tmp = tmp.proximo;
        }

        return text;
    }

    length(){
        let coun = 0;
        let aux = this.head; //  let aux = this.tail
        while (aux != null){
            cont++;
            aux = aux.proximo; //  aux = aux.anterior;
        }
        return coun;
    }

    addAt(dado, pos){
        if(pos >= this.length()){
            this.append(dado);
        }else{
            if(pos <= 0){
                this.add(dado);
            }else{
                let novo_no = new Node(dado);
                let i = 1;
                let auxA = this.head;
                let auxB = this.head.proximo;

                while(i != pos){
                    auxA = auxB;
                    auxB = auxB.proximo;
                    i++;
                }
                auxA.proximo = novo_no;
                novo_no.proximo = auxB;
                novo_no.anterior = auxA;
                auxB.anterior = novo_no;
            }
        }
    }
    
    asArray(){
        let current = this.head;
        let dados = [];

        while(current != null){
            dados.push(current.dado);
            current = current.proximo;
        }

        return dados;
    }

    search(dado){
        if(this.isEmpty()){
            return false;
        }else{
            let tmp = this.head;
            while(tmp !== null){
                if(tmp.dado == dado){
                    return true;
                }
                tmp = tmp.proximo;
            }
            return false;
        }
    }

    clear(){
        this.head = null;
        this.tail = null;
    }
}

export default ListaDuplamenteLigada;