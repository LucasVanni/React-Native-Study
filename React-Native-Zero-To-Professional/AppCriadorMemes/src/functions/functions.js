export const textoMeme = (objeto, texto) => {

  let t = objeto.state;

  t.texto = `${texto}`;

  objeto.setState(t);

  mudarVogais(objeto, texto);

}

export const mudarVogais = (objeto, texto) => {

  let t = objeto.state;

  let novoTexto = texto.toLowerCase();

  novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, 'i');

  novoTexto = novoTexto.replace(/(à|á|ã|â)/g, 'i');

  novoTexto = novoTexto.replace(/(è|é|ê)/g, 'i');

  novoTexto = novoTexto.replace(/(í|ì|î)/g, 'i');

  novoTexto = novoTexto.replace(/(ó|ò|ô|õ)/g, 'i');

  novoTexto = novoTexto.replace(/(ù|ú|û)/g, 'i');

  t.segundoTexto = `${novoTexto}`;

  objeto.setState(t);

}
