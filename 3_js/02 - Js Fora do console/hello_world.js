alert("Insira o nome e idade de duas pessoas.")

//peca o nome e idade de 2 pessoas
let pessoaMaisVelha = prompt("Insira o nome da pessoa mais velha:")
let pessoaMaisVelhaIdade = prompt("Quantos anos ela tem?")

let pessoaMaisNova = prompt("Insira o nome da pessoa mais nova:")
let pessoaMaisNovaIdade = prompt("Quantos anos ela tem?")

// calcula a diferença de idade e mostre a mais vela e a mais nova

let diferencaIdade = pessoaMaisVelhaIdade - pessoaMaisNovaIdade

let dadosPessoaMaisVelha = pessoaMaisVelha +  " é o mais velho e tem " + pessoaMaisVelhaIdade +  " anos."
let dadosPessoaMaisNova = pessoaMaisNova +  " é o mais novo e tem " + pessoaMaisNovaIdade +  " anos."
let dadosDiferencaIdade = "A diferená de idade entre " + pessoaMaisVelha + " e " + pessoaMaisNova + " é de " + diferencaIdade + " anos."

alert(dadosPessoaMaisVelha + "\n" + dadosPessoaMaisNova + "\n" + dadosDiferencaIdade)
