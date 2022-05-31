class Node {
    constructor(dado) {
        this.dado = dado;
        this.proximo = null;
    }
}

class Lista{
    constructor(){
        this.head = new Node();
    }

    add(dado){
        
        
        let novo_no = new Node(dado);
        novo_no.proximo = this.head.proximo;
        this.head.proximo = novo_no;
    }

    append(dado){
        let novo_no = new Node(dado);

		if (this.isEmpty()) {
			this.head.proximo = novo_no;
		} else {
			let aux = this.head.proximo;
			while (aux.proximo !== null) {
				aux = aux.proximo;
			}
			aux.proximo = novo_no;
		}
    }

    removeFirst(){
        if(this.isEmpty()){
            throw new Error ("lista vazia");
        }else{
            let aux = this.head.proximo;
            this.head.proximo = aux.proximo;
        }
    }

    removeLast(){
        if(this.isEmpty()){
            throw new Error ("lista vazia");
        }else{
            let aux1 = this.head;
            let aux2 = this.head.proximo;

            while (aux2.proximo !== null) {
                aux1 = aux2;
                aux2 = aux2.proximo;
            }
            aux1.proximo = null;
            return aux2.dado;
        }
    }

    last(){
        if(this.isEmpty()){
            throw new Error("lista vazia");
        }
        let aux1 = this.head;
            let aux2 = this.head.proximo;

            while (aux2.proximo !== null) {
                aux1 = aux2;
                aux2 = aux2.proximo;
            }
            return aux2.dado;
    }

    isEmpty(){
        return this.head.proximo === null
    }

    toString(){
        let aux = this.head.proximo;
        let result = "";

        while(aux !== null){
            result += aux.dado + (aux.proximo ? "->" : "");
            aux = aux.proximo;
        }
        return result;
    }

    size(){
        let cont = 0;
        let tmp = this.head.proximo;

        while(tmp !== null){
            tmp = tmp.proximo; // pra q serve o tmp?
            cont++;
        }
        return cont;
    }

    addAt(dado, pos){
        if(pos >= this.size()){
            this.append(dado);
        }else{
            if(pos <= 0){
                this.add(dado)
            }else{
                let novo_no = new Node(dado);
                let i = 0;
                let aux1 = this.head;
                let aux2 = this.head.proximo;

                while(i !=pos){
                    aux1 = aux2;
                    aux2 = aux2.proximo;
                    i++;
                }
                aux1.proximo = novo_no;
                novo_no.proximo = aux2;
            }
        } 
    }

    search(dado){
        if(this.isEmpty()){
            return false;
        }else{
            let tmp = this.head.proximo;
            while(tmp !== null){
                if(tmp.dado === dado){
                    return true;
                }
                tmp = tmp.proximo;
            }
            return false;
        }
    }

    addInOrder(dado){
        let novo_no = new Node(dado);

		if (this.isEmpty()) {
			this.head.proximo = novo_no;
		} else {
			let aux_a = this.head;
			let aux_b = this.head.proximo;

			while (aux_b != null) {
				if (aux_b.dado > dado) {
					aux_a.proximo = novo_no;
					novo_no.proximo = aux_b;
					return;
				}
				//iteração
				aux_a = aux_b;
				aux_b = aux_b.proximo;
			}

			//caso o if nunca seja true
			aux_a.proximo = novo_no;
			novo_no.proximo = null;
			return;
		}
    }

    clear(){
        this.head = new Node(null);
    }

    removeAt(dado,pos){ // fazer dps
        
    }

}

export default Lista;