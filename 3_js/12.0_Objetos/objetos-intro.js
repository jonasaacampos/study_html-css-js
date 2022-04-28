let espaconave = {
    name: "Apolo",
    capacidade: 7,
    type: "exploração"
}

//acessando informações
console.log(espaconave.type)
console.log(espaconave["type"])

//inserindo informações

espaconave.emManutencao = false
espaconave["escudoIntegridade"]  = 100

console.log(espaconave)
/*
{
  name: 'Apolo',
  capacidade: 7,
  type: 'exploração',
  emManutencao: false,
  escudoIntegridade: 100
}
* */

