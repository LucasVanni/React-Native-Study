let requisitar = () => {
    let url = 'https://alunos.b7web.com.br/api/ping'
    let params = {
        method: 'POST',
        body: JSON.stringify({nome: 'Lucas', idade: 22})
    };
    fetch(url, params).then((resposta) => resposta.json()).then((json) => {
        console.log(json);
    });

    console.log("Requisitar 1");
}
/*
  A primeira coisa que se deve fazer é dizer
  que essa função é uma função assíncrona,
  ou seja, o seu código não é executado
  sequencialmente, em ordem...
  O código terá um processo de delay,
  ou seja, vai ter uma requisição, vai
  ter que esperar uma resposta de alguém...
  Para que o código seja continuado...
  Para isso é inserido o 'async'
*/
let requisitar2 = async() => {
    let url = 'https://alunos.b7web.com.br/api/ping'
    let params = {
        method: 'POST',
        body: JSON.stringify({nome: 'Lucas', idade: 22})
    };

    /*
    Recebo na constante 'resposta' a resposta do Fetch...
    o await fará com que a constante fique esperando
    a resposta da função fetch... Fica esperando a resposta
    sem continuar o código...
  */
    const resposta = await fetch(url, params);
    const json = await resposta.json();

    console.log(json);

    console.log('Requisitar 2');

}

requisitar2();
console.log("Texto Qualquer");
