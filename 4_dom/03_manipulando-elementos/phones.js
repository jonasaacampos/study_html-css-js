function addNewPhone() {

    // o querySelector retorna a primeira aparição do elemento na página
    // igual se chamásse-mos o querySelectorAll na posiçao 0
    const phoneForm = document.querySelector("form#phones")
    // retorna todos os filhos do elemento, no caso, tempos um <p></p>
    console.log(phoneForm.children)

    const newPhone = phoneForm.children[0].cloneNode(true) // true para todos, false somente para o filho atual
    const phonePosition = phoneForm.children.length + 1

    newPhone.querySelector("label").innerText = `Telefone ${phonePosition}: `
    phoneForm.appendChild(newPhone)
    console.log("-----------")
    console.log(phoneForm)
}


function printPhones() {
    let message = ""
    const phones = document.querySelectorAll("input[name='phone']")

    phones.forEach((phone, index) => {
        message += `Telefone ${index}: ${phone.value}\n`
    })
    alert(message)
}
