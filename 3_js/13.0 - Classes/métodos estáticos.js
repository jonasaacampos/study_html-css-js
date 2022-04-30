class UnidadeDeProcessamento {
    constructor(nome, cargaMensalDeProcessamento) {
        this.nome = nome
        this.cargaMensal = cargaMensalDeProcessamento
    }

    static calcularProcessamentoHora(processamentoMensal, horas) {
        return processamentoMensal / 720 * horas
    }
}
//posso chamar um método estático mesmo sem ter criado o objeto
let totalProcessamentoHora = UnidadeDeProcessamento.calcularProcessamentoHora(500, 6)
console.log(totalProcessamentoHora)

let unidadeDeProcessamento = new UnidadeDeProcessamento("Terracota0", 2000)
let totalProcessado = UnidadeDeProcessamento.calcularProcessamentoHora(unidadeDeProcessamento.cargaMensal,  10)

console.log("")
console.log(`A unidade ${unidadeDeProcessamento.nome} processou ${totalProcessado} rejeitos de minério/h.`)