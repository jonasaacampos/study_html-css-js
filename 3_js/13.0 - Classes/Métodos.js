class Nave {
    constructor(nome) {
        this.nome = nome
        this.velocidade  = 0
    }

    acelerar(aceleracao) {
        this.velocidade += aceleracao
    }

}

let artemis = new Nave("Ártemis")
console.log(artemis)
artemis.acelerar(50)
console.log(artemis)
