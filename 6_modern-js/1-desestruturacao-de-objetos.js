let nave = {
   nome: "Apolo",
   capacidadeCarga: 10,
   disponivel: false
 };
 
 let naveNome = nave.nome;
 let naveCapacidade = nave.capacidadeCarga;
 
 console.log(naveNome, naveCapacidade);
 
 // é a mesma coisa que:
 
 let { nome: naveNome2, capacidadeCarga: naveCapacidade2 } = nave;
 console.log("Objeto desetruturado 1")
 console.log(naveNome2, naveCapacidade2);
 
 let { nome: nome, capacidadeCarga } = nave
 console.log("Objeto desetruturado 2")
 console.log(nome, capacidadeCarga + " teste")

 