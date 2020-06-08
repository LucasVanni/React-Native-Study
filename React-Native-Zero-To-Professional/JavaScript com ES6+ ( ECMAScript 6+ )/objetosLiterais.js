// função como objetivo se setar informações de um usuário
function setInfo(nome, sobrenome, idade) {

    /*
    A constante cadastro receberá um objeto que contém
    a chave dele e o nome do parâmetro que foi passado pela função.
  */
    const cadastro = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };

    // Retorna o objeto cadastro
    return cadastro;
}

console.log(setInfo("Lucas", "Vanni", 22));

function setInfo2(nome, sobrenome, idade) {

    /*
    O objeto literal diz que quando
    temos a chave com o mesmo nome
    da variável, não precisamos colocar
    a chave : nomePassadoPorParâmetro,
    apenas o nomePassadoPorParâmetro

  */
    const cadastro = {
        nome,
        sobrenome,
        idade
    };

    // Retorno do cadastro2
    return cadastro;
}

console.log("Cadastro 2 ");
console.log(setInfo2("Lucas", "Vanni", 22));

function setInfo3(nome, sobrenome, idade) {

    // Personalizando os nomes das chaves
    const cadastro = {
        primeiroNome: nome,
        segundoNome: sobrenome,
        idade
    };

    return cadastro;
}

function getInfo() {
    return setInfo3("José", "Albani", 22);
}

console.log("Cadastro 3");
console.log(setInfo3("Lucas", "Vanni", 22));

let {primeiroNome: nome, segundoNome, idade} = getInfo();

console.log(nome, segundoNome, idade);
