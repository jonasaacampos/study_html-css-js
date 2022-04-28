//não permitir que nave atinja a velocidade máxima para evitar combustão

let nave = {
    nome: "Phanter 6",
    tipo: "Ataque",
    velocidadeMax: 180,
    velocidadeAtual: 0,
    acelerar: function (acelerecarEm) {
        this.velocidadeAtual += acelerecarEm
    }
}

let mensagemNaveSemRegistro = "Insira as informacoes da nave para iniciar o computador de bordo"
let naveRegistrada = false
let logQuantidadeDeAvisosVelocidadePerigosa = 0
let tiposNavesDisponiveis = [
    "Exploração",
    "Ataque",
    "Cargueira",
    "Demolição",
    "Transporte"
]


function computadorDeBordo() {
    //confirmar se nave foi registrada
    if (!naveRegistrada) {
        var desejaRegistrarNave = prompt("Nave não registrada." +
            "\nConfirma utilizacao da nave padrão? [S/N]").toUpperCase()
        //todo: talvez uma validacao aqui
        console.log(desejaRegistrarNave)
    }

    if (desejaRegistrarNave == "N") {
        alert("Protocolo de registro de espaçonave será inciado")
        registrarNave()
    } else {
        alert("Nave padrão será utilizada")
    }

    // início do protocolo de pilotagem
    //executa opções até usuário desejar parar nave
    let controleDenavegacao

    // verifica opção de navegação
    do {
        controleDenavegacao = Number(prompt("O que deseja fazer pitolo?" +
            "\n[1] - Acelerar nave" +
            "\n[2] - parar Nave e exibir dados de navegação"))

        console.log(`Opção do usuráio: ${controleDenavegacao}`)

        if (controleDenavegacao === 1) {
            acelerar()
        }

        if (controleDenavegacao === 2) {
            break
        }

    } while (controleDenavegacao !== 1 || controleDenavegacao !== 2)

    mostrarInformacoes()

}

function registrarNave() {
    alert(mensagemNaveSemRegistro)
    nave.nome = prompt("Inrira o nome da nave")
    nave.tipo = tipoDaNave()
    nave.velocidadeMax = Number(prompt("Qual a velocidade máxima desta nave em KM/s [apenas números]"))
    //todo: validacao para velocidade
    naveRegistrada = true
    computadorDeBordo()
}

let tipoDaNave = function () {
    let opcaoValida = false
    do {
        let tipoNavePrompt = prompt("Escolha o tipo da sua nave:" +
            "\n[0] - Exploração" +
            "\n[1] - Ataque" +
            "\n[2] - Cargueira" +
            "\n[3] - Demolição" +
            "\n[4] - Transporte")

        switch (tipoNavePrompt) {
            case "0":
                nave.tipo = tiposNavesDisponiveis[0]
                opcaoValida = true
                break
            case "1":
                nave.tipo = tiposNavesDisponiveis[1]
                opcaoValida = true
                break
            case "2":
                nave.tipo = tiposNavesDisponiveis[2]
                opcaoValida = true
                break
            case "3":
                nave.tipo = tiposNavesDisponiveis[3]
                opcaoValida = true
                break
            case "4":
                nave.tipo = tiposNavesDisponiveis[4]
                opcaoValida = true
                break
            default:
                alert("Insira apenas as opções disponíveis")
        }
    } while (!opcaoValida)

}

function mostrarInformacoes() {
    let informacoesDaNave =
        `Nome da Nave: ${nave.nome}` +
        `\nTipo: ${nave.tipo}` +
        `\nVelocidade antes da parada: ${nave.velocidadeAtual}` +
        `\nVelocidade Máxima: ${nave.velocidadeMax}`
    alert(informacoesDaNave)
}

function acelerar() {
    let valorAceleracao = Number(prompt("Digite o valor que desenha acelerar a nave"))
    nave.acelerar(valorAceleracao)
    if (nave.velocidadeAtual > nave.velocidadeMax) {
        alert(`Velocidade acima do limite máximo seguro.\nPropulsores com sobrecarga!`)
        logQuantidadeDeAvisosVelocidadePerigosa++
        console.info(`Usuário alertado pela ${logQuantidadeDeAvisosVelocidadePerigosa}º vez...`)
    }
}

// progama principal
//setTimeout(computadorDeBordo(), 5000)

computadorDeBordo()
