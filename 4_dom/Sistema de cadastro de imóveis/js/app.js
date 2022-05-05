class App {
    adicionarImovel() {
        event.preventDefault()
        let imovelTipo = document.querySelector("input[name='tipo-imovel']").checked
        let imovelArea = document.querySelector("input[name='area']").value
        let imovelAlugado = document.querySelector("select[name='imovel-alugado-check']").value

        let imovelCadastrado = new imovel(imovelTipo, imovelArea, imovelAlugado)
        this.adicionarImovelALista(imovelCadastrado)
        this.limparFormulario()
    }

    adicionarImovelALista(imovelCadastrado) {
        let listaElementos = document.createElement("li")
        let imoveilInfo = `Tipo: ${imovelCadastrado.tipo},
                           Área: ${imovelCadastrado.area}m²`
        if (imovelCadastrado.alugado) {
            let tagImovelAlugado = this.criarTagAlugado()
            listaElementos.appendChild(tagImovelAlugado)
        }
        listaElementos.innerHTML += imoveilInfo



    }

}


