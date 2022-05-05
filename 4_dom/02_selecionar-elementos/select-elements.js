function show(){
    //traz o elemento único ID
    /*
    let element = document.getElementById("name")
    console.log(element) //traz o objeto
    console.log(element.value) //traz o valor do elmento
    */


    // traz a lista de elementos com o seletor
    /*
    let element = document.getElementsByName("phone")
    console.log(element)
    console.log(element[0].value)
    */

    // seleciona por query (como no anterior, retorna uma lista com os valores)
    /*
    let element = document.querySelectorAll("div#phones input[name='phone']")
    console.log(element)
    */

    //seleciona elementos por tag
    let element = document.getElementsByTagName("input")
    console.log(element)

}