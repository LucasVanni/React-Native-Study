export const requisicao = objeto => {
  const state = objeto.state;
  const obj = objeto;
  // Pegue o conteúdo da URL
  fetch("https://facebook.github.io/react-native/movies.json")
    // (Depois)Então, transforme o conteúdo da url em JSON
    .then(transformaEMJson => transformaEMJson.json())
    // Me de o resultado
    .then(jsonTransformado => {
      state.filmes = jsonTransformado.movies;
      state.title = jsonTransformado.title;
      state.carregando = false;
      state.description = jsonTransformado.description;
      obj.setState(state);
    });
};
