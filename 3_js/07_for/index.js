let nomeDaNave = prompt("Insira o nome da nave: ")
let caractereAlvo = prompt(`Insira qual caractere gostaria de camuflar no nome da sua nave \n(${nomeDaNave})`)
let caractereDestino = prompt(`Alterar o carctere ${caractereAlvo} por qual caractere? `)
let nomeCamuflado = ""

for (let i = 0; i < nomeDaNave.length; i++) {
    nomeCamuflado += nomeDaNave[i] == caractereAlvo ? caractereDestino : nomeDaNave[i];
}

alert(`O nome camuflado da nave é ${nomeCamuflado}`)