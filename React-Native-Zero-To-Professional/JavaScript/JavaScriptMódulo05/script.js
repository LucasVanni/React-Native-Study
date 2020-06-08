// Definindo o nome da variável que recebe o valor "Lucas" do tipo string var
// nome = "Lucas"; Função de alerta com o parâmetro da variável alert(nome);
// Mudança do conteúdo da variável nome para a string "Gabriel" nome = "Gabriel"
// Comentário de uma linha

/*
  Comentário de múltiplas linhas
*/

/* Quero ver se o nome Gabriel está funcionando sem ter que
   apagar o Jenivaldo por exemplo
//Mudança do conteúdo da variável nome para string "Jonivaldo"
nome = "Jonivaldo"

*/

// Mudança do conteúdo da variável nome para string "Jonivaldo" nome =
// "Jonivaldo" Alertando o último nome inserido... alert(nome);

/*
  Comando para o usuário entrar com um valor
  Como primeiro parâmetro temos a pergunta para o usuário
  Será armazenado na variável nome.
*/
//var nome = prompt("Qual o seu nome?");
/*
  Variável que irá armazenar um número que será digitado pelo usuário,
    porém será do tipo String visto que a função prompt irá retorna somente
    valores do tipo String.
  Para retornar o significado numérico do valor digitado é necessário 'encapsular'
  a função prompt toda dentro das funções descritas a seguir:
    --> parseInt
    --> parseFloat
*/
//var numero = parseInt(prompt("Qual o número?"));

/*
  Função que imprime na página web o texto que foi inserido como parâmetro.
  No caso irá aparecer na tela a string contendo a sequência de carácteres
  "O nome digitado foi, " e o valor inserido anteriormente na variável nome.
*/
//document.write(`O nome digitado foi, ${nome}`);

/*
  Função que imprime na página web o texto que foi inserido como parâmetro.
  No caso irá aparecer na tela a string contendo a sequência de carácteres
  "O número digitado foi, " e o valor inserido anteriormente na variável numero.
*/
//document.write(`O número digitado foi, ${numero}`);

/*
  Qualquer função que vier após o ponto de "document" estará relacionada ao documento tratado, a página em sí.
  Qualquer função que vier após o ponto de "window" estará relacionada a página toda.
*/
// document. Função que permite adicionar (não substituir) no documento, o texto
// que foi inserido como parâmetro na função write. document.write("Esse
// teste"); A função permite a existência de uma imagem no documento.
// document.write("<img src='http://www.google.com.br/google.jpg' />");
// Utilização da tag br usado no html para pular linhas document.write("<br
// />"); Utilização da tag strong usado no html para deixar o texto negrito
// document.write("<strong>Olá</strong>"); Criando função no script
function fazerAcao() {

    /*
      Irá ser definido a área que receberá a alteração
      através de seu id. E isso será salvo na Variável
      area.
    */
    var area = document.getElementById("areaF");

    /*
      Definindo a variável texto que irá salvar o que foi
      inserido pelo usuário através do prompt
    */
    var texto = prompt("Qual o seu nome? ");

    /*
      Essa parte do código irá alterar a parte do HTML
      que foi salvo na variável area introduzindo o texto
      salvo na variável texto
    */
    area.innerHTML = texto;
}

/*
  A função receberá como parâmetro o que foi definido por nome
  e idade na página html
*/
function fazerAcao2(nome, idade) {

    /*
    Recebe a div cujo id é area2 e introduzida suas informações
    na variável area2
  */
    var area2 = document.getElementById('area2');

    /*
    A variável sobrenome irá armazenar a informação que o usuário
    digitar
  */
    var sobrenome = prompt("Qual o seu sobrenome? ");

    /*
    O texto presente na variável area2 será substituido pelo texto abaixo
    o que está na variável "nome" cujo valor está contido no html e é
    passado através de parâmetros, concatenado com espaço mais o que está
    na variável sobrenome mais a string ", tem " mais o valor contido
    na variável "idade" cujo valor está contido no HTML e passado através
    de parâmetros, mais a string " anos."
  */
    area2.innerHTML = nome + " " + sobrenome + ", tem " + idade + " anos.";

}

//A função recebe o id informado de cada elemento
function redirecionar(id) {
    // É efetuada a verificação para o nome de cada redirecionamento feito No caso se
    // for googleF entra no if abaixo
    if (id == 'googleF') {
        window.location.href = 'https://www.google.com';
        // e se caso for atualizacaoF entra no else if abaixo
    } else if (id == 'atualizacaoF') {
        window.location.href = window.location.href;
    }
}

