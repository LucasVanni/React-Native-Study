import React, { Component } from "react";

import { View, FlatList, Text } from "react-native";

import TextoItem from "./TextoItem";

export default class RenderizarItem extends Component {
  render() {
    // Se o comprimento da lista passada por parâmetro for igual a 0 irá ser implementado na tela do usuário a string "Carregando..." que está sendo passada como parâmetro pelo state Carregando
    if (this.props.lista.length === 0) {
      return <Text>{this.props.Carregando}</Text>;
      // Se não ele retorna o componente FlatList
    } else {
      return (
        <FlatList
          data={this.props.lista}
          renderItem={item => <TextoItem lista={item} />}
        />
      );
    }
  }
}
