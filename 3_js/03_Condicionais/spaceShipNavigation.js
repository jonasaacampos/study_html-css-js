//Pergunte o nome do piloto e defina a velocidade inicial em 0
let nomePiloto = prompt("Qual seu nome piloto?")
let velocidadeInicial = 0
let velocidadeAtual = 0

let velocidadeAcelerar = prompt("Acelerar a nave para quanto [digite um número]? ")

velocidadeAtual = velocidadeInicial + velocidadeAcelerar

let confirmarVelocidadeAceleracao = confirm("A velocidade irá para " + velocidadeAtual + "Km/h." +
    "\nConfirmar mudança de velocidade?")

if (!confirmarVelocidadeAceleracao){
    velocidadeAtual -= velocidadeAcelerar
    alert("Velocidade mantida para " + velocidadeAtual + "Km/h.")
}else{
    alert("Velocidade alterada para " + velocidadeAtual + "Km/h.")
}

// status da nave atual
let mensagemParaPiloto  = ``
if(velocidadeAtual <= 0){
    mensagemParaPiloto = "Nave parada. Aguardando comando de aceleração"
}else if (velocidadeAtual < 40){
    mensagemParaPiloto = "Isso é uma nave... ou uma tartaruga? Considere acelerar mais"
}else if (velocidadeAtual >= 40 && velocidadeAtual < 80){
    mensagemParaPiloto = "Velocidade ideal para navegação segura"
}else if(velocidadeAtual >= 80 && velocidadeAtual < 100){
    mensagemParaPiloto = "Se não estiver em fuga, considere diminuir..."
}else{
    mensagemParaPiloto = "Velocidade perigosa! Propulsores estão seperaquecendo!"
}
alert(mensagemParaPiloto)

let statusAtualNave = `Nome piloto: ${nomePiloto}
Velocidade atual: ${velocidadeAtual}
Confirmou velocidae?${confirmarVelocidadeAceleracao}
Mensagem exibida para piloto: ${mensagemParaPiloto}`

console.info(statusAtualNave)