//Função para inserir ingredientes na lista
function inserirIngrediente() {
    /*
    Com o value, o valor inserido pelo usuário na caixa
    de texto produzida pelo input é salvo na variável
    ing.
  */
    var ing = document
        .getElementById("ingrediente")
        .value;

    /*
    O innerHTML sem atribuir valor pega o conteúdo contido na página html
    cujo id seja igual a 'listaIngredientes' neste caso e o armazena na
    variável conteudoLista
  */
    //Salva o conteúdo do elemento atual
    var conteudoLista = document
        .getElementById('listaIngredientes')
        .innerHTML;

    /*
    Estamos inserindo a conteudoLista o conteúdo salvo nela mesma e adicionando
    o que foi digitado pelo usuário em uma linha
  */
    //Adiciona o conteúdo digitado pelo usuário
    conteudoLista = conteudoLista + `<li>${ing}</li>`;

    /*
    Estamos inserindo o conteúdo da lista presente em conteudoLista já atualizado
    e substituindo o conteúdo da listaIngredientes do HTML em sí, por esse conteudoLista
    criado agora
  */
    //Substituir o conteudo antigo pelo novo (atual).
    document
        .getElementById('listaIngredientes')
        .innerHTML = conteudoLista;

}

/*
var x = 10 + 20;
alert("Resultado: " + x);

var y = 3 * 5;
alert("Resultado: " + y);

var z = 4 / 2;
alert("Resultado: " + z);

var x = "1" + "1";
alert("Resultado: " + x);

var x = 1 + "5";
alert("Resultado: " + x);

var x = "10";
var y = x + 30;
alert("Resultado: " + y);
*/

function somar() {
    //Armazena na variável campo1 o valor digitado no HTML
    var campo1 = parseInt(document.getElementById('Campo1').value);
    //Armazena na variável campo2 o valor digitado no HTML
    var campo2 = parseInt(document.getElementById('Campo2').value);

    //Resultado do campo1 somado com o campo2
    var resultado = campo1 + campo2;

    //Texto reproduzido na div com id Resultado
    document
        .getElementById('Resultado')
        .innerHTML = "Somando " + campo1 + " com " + campo2 + " resulta em: " + resultado;

}

function subtrair() {

    //Armazena na variável campo1 o valor digitado no HTML
    var campo1 = parseInt(document.getElementById('Campo1').value);

    //Armazena na variável campo2 o valor digitado no HTML
    var campo2 = parseInt(document.getElementById('Campo2').value);

    //Resultado do campo1 Subtraído pelo campo 2
    var resultado = campo1 - campo2;

    //Texto reproduzido na div com id Resultado
    document
        .getElementById('Resultado')
        .innerHTML = "Subtraindo " + campo2 + " de " + campo1 + " resulta em: " + resultado;
}

function dividir() {
    //Armazena na variável campo1 o valor digitado no HTML
    var campo1 = parseInt(document.getElementById('Campo1').value);
    //Armazena na variável campo2 o valor digitado no HTML
    var campo2 = parseInt(document.getElementById('Campo2').value);

    //Resultado do campo1 dividido pelo campo 2
    var resultado = campo1 / campo2;

    //Texto reproduzido na div com id Resultado
    document
        .getElementById('Resultado')
        .innerHTML = "Dividindo " + campo1 + " por " + campo2 + " resulta em: " + resultado;
}

function multiplicar() {

    //Armazena na variável campo1 o valor digitado no HTML
    var campo1 = parseInt(document.getElementById('Campo1').value);

    //Armazena na variável campo2 o valor digitado no HTML
    var campo2 = parseInt(document.getElementById('Campo2').value);

    //Resultado do campo1 multiplicado com o campo 2
    var resultado = campo1 * campo2;

    //Texto reproduzido na div com id Resultado
    document
        .getElementById('Resultado')
        .innerHTML = "Multiplicando " + campo1 + " com " + campo2 + " resulta em: " + resultado;
}

/*
  Variável podendo receber com vários valores, inclusive
  de tipos diferentes.
*/
// var lista = ["Arroz", "Feijão", "Macarrão", "Carne", 20]; Imprime no console a
// estrutura formada... console.log(lista);

/*
  Quando é colocado o número da posição, irá retornar
  especificamente o valor que está contido nesta posição.
  Caso a posição seja 0, irá retornar o primeiro elemento.
  Caso a posição seja 1, irá retornar o segundo elemento.
  Caso a posição seja 3, irá retornar o terceiro elemento.
  E assim por diante...
*/
//console.log(lista[0]);

