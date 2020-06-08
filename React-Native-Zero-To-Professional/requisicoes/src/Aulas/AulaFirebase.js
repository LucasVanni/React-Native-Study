import React, { Component } from "react";

import { View, Text, FlatList } from "react-native";

import { styles } from "../styles/stylesAulaFirebase.js";

import firebase from "firebase";

export default class AulaFirebase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomeUM: "Carregando...",
      nome: "Carregando...",
      nome3: "Carregando...",
    };

    // Atualiza sempre que há uma alteração
    firebase
      //Database é o nome serviço no firebase, que será utilizado...
      .database()
      //.ref é o nome do nó que queremos criar da base de dados
      .ref("name")
      // .on é usado para criar um listener, para que todas as alterações feitas no banco recebam efeito também no app...
      .on(
        /*
        O primeiro parâmetro é qual o tipo de ouvinte que o on irá aplicar, no caso do value ele retornará tudo, absolutamente tudo do que será alterado no nó que foi setado acima (parâmetro da função ref)
        Para alterar dentro do nó especificado acima é utilizado o parâmetro child_changed no lugar de value...

        O segundo parâmetro irá receber o dado que está sendo requisitado, pela documentação do firebase é recomendado utilizar snapshot, pois a resposta se trata de uma "foto" retidada do item buscado...

        No caso a função abaixo está recebendo o valor contido em snapshot e sendo recebido pela state nome...
        */
        "value",
        snapshot => {
          let state = this.state;
          state.nomeUM = snapshot.val();
          this.setState(state);
        },
      );

    // Para setar um valor, no caso do exemplo abaixo o nó não existe no banco e será criado o nó, juntamente com o valor do nó... no caso irá criar o nó 1 dentro de Usuario nome: "Fabrício";
    firebase
      .database()
      .ref("Usuarios")
      .child(1)
      .child("nome")
      .set("Lucas");

    firebase
      .database()
      .ref("Usuarios")
      .child(1)
      .child("idade")
      .set(22);

    firebase
      .database()
      .ref("Usuarios")
      .child(1)
      .child("nome")
      .on("value", snapshot => {
        let state = this.state;
        state.nome = snapshot.val();
        this.setState(state);
      });

    // Ou
    firebase
      .database()
      .ref("Usuarios/1/nome")
      .on("value", snapshot => {
        let state = this.state;
        state.nome = snapshot.val();
        this.setState(state);
      });

    // Para recuperar verificar as informações com o banco de dados quando a página é carregada, é necessário utilizar a função once ao invés de on

    firebase
      .database()
      .ref("Usuarios/2/nome")
      .once("value", snapshot => {
        let state = this.state;
        state.nome3 = snapshot.val();
        this.setState(state);
      });
  }

  render() {
    const { viewPrincipal, viewAula01 } = styles;

    return (
      <View style={viewPrincipal}>
        <View style={viewAula01}>
          <Text>Meu nome é: </Text>
          <Text>{this.state.nome}</Text>
          <Text>{this.state.nomeUM}</Text>
          <Text>{this.state.nome3}</Text>
        </View>
      </View>
    );
  }
}
