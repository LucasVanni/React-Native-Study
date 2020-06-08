/*
  O primeiro parâmetro do Fetch é uma URL
  O segundo parâmetro é um objeto contendo
  os parâmetro que serão enviados, como o
  método a ser enviado ('GET', 'POST', etc...),
  podemos ainda enviar um body(corpo da requisição), e para enviar
  os parâmetros do body(corpo da requisição) devermos transformar de
  objeto para string usando json.stringify({
    exemplo de objeto:
    nome: "Lucas",
    idade: 22
  });
*/

fetch('https://alunos.b7web.com.br/api/ping', {
    method: 'POST',
    body: JSON.stringify({nome: 'Lucas', idade: 22})
}).then((resposta) =>
/*
          O then recebe uma função contendo a resposta...
          Como a api ping retorna um JSON, irei transformar a resposta em JSON

        */
resposta.json()).then((json) => {
    /*
              O que retornará outra promessa, pois é necessário efetuar o processamento
              dessa resposta, pois ele retorna tudo no JSON tendo a necessidade de outra
              promessa para retornar a resposta correta esperada.
            */
    console.log(json);
});

/*
  Fetch dará uma promessa como resposta imediata, dizendo que terei
  a resposta algum dia da história
*/
/*
  Como fetch é uma requisição, quando ele é aplicado eu não tenho
  a resposta imediata do servidor, então para isso a função "fetch"
   recebe uma promessa
*/