/*
  Retornará a quantidade de posições (LARGURA) que a lista possuí
  no caso será contado a partir de 1,
  no exemplo acima o array lista tem 5 elementos,
    iniciando da posição 0 até a 4
*/
// console.log(lista.length); Percorre a lista imprimindo no console valor por
// valor for (var i = 0; i < lista.length; i++) {  console.log(lista[i]); }
// Variável lista recebe um array de 5 elementos e 4 posições
var lista = ["Arroz", "Feijão", "Macarrão", "Carne", 20];

/*
    length mostra a quantidade de elementos
    da lista no caso 5, pois tem 5 elementos
*/
console.log(lista.length); // Retorna 5

/*
  indexOf retorna em que posição o elemento
  a ser escrito está...
  Se não encontrar retorna -1
*/
console.log(lista.indexOf("Arroz")); // Retorna posição 0
console.log(lista.indexOf("Feijão")); // Retorna posição 1
console.log(lista.indexOf("Macarrão")); // Retorna posição 2
console.log(lista.indexOf("Carne")); // Retorna posição 3
console.log(lista.indexOf(20)); // Retorna posição 4
console.log(lista.indexOf(7)); // Retorna posição -1
console.log(lista.indexOf("Batata")); // Retorna posição -1

/*
  Transforma todos os elementos do array
  em uma única string separada por vírgula
*/
var listaVirgula = lista.join("");
console.log(listaVirgula);

/*
  Transforma todos os elementos do array
  em uma única string separada por barra
*/
console.log(lista.join("/"));

console.log(``);
console.log(``);

console.log("Antes da remoção");
console.log(``);

for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

lista.pop();

lista.shift();

console.log(``);

for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

console.log(``);

console.log(`Nova Lista`);

console.log(``);

lista.splice(1, 1);

for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

console.log(``);
console.log(``);

lista.push("Abacate");

console.log(``);
console.log(``);

console.log("Após a remoção");
console.log(``);

for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

if (lista.indexOf("Alface") > -1) {
    alert("Tem na lista");
} else {
    alert("Não tem na lista");
}

console.log(``);
console.log(``);

var nome = "José";

if (nome == "Lucas") {
    console.log(nome);
}

console.log("Nada rodando");

console.log(``);
console.log(``);

var x = 10;

// verifica se x é menor que 5
if (x < 5) {
    //Executa se a condição for verdadeira
    console.log("Menor");
} else {
    //Executa se a condição for falso
    console.log("Não é menor");
}

// verifica se x é menor ou igual a 5
if (x <= 5) {
    //Executa se a condição for verdadeira
    console.log("Menor ou igual");
} else {
    //Executa se a condição for falso
    console.log("Não é menor ou igual");
}

//Verifica se x é maior que 5
if (x > 5) {
    //Executa se a condição for verdadeira
    console.log("Maior");
} else {
    //Executa se a condição for falso
    console.log("Não é maior");
}

//Verifica se x é maior ou igual a 5
if (x >= 5) {
    //Executa se a condição for verdadeira
    console.log("Maior ou igual");
} else {
    //Executa se a condição for falso
    console.log("Não é maior ou igual");
}

//Verifica se x é igual a 5
if (x == 5) {
    //Executa se a condição for verdadeira
    console.log("Igual");
} else {
    //Executa se a condição for falso
    console.log("Não é igual");
}

//Verifica se x é idêntico (igual e do mesmo tipo) que 5 (inteiro)
if (x === 5) {
    //Executa se a condição for verdadeira
    console.log("idêntico");
} else {
    //Executa se a condição for falso
    console.log("Não é idêntico");
}

//Verifica se x é diferente de 5
if (x != 5) {
    //Executa se a condição for verdadeira
    console.log("É diferente");
} else {
    //Executa se a condição for falso
    console.log("Não é diferente");
}

function verificador() {

    // Captura o que o usuário digitou no input box e o transforma em inteiro
    var user = parseInt(document.getElementById("inputUsuario").value);

    // Variáveis que irão armazenar o resultado
    var result;
    var resultI;

    // Verifica se o que o usuário digitou é maior que 10
    if (user > 10) {
        // Executa esse trecho se a condição for verdadeira
        result =/*
    Executa esse trecho se a condição anterior for falsa
    e verifica se o que o usuário digitou é menor que 10
  */
        "É maior que 10";
    } else if (user < 10) {
        // Executa esse trecho se a condição for verdadeira
        result =/*
    Executa esse trecho se a condição anterior for falsa
    e verifica se o que o usuário digitou é igual que 10
  */
        "É menor que 10";
    } else if (user == 10) {
        // Executa esse trecho se a condição for verdadeira
        result = "É igual a 10";
    }
    /* Se o trecho de condições forem falsos ele para de verificar
     e continua a execução
  */

    /* Verifica se o que o usuário digitou é idêntico (igual e de mesmo tipo)
     do que 10.
     Se for igual a 10 e inteiro, ele torna a condição verdadeira
  */
    if (user === 10) {
        // Executa esse trecho se a condição for verdadeira
        resultI = "É idêntico a 10";
    } else {
        // Executa esse trecho se a condição for falsa
        resultI = "Não é idêntico a 10";
    }

    document
        .getElementById('ResultadoIF')
        .innerHTML = result + "<br />" + resultI;

}

