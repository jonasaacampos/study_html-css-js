let promptDistanciaAnosLuz = prompt("Insira a distância de anos-luz (l.y) [USE NÚMEROS]: ")
let promptUnidadeDeMedida = prompt("Qual unidade de medida gostaria de utilizar? " +
    "\n1 - Parsec (pc)" +
    "\n2 - Unidade Astronônica (AU)" +
    "\n3 - Quilômetros (Km)"
)

let escolhaUsuarioUnidadeMedida = promptUnidadeDeMedida
let valorConvertido = promptDistanciaAnosLuz
let retornoResultadoConversao = ""

switch (escolhaUsuarioUnidadeMedida) {
    case "1":
        valorConvertido *= 0.306601
        retornoResultadoConversao = `${valorConvertido} parsec.`
        break
    case "2":
        valorConvertido *= 63241.1
        retornoResultadoConversao = `${valorConvertido} Unidade Astronômica`
        break
    case "3":
        valorConvertido *= 9.5 * Math.pow(10,12)
        retornoResultadoConversao = `${valorConvertido} Km/h.`
        break
    default:
        retornoResultadoConversao = "Unidade de medida não encontrada.\n Conversão fora do escopo"
}

alert(retornoResultadoConversao)