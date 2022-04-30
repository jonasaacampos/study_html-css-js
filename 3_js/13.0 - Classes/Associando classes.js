class Capitao {
    constructor(nome, idade, horasDeVoo) {
        this.nome = nome
        this.idade = idade
        this.horasDeVoo = horasDeVoo
    }
}

class Nave {
    constructor(nomeDaNave, capacidadeTripulacao, capitaoNome, capitaoIdade, capitaoHorasDeVoo) {
        this.nome = nomeDaNave
        this.capacidade = capacidadeTripulacao
        this.capitao = new Capitao(capitaoNome, capitaoIdade, capitaoHorasDeVoo)

    }
}

let nave = new Nave("Supernova", 13, "Jonas Campos", 33, 1550)

console.log(nave)