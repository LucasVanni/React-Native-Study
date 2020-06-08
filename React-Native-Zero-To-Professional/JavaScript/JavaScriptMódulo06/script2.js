/*
  Principal função
  para manipular datas.
  Se não for passado nenhum
  parâmetro para a função,
  retorna a data atual do sistema,
  agora se for passado um
  parâmetro ( que deve estar em milisegundos )
  para a função irá retornar a data referente
  aos milisegundos inseridos.
*/
new Date();

/*
  No caso, os milissegundos começam a ser computados
  a partir do dia 31 de Dezembr de 1969, as 21 horas
  GMT -0300, mas o correto é dizer que iniciou-se em
  01 de Janeiro de 1970, as 00 horas GMT 0000,
  que foi o marco zero do sistema de calentários
  usados pelos sistemas operacionais UNIX.
*/
var dt = new Date(0);

console.log(dt);

/*
  Guarda a data completa
  em uma variável 'dt'...
*/
var dt = new Date();

/*
  dt -> Irá exibir o conteúdo da variável
        no caso a data completa
*/
console.log(dt);

// dt.getHours -> Recuperar a hora atual
console.log("Agora são " + dt.getHours() + " horas,");

// dt.getMinutes -> Recuperar os minutos atuais
console.log(dt.getMinutes() + " minutos,");

// dt.getSeconds -> Recuperar os segundos atuais
console.log(dt.getSeconds() + " seguntos.");

/*
 Date.parse -> Transforma a data inserida como parâmetro
               em milisegundos
*/
console.log("Quantia de milisegundos (tendo como base 1970): " + Date.parse("September 07, 1822"));

/*
  Os milisegundos gerados são passados como parâmetro
  para que a data seja calculada pela função "new Date"
  e a data calculada é armazenada na variável "dt"
*/
var dt = new Date(Date.parse("September 07, 1822"));

/*
  dt.getDate -> Retorna o dia do mês referente a data
                que está sendo processada...  De 01 a 31
*/
console.log("Dia do mês: " + dt.getDate());

/*
  dt.getDay -> Retorna o dia da semana
               referente a data que está sendo processada...
  De 00 a 06, sendo...
  00 -> Domingo
  01 -> Segunda
  02 -> Terça
  03 -> Quarta
  04 -> Quinta
  05 -> Sexta
  06 -> Sabado
*/
console.log("Dia da semana: " + dt.getDay());

// dt.getFullYear -> Retorna o ano da data que está sendo processada...
console.log("Ano: " + dt.getFullYear());

console.log(dt);

/*
  getDate -> Retorna o dia do mês da data que está sendo prcessada
  getMonth -> Retorna o número do mês da data
              que está sendo prcessada...
              0 -> Janeiro
              1 -> Fevereiro
              2 -> Março
              3 -> Abril
              4 -> Maio
              5 -> Junho
              6 -> Julho
              7 -> Agosto
              8 -> Setembro
              9 -> Outubro
              10 -> Novembro
              11 -> Dezembro
              Para deixar mais natural é adicionado
              o valor 1 após a função getMonth
  getFullYear -> Retorna o ano da data que está sendo prcessada
*/
console.log(dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear());

// Retorna os milisegundos da data que está sendo prcessada
console.log("Milisegundos: " + dt.getMilliseconds());

// Retorna a quantia de milisegundos desde 01 de Janeiro de 1970 GMT 00
console.log("Total de milisegundos: " + dt.getTime());

/*
  Para demonstrar os dias da semana como strings contendo os nomes dos dias
  da semana é preciso criar um array, contendo os nomes dos dias da semana...
*/
var dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
];

/*
    Após a array ser criada, introduz a ela a função que irá retornar o valor do
    dia da semana, no caso 6, e então é pego a sexta posição do array
    e neste caso seria sábado... Então "Sábado" é impresso no console.
  */
console.log(dias[dt.getDay()]);

/*
    Para demonstrar os mêses do ano como strings contendo os nomes dos mêses
    da semana é preciso criar um array, contendo os nomes dos mêses...
  */
var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

/*
      Após a array ser criada, introduz a ela a função que irá retornar o valor dos
      meses do ano, no caso 8, e então é pego a oitava posição do array
      e neste caso seria Setembro... Então "Setembro" é impresso no console.
    */
console.log(meses[dt.getMonth()]);

var dt = new Date(Date.parse("March 10, 2001"));

// Adiconando 60 dias a mais na data dt
dt.setDate(dt.getDate() + 60);

// Adiconando horas a mais das horas da data
dt.setHours(dt.getHours() + 24);

console.log(dt);
