class App {
    adicionarImovel() {
        event.preventDefault()
        let imovelTipo = document.querySelector("input[name='tipo-imovel']").value
        let imovelArea = document.querySelector("input[name='area']").value
        let imovelAlugado = document.querySelector("select[name='imovel-alugado-check']").checked

        let imovelCadastrado = new imovel(imovelTipo, imovelArea, imovelAlugado)
        this.adicionarImovelALista(imovelCadastrado)
        this.limparFormulario()
    }

    adicionarImovelALista(imovelCadastrado) {
        let listaElementos = document.createElement("li")
        let imovelInfo = `Tipo: ${imovelCadastrado.tipo},
                           Área: ${imovelCadastrado.area}m²`
        if (imovelCadastrado.alugado) {
            let tagImovelAlugado = this.criarTagAlugado()
            listaElementos.appendChild(tagImovelAlugado)
        }
        listaElementos.innerHTML += imovelInfo
        let criarTagAlugado = this.criarTagAlugado()
        listaElementos.appendChild(criarTagAlugado)
        document.appendChild(criarTagAlugado)
    }

    criarTagAlugado() {
        let tagAlugado = document.createElement("span")
        tagAlugado.style.color = "white"
        tagAlugado.style.backgroundColor = "red"
        tagAlugado.innerText = "Alugado!!!"
        return tagAlugado
    }

    criarBtnRemover(){
        let botaoRemoverItemLista = document.createElement("button")
        botaoRemoverItemLista.setAttribute("onclik", "app.remove()")
        botaoRemoverItemLista.innerText =  "Remover"
        return botaoRemoverItemLista
    }

    limparFormulario() {
        let removerItemLista = event.target.parentNode
        document.getElementById("imoveis-registrados")

    }
}


