class NaveTransportadora {
    constructor(name) {
        this.nome = name
        this.velocidadeAtual = 0
    }

    set acelerar(aceleracao) {
        if (aceleracao > 120) {
            this.velocidadeAtual = 120
        } else {
            this.velocidadeAtual = aceleracao
        }
    }

}

let transporte1 = new NaveTransportadora("Carga do Japão")

console.log("")
console.log(transporte1)
console.log("")
transporte1.acelerar = 150
console.log(transporte1)

// GET

class UnidadeDeProcessamento {
    constructor(nome, cargaMensalDeProcessamento) {
        this.nome = nome
        this.cargaMensal = cargaMensalDeProcessamento
    }

    get cargaProcessadaSemana() {
        return this.cargaMensal / 4
    }
}

let estacaoDeProcessamento1 = new UnidadeDeProcessamento("Gaia", 400)
console.log(`Carga semanal processada: ${estacaoDeProcessamento1.cargaProcessadaSemana}`)