// informaçoes do array[nave, tripulação, processo de engate concluído]
// O número da plataforma é o índice do array + 1

/*
* Filtrar o nome das naves com mais de 9 tripulantes
* Informar o número da plataforma da primeira nave que está com o processo de engate pendente
* Destacar todos os nomes das navem em CAIXA ALTA
* Exibir um alerta de todas as informaçoes de embarque
* */

//                  ***** documentação para consulta e referência ******
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex


const navesAguardandoParaDesembarque = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Darwin", 15, false],
    ["Elemental", 3, true]
]

let naveComTripulacaoMaiorQue9 = navesAguardandoParaDesembarque
    .filter(naveNome => naveNome[1] > 9).map(naveNome => naveNome[0])
//console.log(naveComTripulacaoMaiorQue9)

let naveComProcessoEngatePendenteQueChegouPrimeiroEstaNaPlataforma = navesAguardandoParaDesembarque
    .findIndex(naveNome => naveNome[2] === false) + 1 //para correção de indice
//console.log(naveComProcessoEngatePendenteQueChegouPrimeiroEstaNaPlataforma)


let navesComNomesEmCaixaAlta = navesAguardandoParaDesembarque
    .map(naveNome => naveNome[0].toUpperCase())

//console.log(navesComNomesEmCaixaAlta)


function imprimeDadosDeEmbarque() {
    let mensagemTelaEmbarque =
        `Naves com tribulação maior que 9: ${naveComTripulacaoMaiorQue9}.\n` +
        `\nPlataforma de desembarque da nave com processo de desembarque pendente que chegou primeiro: ${naveComProcessoEngatePendenteQueChegouPrimeiroEstaNaPlataforma}\n` +
        `\nLista das naves com nomes em caixa alta: ${navesComNomesEmCaixaAlta}.`
    return mensagemTelaEmbarque
}

//console.log(imprimeDadosDeEmbarque())

alert(imprimeDadosDeEmbarque())
