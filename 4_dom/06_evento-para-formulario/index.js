function save() {

    event.preventDefault() //impde o comportamento padrao

    let nome = document.querySelector("input[name='name']").value
    //let programLang = document.querySelector("select[name='programming-lang'] option:checked")
    let programLang = document.querySelector("select[name='programming-lang']").value

    let mensgem = `Nome: ${nome}.\nLinhagem de programação: ${programLang}`
    alert(mensgem)

}