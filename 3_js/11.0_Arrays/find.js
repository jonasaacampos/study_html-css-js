let navesAcopladas = ["Artemis", "Darwin", "Apolo", "Super Nova", "Respeita o Januário"]

let navesComNomeMaiorQue7Caracteres = navesAcopladas.find(value => {return value.length > 7})
// retornará o primeiro elemento que atender a condição proposta

console.log(navesComNomeMaiorQue7Caracteres)
//Super Nova
