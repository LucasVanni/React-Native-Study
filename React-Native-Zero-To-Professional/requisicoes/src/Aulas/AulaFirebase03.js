import React, { Component } from "react";

import { View, Text, FlatList } from "react-native";

import { styles } from "../styles/stylesAulaFirebase03.js";

import firebase from "firebase";

import RenderizarItem from "../components/RenderizarItem";

export default class AulaFirebase03 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lista: [],
      Carregando: "Carregando...",
    };

    firebase
      // Acessando o banco de dados
      .database()
      // Acessando o nó usuários
      .ref("usuarios")
      // Implementando um listenner
      .on("value", snapshot => {
        let state = this.state;

        // Deixa-lo como vazio para que independente do que estaja dentro do array ele será vazio...
        state.lista = [];

        // forEach procura e executa o que está dentro da função, para cada nó filho...
        snapshot.forEach(child => {
          // Adiciona um novo item no array
          state.lista.push(
            // O seguinte json que será adicionado no array
            {
              key: child.key,
              // Val da acesso a todas as informações do nó...
              nome: child.val().nome,
              idade: child.val().idade,
            },
          );
          this.setState(state);
        });
      });
  }

  render() {
    const { viewAula03 } = styles;

    return (
      <View style={viewAula03}>
        {/*  
        Enviando a state lista para ser renderizada no componente renderizar Item
        */}
        <RenderizarItem
          lista={this.state.lista}
          Carregando={this.state.Carregando}
        />
      </View>
    );
  }
}
