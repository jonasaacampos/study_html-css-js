function pilotarNave(acelerar = 5, frear = -5, unidadeDeMedida = "Km/s") {
    let escolhaNavegacao = ""
    let continuarSimulador = true

    do {
        let escolhaNavegacao = prompt("O que deseja pilot?\n" +
            `[1] - Acelerar a navem em ${acelerar} ${unidadeDeMedida}\n` +
            `[2] - Desacelerar a navem em ${frear} ${unidadeDeMedida}\n` +
            `[3] - Imprimir dados de navegação\n` +
            `[4] - Sair do programa`)
        switch (escolhaNavegacao) {
            case "1": //acelar
                velocidadeAtual += acelerar
                console.log(`Operação realizada com sucesso! Velociadade atual em ${velocidadeAtual}`)
                console.log(escolhaNavegacao)
                break
            case "2": //frear
                if (velocidadeAtual == 0) {
                    console.info("Nave parada. Não é possível frear")
                    break
                } else {
                    velocidadeAtual += frear
                    console.log(`Operação realizada com sucesso! Velociadade atual em ${velocidadeAtual}`)
                    console.log(escolhaNavegacao)
                    break
                }
            case "3": //Mostrar dados de navegação
                alert(imprimirDadosDeNavegacao(nomeDaNave, velocidadeAtual, unidadeDeMedida))
                break
            default:
                alert("Escolha uma alternativa válida.")
                break
            case "4": // Sair
                continuarSimulador = false
        }
    } while (continuarSimulador)
    console.log("saiu da função")
}

function imprimirDadosDeNavegacao(nomeDaNave, velocidadeAtual, unidadeMedida) {
    return `A velocidade atual da ${nomeDaNave} é de ${velocidadeAtual} ${unidadeMedida}`
}

function escolhaSuaNave() {
    nomeDaNave = prompt("Digite o nome da sua nave")
    console.info(`Bela escolha! A nave ${nomeDaNave} está pronta para decolar.`)
    pilotarNave()
}


/*
* Programa Principal
* */
let velocidadeAtual = 0
let nomeDaNave = ""
escolhaSuaNave()