var x = 10;

console.log("Iniciando o Loop...");

/*
  Significa "enquanto x for maior que 5 faça"
*/
while (x > 5) {
    // Imprime o valor que está em x
    console.log(x);
    // Decrementa 1 de x x-- é o mesmo que fazer x = x - 1
    x--;
}

console.log("Finalizando o Loop...");

/*
  Na primeira interação x está valendo 10,
  então é verificado se x é menor que 5,
  no caso é e satisfaz a condição, e então
  as instruções que estão dentro do while
  são executadas, no caso é bem simples,
  irá imprimir no console o 10, que é o
  valor atual de x, e na próxima instrução
  decrementa 1 de 10, fazendo com que o x
  receba o valor 9, e é repetido o processo
  até que o x não satisfaça a condição...
  No caso de x estar valendo 5, que no caso
  não satisfaz a condição, já que a condição
  diz para repetir o código até que x seja
  maior que 5, e no caso ele para de repetir
  pois o x é igual a 5.
*/

var x = 0;

console.log("Iniciando o Loop...");

/*
  Significa "enquanto x for menor que 5 faça"
*/
while (x < 5) {
    // Imprime o valor que está em x
    console.log(x);
    /*
    Incrementa 1 de x
    x++ é o mesmo que fazer x = x + 1
  */
    x++;
}

console.log("Finalizando o Loop... ");

/*
  Na primeira instrução, x está valendo 0,
  então é verificado se o x é menor que 5,
  e no caso é... então é executado o código
  que está dentro do while (enquanto), e como
  o código anterior ele escreve no console o
  valor de x, que é 0, e incrementa 1 no x, ou
  seja o x passará a valer 1...
  O processo se repete, até que a condição não
  seja satisfeita, no caso se x valer 5, não
  satisfaz mais a condição, por isso o while
  para a sua execução...
*/

/*
  for (É defino uma variável dentro do for (var x = 0)
  depois é introduzido o ponto e vírgula...
  Depois do ponto e vírgula é inserido a condição
  para que entre no bloco de códigos do for (x < 10)
  depois é introduzido novamente o ponto e vírgula
  e é introduzido a condição de incremento (x++),
  ou decremento (x--)).

  Ficando...
  for (var x = 0; x < 10; x++){
    ###
      Bloco de código
    ###
  }

*/

console.log("Iniciando o Loop do for...");

/*
  var x = 0 --> É o primeiro comando a ser
  executado sendo a definição da variável
  que irá fazer parte do for, no caso x...
  Tendo x recebendo o valor 0.
  x < 10 --> Depois fará a comparação até
  que x pare de satisfazê-la, no caso
  repete o código até que x seja menor que
  10 se for maior para de executar o for e
  segue o código.
  x++ --> Irá incrementar o valor de um ao
  x ao concluir a execução do bloco de código
  presente no for.
*/
for (var x = 0; x < 10; x++) {
    console.log(x);
}

console.log("Finalizando o Loop do for...");

console.log("");

console.log("Estrutura FOR");

for (var x = 0; x < 10; x++) {
    console.log("Número " + x);
}

console.log("Estrutura WHILE");

var x = 0;

while (x < 10) {
    console.log("Número " + x);
    x++;
}

// Declaração da variável x
x = parseInt(prompt("Qual é o número? "));

/*
  A condição do switch, é apenas
  a variável que receberá seu processamento
*/
switch (x) {

        /*
    É complementado com os casos,
    para que ações determinadas no
    bloco de casos seja executada.
  */
        /*
    Caso x seja 0 executa o bloco
    de códigos do case 0.
  */
    case 0:
        // Bloco de códigos do case 0
        alert("X é igual a 0");
        /*
      Comando de parada, para que não
      seja executado os casos posteriores,
      no caso do exemplo case 1:
    */
        break;

    case 1:
        alert("X é igual a 1");
        break;

    case 2:
        alert("X é igual a 2");
        break;
        /*
    Caso padrão, utilizado quando nenhum
    caso é atingido pela condição...
  */
    default:
        alert("Ninguém foi satisfeito");
        break;
}
