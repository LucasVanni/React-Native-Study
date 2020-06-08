let nome = "Lucas";
console.log(nome);

let sobrenome = "Vanni"

console.log(sobrenome);

// Demosntrando a diferença entre as duas Tipo "var" Vetor de seis posições
// sendo gerado
var vetor = [
    0,
    1,
    2,
    3,
    4,
    5,
    6
];

// Percorre o vetor até o seu término
for (var i in vetor) {
    /*
    Imprime o valor, a cada iteração,
    contido na variável i que está
    percorrendo o vetor...
  */
    console.log(vetor[i]);
}

/*
  Verificar o valor que está em i
  após o término da iteração,
  tendo acesso ao valor de i
  no código inteiro.
*/
console.log("Valor de i: " + i);

// Tipo "let" Vetor de seis posições sendo gerado
var vetor = [
    0,
    1,
    2,
    3,
    4,
    5,
    6
];

//Percorre o vetor até o seu término
for (let l in vetor) {

    /*
    Imprime o valor, a cada iteração,
    contido na variável i que está
    percorrendo o vetor...
  */
    console.log(vetor[l]);
}

/*
  Gera um erro, pois a variável "l" só existe
  no escopo da loop "for" (Escopo local), sendo
  assim... Após sua utilização ela é removida da
  memória, sendo esse príncipal benefício de utilizar
  let, pois no caso do exemplo, a variável "l" do Tipo
  let ficará restrita somente ao estrutura de repetição
  (loop).
*/
// console.log(l); Outro exemplo Condição que verifia se o nome é igual a "Lucas"
if (nome == "Lucas") {

    /*
    Se for igual armazena na variável "sexo", do tipo "let",
    o valor "Masculino";
  */
    let sexo = "Masculino";

    /*
    Imprime a variável sexo definida
    acima no console, pois está
    dentro do escopo da condição if,
    sendo assim ainda existe a variável
    "sexo" na memória.
  */
    console.log("Dentro do IF.\nSexo: " + sexo);
}

/*
  Não imprime a variável "sexo" no console,
  pois está fora do escopo da condição if
*/
//console.log(sexo);

/*
  Para criar uma variável utilizando o tipo "let" com o
  objetivo de preencher a variável dentro da condição if
  e utilizá-la depois é preciso...
*/

// Define a variável idade do tipo "let"
let idade;

// Verifica se o nome é Lucas
if (nome == "Lucas") {
    /*
    Se o nome for igual a string "Lucas"
    a variável idade irá receber o valor
    inteiro "22"
  */
    idade = 22;
}

/*
  Como ela foi definida fora do escopo
  da condição if, ela ainda está
  armazenada na memória do computador.
*/
console.log(nome + " tem " + idade + " anos.");

nome = "Fernanda";

let musica = "Tijolão";

if (nome == "Lucas") {
    musica = "Everlong";
}

console.log(nome + " gosta da música: " + musica);

// Exemplo de constante

/*
  É definida uma constante com o nome "euler" que recebe o valor
  2.72...
*/
const euler = 2.72;

// É impresso no console do navegador o valor constante de euler
console.log("Constante de euler tem o valor de " + euler);

/*
  Se respeitado a condição de não modificar o valor da constante
  Posso fazer o que eu quiser...
    Operações matemáticas se for um número, como no caso do exemplo...
    Operações de concatenação se for uma string, ou mesmo na resposta...
    Dentro da operação de repetição, para fazer algum loop
    Dentro de operação de condição, para verificar se um número
    está correto,

    Enfim posso fazer tudo que é possível, menos remover seu valor
    dentro do código
          OU
    Alterar seu valor recebido anteriormente...
*/

/*
  Tentando modificar o valor da
  constante de euler fazendo com
  que seja gerado um erro... Pois a
  partir do momento que a variável
  assume a tipagem constante, torna-se
  impossível a sua modificação.
*/
//euler = 5;

nome = "Lucas";

// Anteriormente ao ES6
let texto = "Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos.";

console.log(texto);

// Após o ES6

/*
  Com as aspas ` `, se torna uma string dinâmica, podendo até conter funções,
  que retorne strings.
*/
let texto2 = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`;

console.log(texto2);

function nomes(nome) {
    if (nome == "Lucas") {
        return `Acesso concedido ao usuário: ${nome}`;
    } else {
        return "Usuário convidado";
    }
}

//  Função que retorna uma string baseada na fução nomes
let texto3 = `${nomes(nome)}`;

console.log(texto3);
