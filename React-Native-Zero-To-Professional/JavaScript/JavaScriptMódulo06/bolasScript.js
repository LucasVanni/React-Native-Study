function carregar() {

    var pontos = 0;

    // Criando o elemento divsão ("div")
    var placar = document.createElement('div');

    // Inserindo id no elemento div
    placar.setAttribute('id', 'placar');

    /*
        Inserindo o elemento dentro do "Body"
        como seu filho
      */
    document
        .body
        .appendChild(placar);

    // Criando o elemento divsão ("div")
    var divisao = document.createElement('div');

    // Inserindo id no elemento div
    divisao.setAttribute('id', 'divisao');

    /*
        Inserindo o elemento dentro do "Body"
        como seu filho
      */
    document
        .body
        .appendChild(divisao)

    // Criando o elemento divsão ("div")
    var divisaoBotao = document.createElement('div');

    // Inserindo id no elemento div
    divisaoBotao.setAttribute('id', 'divisaoBotao');

    /*
        Inserindo o elemento dentro do "Body"
        como seu filho
      */
    document
        .body
        .appendChild(divisaoBotao);

    // Criadno botão
    var botaoInicio = document.createElement('button');

    //Criando um nó de texto
    var textoBotao = document.createTextNode("Iniciar");

    //Inserindo o nó do texto criado no botão
    botaoInicio.appendChild(textoBotao);

    /*
        Inserindo o evento de onClick no botão que irá chamar
        a função para gerar as bolas na página
      */
    botaoInicio.setAttribute('onclick', `criandoObjetoBola(${pontos})`);

    /*
        Inserindo um id no botão para que quando a
        função criandoObjetoBola for executada ele seja
        removido da tela
      */
    botaoInicio.setAttribute('id', 'botao');

    // Inserindo o botão no corpo do texto
    document
        .getElementById('divisaoBotao')
        .appendChild(botaoInicio);
}

function criandoObjetoBola(pontos) {

    /*
     Verificando se o o elemento cujo id é "botao" é diferente de null.
     Ou seja, verifica se o botão existe.
    */
    if (document.getElementById('botao') != null) {
        /*
        Se foi verificado que o botão existe,
        então é identificado pelo id ( no caso "botao" )
        e é armazenado na variável "removerBotao".
      */
        var removerBotao = document.getElementById('botao');

        /*
        É encontrado o nó pai do elemento que foi armazenado
        na variável "removerbotão" com id "botão" (linha 64),
        e então é removido seu nó filho, no caso o próprio
        removerBotao, o pensamento é parecido com uma árvore.
      */
        removerBotao
            .parentNode
            .removeChild(removerBotao);
    }

    /*
   createElement -> Cria um elemento novo e armazena em objbola
   No caso do exercício será criado o elemento "div"
  */
    var objetoBola = document.createElement('div');

    /*
    setAttribute -> Adiciona atributos ao elemento criado.
    no caso será adicionado class="bola" e onMouseDown="regerarbola()";
    A classe bola chama o CSS .bola do HTML.
  */
    objetoBola.setAttribute('class', 'bola');

    /*
    Chama a função gerar passando como parâmetro a variável que contém
    o objeto cuja classe é "bola".
  */
    gerar(objetoBola, pontos);

}

// Função chamada no objetoBola
function regerarbola(pontos) {

    pontos++;

    placar(pontos);

    // Função que irá remover o objeto bola.
    remover();

    // Função que irá gerar novamente uma bola na tela. (Com posição aleatória);
    criandoObjetoBola(pontos);

}

function remover() {
    /*
    É identificado o elemento tendo sua classe com o nome bola e com posição
    0 na coleção HTML, e armazenado na variável "bola".
  */
    var bolaV = document.getElementsByClassName('bola')[0];

    /*
    É encontrado o nó pai do elemento que foi armazenado
    na variável "bolaV" tendo como class o nome 'bola' (linha 135),
    e então é removido seu nó filho, no caso a própria variável
    'bolaV', o pensamento é parecido com uma árvore.
  */
    bolaV
        .parentNode
        .removeChild(bolaV);

}

function gerar(objetoBola, pontos) {

    // É gerado randomicamente uma posição X qualquer
    var posicaoX = Math.floor(Math.random() * 500);

    // É gerado randomicamente uma posição Y qualquer
    var posicaoY = Math.floor(Math.random() * 400);

    var cor = parseInt(Math.random() * 999999);

    /*
    É inserido, na variável que foi passada pro parâmetro pela função "criandoObjetoBola",
    a propriedade de estilo e inserido as prpriedades direita e cima, concatenados
    com os valores gerados randomicamente anteriormente.
  */
    objetoBola.setAttribute('style', 'left: ' + posicaoX + 'px; top:' + posicaoY + 'px;background-color: #' + cor);

    /*
    Adicionado o evento a variável "objetoBola" onMouseDown
    que recebe a função regerarbola.
  */
    objetoBola.setAttribute('onMouseDown', `regerarbola(${pontos})`);

    /* Variável objetoBola sendo adicionado no elemento com id "divisao",
     que foi criado na função carregar.
  */
    document
        .getElementById('divisao')
        .appendChild(objetoBola);
}

function placar(pontos) {

    if (document.getElementById('h1') == null) {
        var h1 = document.createElement('h1');

        h1.setAttribute('id', 'h1');

        var textoH1 = document.createTextNode(`Placar: ${pontos} pontos`);

        h1.appendChild(textoH1);

        document
            .getElementById('placar')
            .appendChild(h1);

    } else {

        var removerTextoPlacar = document.getElementById('h1');
        removerTextoPlacar
            .parentNode
            .removeChild(removerTextoPlacar);

        var h1 = document.createElement('h1');

        h1.setAttribute('id', 'h1');

        var textoH1 = document.createTextNode(`Placar: ${pontos} pontos`);

        h1.appendChild(textoH1);

        document
            .getElementById('placar')
            .appendChild(h1);

    }

}
