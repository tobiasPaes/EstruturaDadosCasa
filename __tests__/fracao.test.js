import fracao from "../src/fracaoL1Q1";


/*
beforeEach(
    ()=>{
        fra = new fracao(3,2);
    }
);
*/
test ("multiplicacao",
    ()=>{
        let fra = new fracao(3,2)
        expect(fra.multiplicacao(6,3)).toBe("18/6")
    }    
)

test ("divisao",
    ()=>{
        let fra = new fracao(3,2)
        expect(fra.divisao(6,3)).toBe("9/12")
    }    
)