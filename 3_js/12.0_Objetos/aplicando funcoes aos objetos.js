let nave = {
    nomeDaNave: "Hamster de Godah",
    tipo: "demolição",
    tripulacaMax: 150,
    ligarNave: function () {
        console.info("Ligando propulsores...")
        console.info("Ligando computador de bordo...")
    }
}

nave.ligarNave()
/*Ligando propulsores...
Ligando computador de bordo...*/


nave.velocidade = 0
nave.velocidadeAumentarEm = function (aceleracao) {
    this.velocidade += aceleracao
}

console.log(nave)
/*
 {
  nomeDaNave: 'Hamster de Godah',
  tipo: 'demolição',
  tripulacaMax: 150,
  ligarNave: [Function: ligarNave],
  velocidade: 0,
  velocidadeAumentarEm: [Function (anonymous)]
} */

nave.velocidadeAumentarEm(50)
console.log(nave)