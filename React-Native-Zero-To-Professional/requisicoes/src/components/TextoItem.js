import React, { Component } from "react";

import { View, Text } from "react-native";

export default class TextoItem extends Component {
  render() {
    // A variável item recebe o item que está na lista, que por sua vez foi passada por parâmetro pelo componente RenderizarItem que são impressas na tela...
    let item = this.props.lista.item;

    return (
      <View>
        <Text>
          Key: {item.key}, nome: {item.nome}, idade: {item.idade}
        </Text>
      </View>
    );
  }
}
