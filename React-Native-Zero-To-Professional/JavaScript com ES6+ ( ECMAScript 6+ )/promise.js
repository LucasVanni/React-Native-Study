function fazer() {
    /*
    Cria uma promesssa que é retornada
    imediatamente para quem chamou a
    função "fazer()", então quem a
    chamar a função fazer() irá saber
    que em determinado momento da
    história ela irá receber uma
    resposta dessa promessa
  */
    /*
    A promessa recebe uma função que
    contém os parâmetros resolve e
    reject que serão funções também...
    Se deu certo uso a resolve ou
    se deu errado uso a reject
  */
    return new Promise((resolve, reject) => {

        // Espera fake
        setTimeout(() => resolve('ok'), 3000);

    });
}
/*
  then quer dizer a partir disso, no caso
  a partir da chamada da função "fazer" chama
  a função then que recebe como parâmetro a
  função contendo a resposta quando a tiver
*/
fazer().then((resposta) => {
    console.log(resposta);
});
