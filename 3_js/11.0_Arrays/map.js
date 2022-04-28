let navesAcopladas = ["Artemis", "Darwin", "Apolo", "Super Nova", "Respeita o Januário"]

let navesEMaixaAlta = navesAcopladas.map(function (naveAtual) {
    let caixaAlta = naveAtual.toUpperCase()
    return caixaAlta
})

console.log(navesEMaixaAlta)
//[ 'ARTEMIS', 'DARWIN', 'APOLO', 'SUPER NOVA', 'RESPEITA O JANUÁRIO' ]