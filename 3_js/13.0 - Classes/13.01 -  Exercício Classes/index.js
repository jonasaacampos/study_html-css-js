/* REQUISITOS
* Numa estação espacial temos diversas naves engatadas. Cada nave possui
* nome, quantidade de tripulantes, se está engatada, e se as portas estão abertas
* Deve-se exibir para o usuário um menu:
* 1 - Realizar engate
* — cadastrar nome e tripulacao
* — após cadastrada, nave poderá ser engatada
* — quando engatadas portas serao abertas
* 2 - Imprimir naves
* 3 - sair do programa
* */

class Nave {
    constructor(nome, tripulacao = 2) {
        this.nome = nome
        this.tripulacao = tripulacao
        this.acoplamento = false
        this.portasAbertas = false
    }
    acoplarNave(){
        this.acoplamento = true
        this.portasAbertas = true
    }
}

function registrarNave() {
    let naveNome = prompt("Insira o nome da nave:")
    let naveTripulacao = Number(prompt("Insira a tripulação:"))
    let navePedirAcoplamento = prompt("Realizar acoplamento? [S/N}").toUpperCase()

    let novaNave  = new Nave(naveNome,naveTripulacao)

    if(navePedirAcoplamento == "S"){
        novaNave.acoplarNave()
    }
    listaDeNaves.push(novaNave)
    console.info(listaDeNaves)
}

function imprimeDadosDasNavesNaEstacaoEspacial() {
    let naveAtualNaLista = ""
    listaDeNaves.forEach((nome, index) => {
        naveAtualNaLista +=
            `${index + 1}ᵅ nave da lista:\n
            Nome da Nave: ${listaDeNaves[index].nome}
            Tripulação ${listaDeNaves[index].tripulacao}
            Nave acoplada? ${listaDeNaves[index].acoplamento}
            Portas abertas? ${listaDeNaves[index].portasAbertas}`
        alert(naveAtualNaLista)
        naveAtualNaLista  = ""
    })
}

let menuParaPilotos = ["0 - Realizar Engate", "1 - Imprimir naves", "2 - SAIR"]
let opcaoMenu = ""
let listaDeNaves = []

do{
    opcaoMenu = Number(prompt("Insira a opção:" +
        `\n${menuParaPilotos[0]}`+   // registrar e engatar nave
        `\n${menuParaPilotos[1]}`+   // exibe naves engatadas e/ou cadastradas na estação espacial
        `\n${menuParaPilotos[2]}`))  // sai do programa

    switch (opcaoMenu){
        case 0:
            registrarNave()
            break

        case 1:
            imprimeDadosDasNavesNaEstacaoEspacial()
            break
    }

} while(opcaoMenu !== 2)


/*
navesAcopladas.forEach(function (naveAtual, index) {
    console.log(`Nave: ${naveAtual} possui índice ${index}`)
})
*/








