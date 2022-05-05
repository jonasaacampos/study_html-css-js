function showInfo() {
    let             nome = document.querySelector   ("input[name    ='name']"                       ).value
    let      corFavorita = document.querySelector   ("select[name   ='color'] option:checked"       ).text
    let gostaDeProgramar = document.querySelector   ("input[name    ='like-programming']:checked"   ).value
    let developerOptions = document.querySelectorAll("input[name    ='developer-options']:checked"  )

    let     optionsValue = []

    developerOptions.forEach(element => {
        optionsValue.push(element.value)
    })
    let opcoesMarcadas = optionsValue.join(", ")

    let mensagem = `Nome: ${nome}
                    \nCor Favorita: ${corFavorita}
                    \nGosta d eProgramar?  ${gostaDeProgramar}
                    \nLinguagens selecionadas: ${optionsValue}`

    alert(mensagem)

}