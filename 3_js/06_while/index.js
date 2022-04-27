let nomeDaNave = prompt("Informe o nome da nave: ")
let escolhaEntrarNaDobraEspacial = prompt("Deseja entrar na dobra espacial? " +
    "\n 1 - Sim" +
    "\n 2 - Não")
let numeroDobras = 0

while (escolhaEntrarNaDobraEspacial == "1"){
    numeroDobras++
    escolhaEntrarNaDobraEspacial = prompt("Deseja entrar na próxima dobra? " +
        "\n 1 - Sim" +
        "\n 2 - Não")
}

let mensagemFinal = `A nave ${nomeDaNave} realizou ${numeroDobras} dobras espaciais`

alert(mensagemFinal)

