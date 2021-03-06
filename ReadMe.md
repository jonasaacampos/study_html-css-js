# Front End 📘 HTML, CSS e JS 📘 !

>  Relembrando e aprendendo conceitos de front-end
> Além  de treino, este repositório serve também como um compilado de documentação e um mapa mental pessoal sobre programação web.  Para mais projetos confira [esta página](https://github.com/jonasaacampos).

## Table of Contents

1. [HTML5 - "*puro*"](#html-5)
2. [CSS](#css)
3. [Java Script](#java-script)

---
<img  src="https://cdn-icons-png.flaticon.com/512/136/136528.png"  width=50 align=right>

### HTML 5

<details>
<summary><strong>Elementos da página</strong></summary>

> Clique para acessar a documentação

- [Block and Inline Elements](https://www.w3schools.com/html/html_blocks.asp)
- [Tables](https://www.w3schools.com/html/html_tables.asp)
- [Forms](https://www.w3schools.com/html/html_forms.asp)

</details>

<details>
<summary><strong>Elementos Semânticos</strong></summary>

> Marcações para melhorar a leitura do código.

<p align="center">
<img src="https://www.w3schools.com/html/img_sem_elements.gif">
</p>

```
      <article>
      <aside>
      <details>
      <figcaption>
      <figure>
      <footer>
      <header>
      <main>
      <mark>
      <nav>
      <section>
      <summary>
      <time>
```

>  Clique para acessar a documentação
- [Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

</details>

<details>
<summary><strong>Audio e Video</strong></summary>

- [Tag de vídeo HTML5:](https://www.w3schools.com/html/html5_video.asp)
- [Tag de áudio HTML5:](https://www.w3schools.com/html/html5_audio.asp)
- [Lista de novas Tags:](https://www.w3schools.com/html/html5_new_elements.asp)
- [Semantica no HTML 5:](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [Documentação dos tipos de input:](https://www.w3schools.com/html/html_form_input_types.asp)
- [Simulando os tipos novos de input:](https://www.webfx.com/blog/images/assets/cdn.sixrevisions.com/demos/0345-new_html5_form_input_types/new-html5-form-input-types.html)

</details>

> [🏠 Voltar para índice](#table-of-contents)

---
<img  src="https://cdn-icons-png.flaticon.com/512/136/136527.png"  width=50 align=right>


### CSS
<details>
<summary><strong>Princípio Geral</strong></summary>

- [Referência de CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference)

**Anatomia de um conjunto de regras CSS**
<img src="https://mdn.mozillademos.org/files/9461/css-declaration-small.png">


**Seletor (Selector)**

O nome do elemento HTML no começo do conjunto de regras. Ele seleciona o(s) elemento(s) a serem estilizados (nesse caso, elementos ```<p>```). Para dar estilo a um outro elemento, é só mudar o seletor.

**Declaração (Declaration)**

Uma regra simples como color: red; especificando quais das propriedades do elemento você quer estilizar.

**Propriedades (Property)**

Forma pela qual você estiliza um elemento HTML. (Nesse caso, color é uma propriedade dos elementos ```<p>```.) Em CSS, você escolhe quais propriedades você deseja afetar com sua regra.

**Valor da propriedade (Property value)**

À direita da propriedade, depois dos dois pontos, nós temos o valor de propriedade, que escolhe uma dentre muitas aparências possíveis para uma determinada propriedade (há muitos valores color(cor) além do red(vermelho)).

Note outras partes importantes da sintaxe:
- Cada linha de comando deve ser envolvida em chaves ({}).
- Dentro de cada declaração, você deve usar dois pontos (:) para separar a propriedade de seus valores.
- Dentro de cada conjunto de regras, você deve usar um ponto e vírgula (;) para separar cada declaração da próxima.

Então para modificar múltiplos valores de propriedades de uma vez, você deve escrevê-los separados por ponto e vírgula, desse modo:

**Modificar múltiplas propriedades**

```p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

**Selecionar múltiplos elementos**

```p, li, h1 {
  color: red;
}
```

</details>

<details>
<summary><strong>Cores</strong></summary>

Para definir cores no css, podemos usar
- nome
- valor RGB
- Valor Hexadecimal
- Valor HSL (css3)
- Valor HWB (css4)

O mais utilizado hoje em dia é o hexadecimal

![](2_css/corHexadecimal.png)

</details>

<details>
<summary><strong>Seletores em CSS</strong></summary>

> A Mozilla possui uma tabela com todos os seletores. [Reference table of selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors#reference_table_of_selectors).

<table class="standard-table">
<caption><h3>Principais seletores</h3></caption>
 <thead>
  <tr>
   <th scope="col">Nome do seletor</th>
   <th scope="col">O que ele seleciona</th>
   <th scope="col">Exemplo</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Seletor de elemento (às vezes, chamado tag ou seletor de tipo)</td>
   <td>Todos os elementos HTML de determinado tipo.</td>
   <td><code>p</code><br>
    Seleciona <code>&lt;p&gt;</code></td>
  </tr>
  <tr>
   <td>Seletor de ID</td>
   <td>O elemento na página com o ID específicado. Em uma determinada página HTML, é uma boa prática usar um elemento por ID (e claro, um ID por elemento) mesmo que seja permitido usar o mesmo ID para vários elementos.</td>
   <td><code>#my-id</code><br>
    Seleciona <code>&lt;p id="my-id"&gt;</code> ou <code>&lt;a id="my-id"&gt;</code></td>
  </tr>
  <tr>
   <td>Seletor de classe</td>
   <td>O(s) elemento(s) na página com a classe específicada (várias instâncias de classe podem aparecer em uma página).</td>
   <td><code>.my-class</code><br>
    Seleciona <code>&lt;p class="my-class"&gt;</code> e <code>&lt;a class="my-class"&gt;</code></td>
  </tr>
  <tr>
   <td>Seletor de atributo</td>
   <td>O(s) elemento(s) na página com o atributo especificado.</td>
   <td><code>img[src]</code><br>
    Seleciona <code>&lt;img src="myimage.png"&gt;</code> mas não <code>&lt;img&gt;</code></td>
  </tr>
  <tr>
   <td>Seletor de pseudo-classe</td>
   <td>O(s) elemento(s) específicado(s), mas somente quando estiver no estado especificado. Ex.: com o mouse sobre ele.</td>
   <td><code>a:hover</code><br>
    Seleciona <code>&lt;a&gt;</code>, mas somente quando o mouse está em cima do link.</td>
  </tr>
 </tbody>
</table>

</details>

<details>
<summary>Fontes</summary>

> Recomendado utilizar fontes online ao invés de fontes disponíneis no navegador do usuário. Use o [Google fonts](https://fonts.google.com/).

**Famílias de fontes genéricas**

Em CSS existem cinco famílias de fontes genéricas:

1. As **fontes com serifa** têm um pequeno traço nas bordas de cada letra. Eles criam uma sensação de formalidade e elegância.
2. As **fontes sem serifa** têm linhas limpas (sem pequenos traços anexados). Eles criam um visual moderno e minimalista.
3. **Fontes monoespaçadas** - aqui todas as letras têm a mesma largura fixa. Eles criam uma aparência mecânica.
4. As **fontes cursivas** imitam a caligrafia humana.
5. **Fontes de fantasia** são fontes decorativas/lúdicas.

*Todos os nomes de fontes diferentes pertencem a uma das famílias de fontes genéricas.*

</details>

<details>
<summary>O modelo de caixa CSS (Box Model)</summary>

Em CSS, o termo "modelo de caixa" é usado quando se fala de design e layout.

O modelo de caixa CSS é essencialmente uma caixa que envolve cada elemento HTML. Ele consiste em: margens, bordas, preenchimento e o conteúdo real. A imagem abaixo ilustra o modelo da caixa:

![](https://www.kasandbox.org/programming-images/misc/boxmodel.png)


- **Content** é o conteúdo da caixa, onde o texto e as imagens aparecem
- **Padding**  Limpa uma área ao redor do conteúdo. O forro é transparente
- **Border**  Uma borda que contorna o preenchimento e o conteúdo
- **Margin**  Limpa uma área fora da fronteira. A margem é transparente

</details>

<details>
<summary>Bulma</summary>

> Framework do css para econimizar trabalho. Acesse [Bulma](https://bulma.io/)
> É possível baixar do cdn tambem [bulma](https://cdnjs.com/libraries/bulma)

Ao invés de inserir o arquivo css no diretório do nosso site, podemos usar o **arquivo disponível no CDN.**

https://cdnjs.com/libraries/font-awesome

inserir como link e como script

` https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css`

`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js`

**Componentes**

Podemos baixar componentes elegantes e pré configurados nos componentes do bulma 
https://bulma.io/documentation/components/
</details>

---

<img  src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"  width=50 align=right>


## Java Script

<details>
<summary>Declaração de Variáveis</summary>

- `let` para declarar variáveis
- `const` declara variáveis que não podem ser mudadas (constantes)
- `var` igual à let, utilizada em versões anteriores
</details>

<details>
<summary>Interagindo com o usuário</summary>

- `console.log || console.info` registra no console informações
- `prompt` - pede informações de texto para usuário
- `confirm` - confirma dados e gera um valor lógico
- `alert` - exibe um popup de alerta
</details>

<details>
<summary><strong>Condicionais (IF | SWITCH CASE)</strong></summary>

Síntaxe: 
``` 
if(condicao){
    bloco de código...
}else if (condição) {
    bloco de código...
}else {
    bloco de código...
}
``` 
*Pode-se* utilizar do operador ternário caso a condição possua poucas linhas

**Mas os blocos condicinais são mais legíveis.**

```
switch (variavel) {
    case x:
    case y:
    ...
    case z:
        bloco de código...
        break
    default
        bloco de código...
        break
}
```

</details>

<details>
<summary><strong>Loops</strong></summary>

Repete um bloco de código N vezes ou até que uma condição seja atendida

```
while (condição){
    bloco de código...
}
```

Enquanto o while recebe uma única expressão, no `for` podemos adicionar variáveis para conrolar as iterecações

```
for (variável,  expressão, ação de controle){
    bloco de código...
}
```

```
do {
    bloco de código
} wilhe(condiçao)
```
</details>

<details>
<summary><strong>Funções</strong></summary>

Função é um bloco de código **nomeado** que executa uma determinada ação, e podemos utilizar este bloco a qualquer momento

```
function algumaTarefa() {
    bloco de código
}
```

Para chamar uma função, basta escrever:
`algumaTarefa()`

Funções com valores padrão

```
function cumprimentarUsuario(name, message = "Oi") {
    alert(message + name + "!")
}
```
Resultados ao chamar a função:

```
cumprimentarUsuario("Jonas")
// Oi Jonas!

cumprimentarUsuario("Jonas", "Seja bem vindo!")
// Seja Bem vindo Jonas!

```
**BOA PRÁTICA**
_Utilize variáveis com valores padrão sempre como último parâmetro da função_
</details>

<details>
<summary><strong>Escopo</strong></summary>
 - Variáveis declaradas com `let` fora da estrutra do bloco, possui escopo global
 - Caso a variável seja declarada dentro do bloco, ela possui escopo local
 - declarar variaveis com `var`, faz com que esta possua um nivel maior do que a do escopo atual

</details>

<details>
<summary><strong>Funções Anônimas</strong></summary>

São funções que não possuem nome, que são adicionadas dentro de variáveis

```
let doubleSpeed = function(velocity) {
    return velocity * 2
}


let newVelocity  = doubleSpeed(40)

console.log(newVelocity)
// 80

```

**Importante**

- Funções tradicionais são lidas sempre primeiro, mesmo que esteja no final do código
- Funçẽos anônimas seguem a ordem de execução do código

</details>

<details>
<summary><strong>Arrow Functions</strong></summary>

São também **funções anônimas**. São funções reduzidas.

```
const doubleVelocity = () => {

}


const doubleVelocity = (parametro) => {

}

```

Para funções com apenas uma linha, podemos escrever:

```
const doubleVelocity  = (velocity) => velocity * 2

/* Chamando a função*/

conlose.log(doubleVelocity(60))
//120
```
</details>

<details>
<summary><font color="red" ><strong>Funções de Alta Classe</strong> (High Order Functions)</font></summary>

- São funções que recebem e retorna outras funções
- Quando uma HOF recebe uma função, _geralmente_ são funções anônimas (ou arrows functions)
- A função enviada como parâmentro de uma HOF é denominada de **callback**

```
//função tradicionas
function doubleVelocity(velocity, printer) {
    console.log("acessei a função...")
    let newVelocity = velecity * 2
    printer(newVelocity)
    return newVelocity
}

//funçao anonima (arrow function)
let printVelocity =  velocity => {
    console.log("Nova velociadade: " + velocity + "Km/s.")
}

//funçao anonima
let newVelocity = doubleVelocity(60, printVelocity)

console.log(newVelocity)
    /*output...*/
// "acessei a função..."
// "Nova velociadade: 120 Km/s."
// 120

```
Um outro exemplo de HOF

```
function doubleVelocity(velocity, printer) {
    console.log("acessei a função...")
    let newVelocity = velecity * 2
    printer(newVelocity)
    return newVelocity
}

let anotherVelocity = doubleVelocity(50, velocity => {
console.log("Outra velocidade é de: " + velocity)  
}

    /*output...*/
// "acessei a função..."
// "Outra velocidade é de: 100"

```
</details>

<details>
<summary><strong>Arrays</strong></summary>
  
- Array é uma estrutura de dados capaz de armazenar (*quaisquer*) outros dados
- É organizado em forma de lista

```
let navesDisponiveis = ["Supernova", "Elemental", "SuperSuperSuperNova"]

console.log(navesDisponiveis[2])
// ¨SuperSuperSuperNova" 

let navesAtracadas = new Array("Supernova", "Elemental")
```
</details>

<details>
<summary><strong>Métodos para Arrays</strong></summary>

**Adicionar elementos no início ou final**

Os métodos devem podem ser utilizados adicionando um **"."** ao final do variavel array

- `push("elemento...")` adiciona um elemento ao final do array
- `unshift("elemento...")` adiciona um elemento ao final do array
- `pop()` remove o último elemento e retorna qual elemento foi removido
- `shift()` remove o primeiro elemento e retorna qual elemento foi removido
- `length` retorna o tamanho do array
- `indexOf("elemento...")` - retorna a posição do 
  - caso não encontrar o elemento, retorna **-1**

---
**Adicionando elementos no meio do array**

**Splice**

- significa _costurar, emendar_
- substitui o array original

*Sintaxe*

1. Recebe o índice,
2. a qunatidade de elementos a serem removidos partindo deste índice, 
3. os próximos elementos que serão adicionados
4. apenas o **primeiro elemento** é obrigatório

```
array.splice(index[, deleteCount[, elemento1[,...[,elementoN]]])
```

------
**Slice**

- significa _fatiar, dividir_
- extrai parte do array, sem alterar o array original

_Sintaxe_

1. Possui um parâmetro de índice
2. O segundo parâmentro é o íncide final

```
arr.slice([begin[,end]])
```

</details>

<details>
<summary><strong>Arrays multidimencionais</strong></summary>

```
let dadosNavesEmOrbitaComTrupulantes = [["Supernova", 7], ["Elemental", 3], "[SuperSuperNova, 2]"]

console.log(dadosNaveEmOrbitaComTripulantes[0])
// ["Supernova", 7]

```
</details>

<details>
<summary><strong>Iteração em Arrays</strong></summary>

- HOF's receberão um callback como parâmetro
- o callback é chamado para cada elemento do array

_Sintaxe_

```
arr.funcaoDeIteracao(function(elementoAtual, index, array){
  <corpo da função...>
})

```
</details>

<details>
<summary><strong>Objetos</strong></summary>

Assim como os arrays, objetos são estrututas de dados capazes de armazenar e organizar outros dados.

- Dados são organizados através de propriedades
- Associados por chave-valor
  - chave é a propriedade
  - valor é o dado em si referente àquela propriedade
- Pode armazenar qualquer tipo de dado

_Utilizamos {} para iniciar um objeto._

```
let espaconave = {
  name: "Apolo",
  capacidade: 7,
  type: "exploração"
}

//acessando informações
console.log(espaconave.type)
console.log(espaconave["type"])

//inserindo informações

espaconave.emManutencao = false
espaconave["escudoIntegridade"]  = 100
```
**Objetos X Arrays**

- Objetos são estruturas chave-valor
- Utiliza-se objetos quanto precisamos representar propriedades ou atruibutos do mundo real
- arrays são listas sequenciais
- utilizamos arrays quando precisamos armazenar uma lista sequencial de elementos


**Método é uma sequência de passos para mostrar dads**

**Classe é uma abstraçã que pode ser representada em variáveis**
</details>

<details>
<summary><strong>Excessão</strong></summary>

- Excessões são erros no código que ocorrem em tempo real
- Podem ser tratados para que a aplicação não quebre
- No JS as excessões são lançadas pela classe `Error`

Podemos tratar os erros gerados com o `try` e `catch`, lançando assim os erros com o `throw`.

</details>


---

<img  src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"  width=50 align=right>


## Documento Object Model - DOM

O Modelo de Objeto de Documento (DOM) possibilita que uma linguagem de marcação seja acessado como uma árvore de objetos

- Selecionar e/ou alterar determinado elemento da página
- Capturar o valor digitado

Por padrão o navegador traz uma instância do DOM pronta para uso. Para acessá-las basta chamar a palavra reservada `document`, que é a raiz de toda árvore DOM.


<details>
<summary><strong>Math e Date</strong></summary>

**Math:** Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função. 
Referência para consulta: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math

```
console.log(Math.pow(5,3))
console.log(Math.PI)
console.log(Math.sqrt(64))
```
**Date:** Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC).
Referência:  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

```
// no Date o primeiro mês é o 0.
let meuAniversario = new Date(2022, 4, 25)
console.log(meuAniversario)

// mostra quantos milessegundos transcorreram-se a partir da data padrão
let hoje = Date.now()
console.log(hoje)
```

</details>

<details>
<summary><strong>Eventos no HTML</strong></summary>
- Eventos são quaisquer ações ocorridas no sistea

- Funções obedecem sempre o escopo de sua criação
- Arrow functions obedecem o local de onde foram executadas

**Referência:** https://developer.mozilla.org/pt-BR/docs/Web/Events

</details>

<details>
<summary><strong>JS moderno</strong></summary>

- O JavaScript não possui uma evolução consistente
- A versão mais recente dos navegadores nunca será executada pelos navegadores

Conferir quais recursos são suportados
[Browser comparison | Can I use...](caniuse.con)

**Desentruturação de objetos e arrays**


**Node e Yarn**

São gerenciadores concorrentes para pacotes javascript
- O yarn foi criado pelo Facebook, para solucionar problemas de performance do node
- O node após o susrgimento do yarn corrigiu diversas destas questões

Responsáveis por instalar dependências da aplicação 

```
npm init
npm install moment --save
```

**Transpilação Babel**

Transpilar é converter o código de uma linguage para outra

```
// --save deve para que os pacotes não subam para produção
npm install @babel/core @babel/cli @babel/preset-env --save dev
```

**Webpack**

Possuir todo o front-end modularizado no js

`npm install --save-dev webpack webpack/cli`

</details>

<details>
<summary><strong>Módulos</strong></summary>

- São arquivos de código que dividimos para importar quando necessário, de modo a permitir
  - reusabilidade
  - manutenibilidade
  - separação de contextos
- Antes do ES6 o js não possuía o tratamento de módulos
- Foram criados vários padrões, dentre eles o CommonJS
  - é uma especificação de modularização para o js
- É o padrão que o NodeJs adota
  - graças ao babel podemos utilizá-lo no front-end

<details>
<summary><strong>React</strong></summary>
React é uma biblioteca de JavaScrip declarativa, eficiente e flexível para crialção de interfaces de usuário(UI)

- é uma biblioteca, e não um framework
- baseado em componente
- é usado para criar SPAs

**React App**

npx create-react-app my-first-app

**Função Pura**

- recebe parâmetros mais não altera seus valores, somente retorna algo
- SEMPRE retorna o mesmo resultado para os mesmos tipos de entrada
- Todos os componentes devem ter funções puras em relação com suas props

**Props X Statement**
- props vem de outras classes
- statements vem de dentro da classe

<details>

## Crédito das imagens
As logomarcas (no título de cada seção) são do <a hret="https://www.flaticon.com/br/" target="_blank">FlatIcon.</a>
