import {Animal} from "./animal.js";

let gato = new Gato(4, 'Preto');

// Modificará a propriedade pernas inserindo o valor 3
gato.pernas = 3;

console.log(gato.falar());

console.log(gato.cor());

console.log(gato.dados);
