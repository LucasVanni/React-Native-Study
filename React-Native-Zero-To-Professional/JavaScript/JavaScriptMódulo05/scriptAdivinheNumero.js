function adivinhe() {
    var numR = numeroRandom();

    var numeroUsuario = usuario();
    calculoAdvinhacao(numR, numeroUsuario);

}

function adivinhe() {

    var nR = numeroRandom();

    document
        .getElementById('n1')
        .innerHTML = nR;

    var n1 = document
        .getElementById('n1')
        .innerHTML;

    var n2 = document
        .getElementById('n2')
        .value;

    calculoAdvinhacao(n1, n2);

    resetar();
}

function numeroRandom() {
    var numR = Math.floor(Math.random() * 100);
    return numR;
}

function usuario() {
    var numeroUsuario = parseInt(prompt("Digite um número entre 0 e 10: "));
    return numeroUsuario;
}

function calculoAdvinhacao(numR, numeroUsuario) {

    if (numR == numeroUsuario) {
        alert("Parabéns, você adivinhou o número!");
    } else {
        alert("Infelizmente você errou, o número correto seria " + numR + " !!");
    }

}

function resetar() {
    document
        .getElementById('n1')
        .innerHTML = "?";
    document
        .getElementById('n2')
        .value = "";
}
