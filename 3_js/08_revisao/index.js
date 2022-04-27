let naveNome = prompt("Insira o nome da nave")
let naveNomeInverso = ""
let caractereProibido = "e"
/*
* como o primeiro caractere é 0, e o último é a partir do -1
* para mapear a string invertida
* será usado o método lenth, porém temos que subtrair um número para que a contagem
* não ultrapasse o número de caracteres da string
* */
for (let i = naveNome.length -1; i >= 0; i--) {
    if(naveNome[i] == caractereProibido){
        break
    }
    naveNomeInverso += naveNome[i]
}
let alertNaveNomeOriginal = `Nome da nave original: ${naveNome}\n`
let alertNaveNomeAlterado = `Nome da nave alterado: ${naveNomeInverso}`

alert(alertNaveNomeOriginal + alertNaveNomeAlterado)