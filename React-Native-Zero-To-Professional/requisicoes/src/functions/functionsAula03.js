export const loadList = (objeto, state) => {
  fetch(objeto.url, { method: "GET" })
    .then(r => r.json())
    .then(r => {
      state.tarefas = r.todo;
      state.carregando = false;
      objeto.setState(state);
    });
};

export const recebendoDados = objeto => {
  let state = objeto.state;
  loadList(objeto, state);
};

export const adicionarItem = objeto => {
  let texto = objeto.state.input;

  const obj = objeto;
  const state = objeto.state;
  state.input = "";
  objeto.setState(state);

  fetch(objeto.url, {
    method: "POST",
    headers: {
      Aceept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      item: texto,
    }),
  })
    .then(r => r.json())
    .then(() => {
      loadList(obj, state);
    });
};

import { styles } from "../styles/stylesAula03";

export const concluirTarefa = objeto => {
  const { done, undone } = styles;

  let state = objeto.state;

  let doneTF;

  if (state.escolha == undone) {
    state.escolha = done;
    doneTF = "sim";
  } else if (state.escolha == done) {
    state.escolha = undone;
    doneTF = "nao";
  }

  fetch(objeto.props.url + "/" + objeto.props.data.id, {
    method: "PUT",
    headers: {
      Aceept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      done: doneTF,
    }),
  });

  objeto.setState(state);
};

export const removerTarefa = objeto => {
  let state = objeto.props.objeto.state;

  const obj = objeto.props.objeto;

  fetch(objeto.props.url + "/" + objeto.props.data.id, {
    method: "DELETE",
    headers: {
      Aceept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(r => r.json())
    .then(() => {
      loadList(obj, state);
    });
};

export const mudandoTexto = (texto, objeto) => {
  let state = objeto.state;
  state.input = texto;
  objeto.setState(state);
};
