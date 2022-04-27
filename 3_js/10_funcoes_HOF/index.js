/* SIMULADOR DE POUSO SEGURO NAVE ESPACIAL
* Simule um computador de bordo de uma espaçonave que monitore
* o início de fim da parada até a abertura da comporta de saída dos pitolos
*/

/* Requisitos *
* velocidade inicial a 150Km/s
* criar função de desacelerar a 20Km/s por segundo (considerar cada iteração como 1 segundo)
* A função de desacelerar deve ser uma HOF, que deve devolver o resultado de desacerelacao da nave
* Ao final, exiva a mensagem informando que a nave pousou e as portas estão abertas
*/

function desacelerarParaPouso(velocidadeAtual, desacelerarNave) {
    while(velocidadeAtual > 0){
        velocidadeAtual -= velocidadeDeParada
        if(velocidadeAtual < 0){
            velocidadeAtual = 0
        }
        desacelerarNave(velocidadeAtual)
    }

    alert("Pouso finalizado. Comportas da nave abertas")
}

let velocidadeAtual = 150
let velocidadeDeParada = 20

desacelerarParaPouso(velocidadeAtual, velocidadeAtual=> {
    console.log(`Velocidade atual em ${velocidadeAtual} Km/s`)
})


