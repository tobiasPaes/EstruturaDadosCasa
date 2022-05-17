class fracao{
    constructor(num, den){
        this.numerador = num;
        this.denominador = den;
    }

    multiplicacao(num2, den2){
        let numRes;
        let denRes;
        let resultado;
        let resultString = "";
        numRes = this.numerador * num2;
        denRes = this.denominador * den2;
        resultado = numRes / denRes;

        resultString = numRes + "/" + denRes; 
        return resultString;
    }

    divisao(num2, den2){
        let numRes;
        let denRes;
        let resultado = "";
        let resultString;
        numRes = this.numerador * den2;
        denRes = this.denominador * num2;
        resultado = numRes / denRes;
        resultString = numRes + "/" + denRes; 
        return resultString;
    }
}
export default fracao;