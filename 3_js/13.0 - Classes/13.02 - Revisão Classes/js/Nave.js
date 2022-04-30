class Nave {
    static get TAXA_DE_DESACELERACAO() {
        return 0.17
    }

    constructor(nome, tripulacaoMax) {
        this.nome = nome
        this.tripulacaoMax  = tripulacaoMax
        this.velocidadeAtual = 0
    }

    acelerar(aceleracao){
        velocidadeAtual += aceleracao * (1 - Nave.TAXA_DE_DESACELERACAO)
    }
}



