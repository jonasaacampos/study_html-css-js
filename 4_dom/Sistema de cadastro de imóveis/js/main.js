/* REQUISITOS
* Sistema para cadastros dos clientes da imobiliária
* -  Informar o tipo (casa ou apartamento)
* - área
* - se está alugado
* Após cada cadastro, limpar o formulário e cdastrar próximo imóvel
* ---
* Abaixo do formulário, deve existir uma lista com todos os imóveis cadastrados
* - a lista deve ser atualizado assim que um imóvel seja cadastrado
* - imóveis alugados devem trazer a informação ALUGADO com letra branca e fundo vermelho
* - a corretora pode remover um imovel cadastrado, clicando em um botao da lista de imoveis
* */

function salvar() {

}

class coletarDados() {
    let imovelAlugado = document.querySelector("input[name='imovel-alugado-option']").value
    let imovelArea = document.querySelector("input[name='area']").value
    let  imovelTipo = document.querySelector("input[name='tipo-imovel']").value
    console.log(imovelTipo)
    console.log(imovelArea)
    console.log(imovelAlugado)

}