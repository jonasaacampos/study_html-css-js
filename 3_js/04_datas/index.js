let dataPartidaNavePrompt = prompt("Data de Partida  da nave (DD/MM/AAAA):")

let dataPartida = moment(dataPartidaNavePrompt, "DD/MM/YYYY")
let dataAtual = moment()
let dataDifencial = dataAtual - dataPartida

let escolhaOpcaoDeMedidaDeTempo = prompt("Escolha como gostaria de exibir o tempo de partida\n" +
    "\n1 - Segundos" +
    "\n2 - Minutos" +
    "\n3 - Horas" +
    "\n4 - Dias")

if (escolhaOpcaoDeMedidaDeTempo == 1) {   // Segundos
    let tempoPartidaEmSegundos = Math.round(dataDifencial / 1000)
    mensagemRetornoTempoPartida = `Tempo de vôo: ${tempoPartidaEmSegundos} segundos.`
} else if (escolhaOpcaoDeMedidaDeTempo == 2) { // Miunutos
    let tempoPartidaEmMinutos = Math.round(dataDifencial / 1000 / 60)
    mensagemRetornoTempoPartida = `Tempo de vôo: ${tempoPartidaEmMinutos} minutos.`
} else if (escolhaOpcaoDeMedidaDeTempo == 3) {  //Horas
    let tempoPartidaEmHoras = Math.round(dataDifencial / 3600)
    mensagemRetornoTempoPartida = `Tempo de vôo: ${tempoPartidaEmHoras} horas.`
} else if (escolhaOpcaoDeMedidaDeTempo == 4) {
    let tempoPartidaEmDias = Math.round(dataDifencial / 1000 / 3600 / 24)
    mensagemRetornoTempoPartida = `Tempo de vôo: ${tempoPartidaEmDias} dias`
} else {
    mensagemRetornoTempoPartida = "Opção inválida..."
}

alert(mensagemRetornoTempoPartida)
