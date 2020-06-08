// Objeto JSON
const informacoesPessoais = {
    nome1: "Lucas",
    sobrenome: "Vanni",
    idade: "22",
    sexo: "Masculino",
    estadoCivil: "solteiro",
    pais: "Brasil"
};

// Mostra o objeto no console
console.log(informacoesPessoais);

// Desconstruindo o Objeto
/*
  Recebe o objeto informacoesPessoais,
  copiando o conteudo do elemento "idade"
  do objeto para a variável de mesmo
  nome "idade", sendo possível utilizar
  fora do Objeto
*/
let {idade} = informacoesPessoais;

console.log("Variável idade: " + idade);

/*
  É possível trocar o nome da variável que
  está vindo para fora do objeto.
  let { nomeDoElementoDoObjeto:nomeQueQueroDeixarNaVariavel }
*/
let {pais: nacionalidade} = informacoesPessoais;

console.log("Variável 'nacionalidade': " + nacionalidade + ". A informação veio do elemento 'pais' do objeto 'informacoesPessoais'");

/*
  Se o conteúdo da variável for modificada,
  o elemento do objeto continuará com o mesmo
  conteúdo de sua criação em memória.
*/

nome1 = "Jack";

console.log("Conteúdo modificado da variável que veio do objeto informações pessoais: " + nome1);

console.log("Conteúdo do elemento 'nome' contido  em informações pessoais " + informacoesPessoais.nome1);

/*
  Quando efetuada a desconstrução é passado o valor de um
  elemento do meu objeto ou array, para uma variável específica.
  Não quer dizer que irá associar os dois, se eu mudar um,
  não irá alterar o outro
*/

// Desconstruindo arrays

/*
  No caso do array sua chave é seu próprio número da posição,
  já no objeto sua chave é o nome do elemento do objeto.
*/

const nomes = ['Lucas', 'Paulo', 'Antônio'];

// { valorDaPrimeiraChaveDoArray: nomeQueQueroDeixarNaVariavel } = nomeDoArray
let {0: primeiroNome} = nomes;

console.log("Primeiro nome: " + primeiroNome);

// { valorDaSegundaChaveDoArray: nomeQueQueroDeixarNaVariavel } = nomeDoArray
let {1: segundoNome} = nomes;

console.log("Segundo nome: " + segundoNome);

// { valorDaTerceiraChaveDoArray: nomeQueQueroDeixarNaVariavel } = nomeDoArray
let {2: terceiroNome} = nomes;

console.log("Terceiro nome: " + terceiroNome);

// Primeira forma de desconstruir um array
let nomeCompleto = ['Lucas', 'Vanni'];

let {0: nomeP} = nomeCompleto;
let {1: sobrenomeP} = nomeCompleto;
console.log("\nPrimeira forma de desconstruir um array... \n\n");
console.log(nomeP);
console.log(sobrenomeP);

console.log("\n");

// Segunda forma de desconstruir um array
let [nome,
    sobrenome] = nomeCompleto;
console.log("Segunda forma de desconstruir um array...\n\n");
console.log(nome);
console.log(sobrenome);

// Desconstrução mais complexa
matematica = {
    somar: function (x, y) {
        return x + y;
    },
    multiplicar: function (x, y) {
        return x * y;
    }
};

let {somar, multiplicar} = matematica;

let {somar: adicionar} = matematica;

console.log(adicionar(5, 10));

console.log(somar(2, 3));
