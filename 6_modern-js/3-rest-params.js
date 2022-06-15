/* 
function saudarTripulante(mensagem, nome){
   console.log(`${mensagem}, ${nome}!`)
}

saudarTripulante("Seja bem vindo", "Miguel") 
*/

function saudarTripulante(mensagem, ...nomes){
   nomes.forEach(nome => {console.log(`${mensagem}, ${nome}!`)
   });
  
}

saudarTripulante("Seja bem vindo", "Miguel", "Helena", "Puc") 