/*
* Naves devem ser de batalha ou transporte
* Caso batalha: pedir quantas armas possui disponívies
* Caos transporte: pedir número de lugares que comporta.
* Naves devem ser iniciadas com velocidade = 0
* AO usuário, apresentar menu com 3 oppções:
* 1 - acelerar nave
* 2 - trocar nave
* 3 - imprimir e sair
* Para acelerar nave, o valor informado será 17% menor por conta da desaceleração
* (velocidadeAtual + (aceleracao * (1 - taxaDesaceleracao))
* */

class App {
    constructor() {
        this.nave = null
    }

    start() {
        this.escolhaSuaNave()
        let opcaoUsuario
        do {
            opcaoUsuario = this.menuDeNavegacao()
            this.executaMenuNavegacao(opcaoUsuario)
        } while (opcaoUsuario != 3)
        this.mostrarDadosESair()
    }

    escolhaSuaNave() {
        let naveNome = prompt("Informe o nome da sua nave: ")
        let naveTripulacaoMax = prompt("Qual a triputação máxima? ")
        let naveTipo = this.escolhaTipoDaNave()
        if (naveTipo == "1") {
            let quantidadeDeArmas = prompt("Insira a quantidade de armas disponíveis")
            this.nave = new NaveDeBatalha(naveNome, naveTripulacaoMax, quantidadeDeArmas)
        } else {
            let quantidadeDeAssentos = prompt("Insira a quantidade de assentos disponíveis")
            this.nave = new NaveTransportadora(naveNome, naveTripulacaoMax, quantidadeDeAssentos)
        }
    }

    escolhaTipoDaNave() {
        let tipoDaNave
        while (!["1", "2"].includes(tipoDaNave)) {
            tipoDaNave = prompt("Escolha o tipo da nave:\n1 - Batalha\n2 - Transporte")
        }
        return tipoDaNave
    }

    menuDeNavegacao() {
        let opcoesMenu = ("1 - acelerar nave\n2 - trocar nave\n3 - imprimir e sair")
        let opcaoEscolhidaMenu = prompt(opcoesMenu)
        while (!["1", "2", "3"].includes(opcaoEscolhidaMenu)) {
            opcaoEscolhidaMenu = prompt(opcoesMenu)
        }
        return opcaoEscolhidaMenu
    }

    executaMenuNavegacao(opcaoEscolhidaMenu) {
        switch (opcaoEscolhidaMenu) {
            case "1":
                this.acelerarNave()
                break
            case "2":
                this.escolhaSuaNave()
                break
        }
    }

    acelerarNave(){
        let aceleracao = Number(prompt("Quantos Km/s gostaria de acelerar? "))
        this.nave.acelerar(aceleracao)
    }

    mostrarDadosESair(){
        let mensagemSair = `Nome: ${this.nave.nome}\n
                            Tripulação Máxima: ${this.nave.tripulacaoMax}\n
                            Velocidade Atual: ${this.nave.velocidadeAtual}\n}`

        alert(mensagemSair)
    }
}