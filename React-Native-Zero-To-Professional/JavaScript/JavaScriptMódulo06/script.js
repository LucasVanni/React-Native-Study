// EVENTOS DE MOUSE
function darCliqueBotao() {
    console.log("Apertou o clique do mouse");
}

function soltarCliqueBotao() {
    console.log("Soltou o clique do mouse");
}

function entrarNaArea() {
    console.log("Entrou na área do objeto com o mouse");
}

function sairDaArea() {
    console.log("Saiu da área do objeto com o mouse");
}

function eventoCompletoDeClicarESoltarBotao() {
    console.log("Apertou e soltou o Clique do mouse");
}

function moverNaArea() {
    console.log("Está se movendo na área do objeto");
}

function botaoDireito() {
    console.log("Pressionou o botão direito");
    //Iníbe o menu que abre ao clicar com o botão direito.
    return false;
}

function cliqueDuplo() {
    console.log("Clicou duas vezes...");
}

// EVENTOS DE TECLADO event.keyCode -> retorna o código da tecla digitada.
function empurrarTecla(evento) {
    console.log(evento.keyCode + " empurrada.");
}

function despressionarTecla(evento) {
    var input = document.getElementById('inputTeclado');
    var valor = input.value;

    if (valor.length > 10) {
        console.log("Máximo de Caractéres...");
    } else {
        console.log(evento.keyCode);
    }

}

/*
  event.shiftKey -> retorna se a tecla shift foi ou não (True or False)
                    pressionada
*/
function empurrarTeclaShift(evento) {
    if (evento.shiftKey == true) {
        console.log("Shift pressionado.");
    } else {
        console.log("Shift não pressionado.");
    }
}

/*
  event.ctrlKey -> retorna se a tecla control foi ou não (True or False)
                   pressionada
*/
function empurrarTeclaControl(evento) {
    if (evento.ctrlKey == true) {
        console.log("Control pressionado.");
    } else {
        console.log("Control não pressionado.");
    }
}

/*
  event.altKey -> retorna se a tecla alt foi ou não (True or False)
                  pressionada
*/
function empurrarTeclaAlt(evento) {
    if (evento.altKey == true) {
        console.log("Alt pressionado.");
    } else {
        console.log("Alt não pressionado.");
    }
}

/*
 event.metaKey -> retorna se a tecla do windows foi ou não (True or False)
                  pressionada
*/
function empurrarTeclaMeta(evento) {
    if (evento.metaKey == true) {
        console.log("Botão Windows pressionado.");
    } else {
        console.log("Botão Windows não pressionado.");
    }
}

/*
   A condição do if retorna se a tecla Shift em conjunto com a tecla E,
          foram ou não (True or False) pressionadas.
*/
function empurrarTeclaShiftMaisE(evento) {
    if (evento.shiftKey == true && evento.keyCode == 69) {
        console.log("Shift + E pressionados");
    }
}

function pressionarTecla(evento) {
    console.log(evento.keyCode + " pressionada.");
}

// EVENTOS DE PÁGINA Função é chamada pelo evento onLoad situado na tag "BODY"
function carregar() {
    // Alerta a mensagem quando a função é chamada
    alert("Página carregada...");
}

// Função chamada pelo evento onUnLoad situado na tag "BODY"
function fechar() {
    alert('Deseja realmente fechar a página? ');
}

// EVENTOS EM FORMULÁRIOS Função que receberá o objeto select
function mudou(objeto) {
    // Acessa o objeto select e pega o valor do objeto.
    console.log("Selecionou: " + objeto.value);
}

// Função chamada pelo evento onFocus
function focou() {
    console.log("Focou no campo de texto");
}

// Função chamada pelo evento onBlur
function desfocou() {
    console.log("Desfocou do campo de texto");
}

// Função chamada pelo evento onSubmit
function envio() {
    console.log("Envio Bloqueado");
    //Bloqueia o envio do formulário
    return false;
}
