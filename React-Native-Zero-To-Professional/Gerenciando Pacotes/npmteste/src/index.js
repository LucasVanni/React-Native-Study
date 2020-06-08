/*
  Comando que importa a biblioteca 'moment'
  para a variável constante 'moment', possibilitando
  que a variável moment seja executada em qualquer local
  do código.
*/
const moment = require('moment');

/*
  Comando da biblioteca(variável) 'moment'
  para trocar a linguagem das informações.
*/
moment.locale("pt-br");

/*
  Comando para recuperar o dia atual,
  processado pela função 'format' da biblioteca
  'moment'
*/
let dia = moment().format('dddd');

document.getElementById('dia').innerHTML = "O dia atual é: " + dia;

// Imprime o conteúdo da variável dia
console.log('O dia atual é: ' + dia);
