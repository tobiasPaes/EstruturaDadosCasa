class fracao{
    constructor(n, d=1){
        if(d === 0){
            throw new Error ("nao existe divisao por 0")
        }else{
            this.numerador = n
            this.denominador = d
        }
    }

    multiplicacao(f){
        return new fracao(this.numerador * f.numerador, this.denominador * f.denominador)
    }

    divisao(f){
        return new fracao(this.numerador * f.denominador, this.denominador * f.numerador)
    }

    toString(){
        return `${this.numerador}/${this.denominador}`
    }
}

export default fracao