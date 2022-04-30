class Nave {
    constructor(nome, tripulacaMax, velocidadeMaxRecomendada) {
        this.nome = nome
        this.tripulacaoMax = tripulacaMax
        this.velocidadeMaxSegura = velocidadeMaxRecomendada
        this.velocidadeAtual = 0
    }

    acelerar(aceleracao){
        this.velocidadeAtual += aceleracao
        if(this.velocidadeAtual > this.velocidadeMaxSegura) {
            console.log("ACIMA DA VELOCIDADE MÁXIMA SEGURA\nRisco iminente de danos à nave.")
        }
    }
}

class NaveCargueira extends Nave{
    constructor(nome, tripulacaMax, velocidadeMaxRecomendada, capacidadeCarga) {
        super(nome, tripulacaMax, velocidadeMaxRecomendada);
        this.caragaMax = capacidadeCarga
    }

    acelerar(aceleracao){
        aceleracao /= 2
        this.velocidadeAtual += aceleracao
        console.log(`Velocidade aumentada em ${aceleracao} Km/s`)
        super.acelerar(aceleracao)
    }
}

let naveTransportadora = new NaveCargueira("Camelão", 300, 500)

console.log(naveTransportadora)
naveTransportadora.acelerar(700)