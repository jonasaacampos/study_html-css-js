let navesDisponíveis = ["Super", "Nova", "Supoer Nova"]

console.log(navesDisponíveis)
//[ 'Super', 'Nova', 'Supoer Nova' ]


/*
* O splice removerá os elementos o array, retornando-os
* guardaremos o retorno na variável naves aposentadas
* já que serão removidas da frota
*/
let navesAposentadas = navesDisponíveis.splice(1,2, "Godzilla", "Panqueca", "Ultranova")

console.log(navesAposentadas)
//[ 'Nova', 'Supoer Nova' ]
console.log(navesDisponíveis)
//[ 'Super', 'Godzilla', 'Panqueca', 'Ultranova' ]



