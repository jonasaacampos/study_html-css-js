// objeto com array

let nave = {
    nomeDaNave: "Apolo",
    tipo: "exploração",
    tripulacao: ["Boneco Chuck", "Noiva Cadáver", "Tim Burton"]
}

//adicionando um tripulante na lista da tripulação
nave.tripulacao.push("Cap. Nascimento")
console.log(nave)

// array com objetos

let naves = [
    { nome: "Elemental", capacidadeTripulacao: 15},
    { nome: "Colossus", capacidadeTripulacao: 5},
    { nome: "Reformadinha", capacidadeTripulacao: 22},
]
// mostrando nome da segunda nave
console.log(naves[1].nome)

naves.forEach(nave => {
    console.log(`${nave.nome} tem capacidade para ${nave.capacidadeTripulacao} tripulantes`);
})