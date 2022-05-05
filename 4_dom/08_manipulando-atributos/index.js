function verifyEnablement() {
    let valorSelecionado = document.querySelector("select").value
    console.log(valorSelecionado)
    if (valorSelecionado === 'desativado') {
        document.querySelector("input[name='some-text']").disabled = true
        let pElement = document.getElementById("message")
        pElement.innerText = "Desabilitado!"
        pElement.style.color = "white"
        pElement.style.backgroundColor = "red"
        console.log("entrou no laco...")
    } else {
        document.querySelector("input[name='some-text']").disabled = false
        let pElement = document.getElementById("message")
        pElement.innerText = ""
        pElement.style.color = "black"
        pElement.style.backgroundColor = "transparent"
    }

}