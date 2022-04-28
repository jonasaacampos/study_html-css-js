let navesAcopladas = ["Artemis", "Darwin", "Apolo", "Super Nova", "Respeita o Januário"]

let navesComNomeMaiorQue7Caracteres = navesAcopladas.filter(value => {return value.length > 7})

//caso o filtro seja verdadeiro, este elemento é retornado, caso não o filtro analisará o próximo elemento
// o filter retorna um novo arraay


console.log(navesComNomeMaiorQue7Caracteres)
//[ 'Super Nova', 'Respeita o Januário' ]