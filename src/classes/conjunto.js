import ListaDuplamenteLigada from "./listaDupla";

class Conjunto{
    constructor(){
        this.dado = new ListaDuplamenteLigada();
    }

    add(elemento){
        if(!this.has(elemento)){
            this.dado.add(elemento);
            return true;
        }else{
            return false;
        }
    }

    delete(elemento){
        return this.dado.remove(elemento);
    }

    has(elemento){
        return this.dado.search(elemento);
    }

    clear(){
        this.dado.clear();
    }

    length(){
        return this.dado.length();
    }

    values(){
        return this.dado.asArray();
    }

    isEmpty(){
        return this.dado.isEmpty();
    }

    union(conjB){
        let AuB = new Conjunto();
        let valoresA = this.values();
        let valoresB = conjB.values();

        for (const i of valoresA){
            AuB.add(i);
        }
        for(const i of valoresB){
            AuB.add(i);
        }

        return AuB;
    }

    intersection(conjB){
        let AiB = new Conjunto();
        let valoresB = conjB.values();

        for(const i of valoresB){
            if(this.has(i)){
                AiB.add(i);
            }
        }
        return AiB;
    }

    contains(conjB){
        let valoresB = conjB.values();

        for(const i of valoresB){
            if(!this.has(i)){
                return false;
            }
        }
        return true;
    }

    isEqual(conjB){
        return this.contains(conjB) && conjB.contains(this);
    }

    difference(conjB){
        let AdB = new Conjunto();
        let valoresA = this.values();
        let valoresB = conjB.values();

        for(const i of valoresA){
            AdB.add(i);
        }

        for(const i of valoresB){
            AdB.delete(i);
        }

        return AdB;
    }
}

export default Conjunto;