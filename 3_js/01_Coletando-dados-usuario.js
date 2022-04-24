// Exiba um alerta para o usuário
let alertBoasVindas = alert("Bem vindx! Para seguir a navegação precisamos de alguns dados...");

// Peça ao usuário o nome e a idade
let userName = prompt("Insira o seu nome:")
let userAge = prompt("Insira sua idade:")

// Confirme a idade do usuario
let confirmAge = confirm("Sua idade é " + userAge + " anos?")
console.info(confirmAge)

// Exiba um alerta de confirmação com todos os dados inseridos
let alertDadosUsuarioCadastroSucesso = ("Bem vind(x) " + userName
    + "!\nCom " + userAge +  " anos vosê está pronto para pilotar! \n Idade confirmada: " + confirmAge)
alert(alertDadosUsuarioCadastroSucesso)
