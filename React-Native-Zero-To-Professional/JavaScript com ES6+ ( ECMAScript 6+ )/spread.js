/*
  Usado para criar um complemento de um array
*/

// Vetor(array) qualquer
let numeros = [1, 2, 3, 4];

// Antigamente era feito...
let outros = numeros;
// outros.push(5,6,7,8); for (let i in outros) {  console.log(outros[i]); } Agora
// é feito assim
/*
  A variável outrosNumeros é a junção entre o que foi inserido
  no vetor numeros e os numeros "5,6,7,8"
*/
let outrosNumeros = [
    ...numeros,
    5,
    6,
    7,
    8
];

for (let i in outrosNumeros) {
    console.log(outrosNumeros[i]);
}

// variável recebe o vetor números
let outros2 = [...numeros];

for (let i in outros2) {
    console.log(outros2[i]);
}

let info = {
    nome: "Lucas",
    sobrenome: "Vanni",
    idade: 22
};

let infoComp = {
    ...info,
    estadoCivil: "solteiro",
    nacionalidade: "Brasileiro"
};

console.log(infoComp);

function cadastro(info) {

    const novaInfo = {
        ...info,
        token: "djsadasdas",
        status: 0
    };

    return novaInfo;
}

/*
  A função recebe um objeto literal como parâmetro
  contendo algumas informações... Como por exemplo
  em um cadastro que será enviado ao banco de dados...
  No caso recupera as informações digitadas pelo usuário
  como o nome, sobrenome e idade... e na função adiciona
  novas informações, como o token de acesso, ou id que será
  salvo no banco, ou o status para saber se está no aplicativo
  gratuito ou pago...
*/
console.log(cadastro({nome: "Lucas", sobrenome: "Vanni", idade: 22}));
