export const usuarioNome = (nomeInput, objeto) => {
  let state = objeto.state;
  state.nomeInput = nomeInput;
  objeto.setState(state);
};

export const usuarioIdade = (idadeInput, objeto) => {
  let state = objeto.state;
  state.idadeInput = idadeInput;
  objeto.setState(state);
};

export const inserirUsuario = (objeto, firebase) => {
  // Verifica se o nome que está sendo digitado contem algo ou não digitado, se tiver ele entrará no if, se não ele não irá executar o que está dentro do if...
  if (objeto.state.nomeInput.length > 0) {
    // Nó de usuários é criado e armazenado na variável usuarios...
    let usuarios = firebase.database().ref("usuarios");

    // Para cada nó é gerado uma chave única e armazenado na variável key...
    let key = usuarios.push().key;

    // É iserido a chave nome e idade dentro do nó key que foi gerada, recebendo os valores contidos em nomeInput e idadeInput...
    usuarios.child(key).set({
      nome: objeto.state.nomeInput,
      idade: objeto.state.idadeInput,
    });

    alert("Usuario inserido!");
  }
};
