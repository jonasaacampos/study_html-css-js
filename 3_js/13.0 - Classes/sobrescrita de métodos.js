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

class NaveCargueira extends Nave {
    acelerar() {
        this.velocidadeAtual++;
        console.log("Naves cargueiras aumentam de velocidade apenas 1Km/s a cada aceleração")
    }
}

let naveCargueira1 = new NaveCargueira("Camelina", 5000, 30)
naveCargueira1.acelerar()
console.log(naveCargueira1)
console.info("-")
let nave1 =  new Nave("Sucesso do Capiroto", 30, 300)
nave1.acelerar(301)
console.log(nave1)
