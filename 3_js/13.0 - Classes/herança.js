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

class NaveDeBatalha extends Nave{
    guardarArmas() {
        this.velocidadeAtual = 0
        console.info("Armas recolhidas com sucesso.")
    }
}

class NaveExploratoria extends Nave{
    recolherEquipamento() {
        this.velocidadeAtual = 0
        console.info("Equipamento recolhido com sucesso.")
    }
}

let darwin = new NaveExploratoria("Darwin", 15, 300)
let phanter = new NaveDeBatalha("Phanter", 55, 900)

console.log(darwin)
darwin.acelerar(400)
darwin.recolherEquipamento()

console.log(phanter)
phanter.acelerar(600)
phanter.guardarArmas()