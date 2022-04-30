class Nave {
    static get desaceleracao(){
        return 0.15
    }

    constructor(nome) {
        this.nome = nome
        this.velocidadeAtual = 0
    }

    acelerar(aceleracao){
        this.velocidadeAtual += aceleracao * (1 - Nave.desaceleracao)
    }
}

let nave = new Nave("Apolo13")
console.log(nave)
nave.acelerar(100)

console.log(nave)
