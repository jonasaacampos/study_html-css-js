function salvarCasa() {
    let cidade = document.querySelector("input[name='cidade']").value
    let bairro = document.querySelector("input[name='bairro']").value
    let numero = document.querySelector("input[name='numero']").value
    let area = document.querySelector("input[name='area']").value

    //criar elemento
    let novoElementoLista = document.createElement("li")
    let mensagemLista = `Cidade: ${cidade}, ${numero}. ${bairro}. Área ${area}m².  `
    novoElementoLista.innerText = mensagemLista

    //criar botão de remover casa
    let removerElementoBtn = document.createElement("button")
    removerElementoBtn.type = "button"
    removerElementoBtn.innerText  = "remover"
    removerElementoBtn.setAttribute("onClick", "removerCasa(this)")

    //adicionar ao DOM
    novoElementoLista.appendChild(removerElementoBtn)
    document.getElementById("casas-list").appendChild(novoElementoLista)
}

//recebe um botão como parametro, e remove o conteúdo pai
function removerCasa(button) {
    let liRemove = button.parentNode
    document.getElementById("casas-list").removeChild(liRemove)

}