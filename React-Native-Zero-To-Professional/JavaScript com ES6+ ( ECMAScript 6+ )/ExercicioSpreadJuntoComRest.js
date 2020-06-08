// Esse exercício foi mencionado na aula de Operador Rest Adicionar mais nomes a
// uma lista
/*  ...novosNomes --> Utiliza o operador
    Rest, para receber quantos parâmetros quiser.
*/
function adicionar(nomes, ...novosNomes) {

    /*
    Utiliza o operador Spread para
    tornar os vetores "nomes" e "novosNomes",
    um único vetor "novoConjunto" que irá
    conter todo os seus conteúdos
  */
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto;
}

let nomes = ["Lucas", "Paulo"];

let outrosNomes = adicionar(nomes, "Fernando", "Fábio");

console.log(outrosNomes);

/* Sem o Spread
function adicionar(nomes, ...novosNomes) {

  let novoConjunto = [nomes, novosNomes];

  return novoConjunto;
}
*/
