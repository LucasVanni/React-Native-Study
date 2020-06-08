export const aoMudar = (props, nome) => {
          let s = props.state;

          if(nome.length > 0) {
            s.nome = nome;
          }else{
            s.nome = '';
          }

          props.setState(s);
};

export const aoClicar = (objeto) => {
          let nomeRecebido = objeto.state.nome;

          let s = objeto.state;

          s.nomeCompleto = `Olá, ${nomeRecebido}...`;

          objeto.setState(s);

          adivinheNome(objeto);
};

export const adivinheNome = (objeto) => {
    let nomeRecebido = objeto.state.nome;

    let nome = objeto.state;

    let nomesAleatorios = ["Lucas", "Rosangela", "Carlos"];

    let numeroRandom = Math.floor(Math.random() * nomesAleatorios.length);

      if (nomesAleatorios[numeroRandom] === nomeRecebido) {

        nome.nomesAleatorios = "Parabêns, você acertou...";

      } else if (nomesAleatorios[numeroRandom] != nomeRecebido) {

        nome.nomesAleatorios = `Infelizamente o nome era ${nomesAleatorios[numeroRandom]}`

      }

      objeto.setState(nome);


}
