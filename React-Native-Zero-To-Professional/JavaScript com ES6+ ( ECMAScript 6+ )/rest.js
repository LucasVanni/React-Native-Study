function adicionar(numeros) {

    console.log(numeros);

}

adicionar(5, 6, 7, 8);

/*
  Se a função se apresenta desta forama
  será passado para a função apenas o
  primeiro parâmetro enviado... No caso "Lucas"
*/
function adicionarNomes(nomes) {
    console.log(nomes);
}

adicionarNomes("Lucas", "Paulo", "Antonio", "Maria");

/*
  Se a função se apresenta desta forama
  será passado todos os parâmetros passados
  para ela na forma de um array dinâmico...
*/
function adicionarNomes2(...nomes) {
    console.log(nomes);
}

adicionarNomes2("Lucas", "Paulo", "Antonio", "Maria");
