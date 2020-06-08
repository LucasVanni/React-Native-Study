import React, { Component } from "react";

import { View, TextInput } from "react-native";

import { styles } from "../styles/stylesAula09.js";

import {
  recuperarNomeDigitado,
  getItem
} from "../functions/functionsAula09.js";

export default class Aula09 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: ""
    };

    getItem(this);
  }

  render() {
    const { viewAula09, input } = styles;

    return (
      <View style={viewAula09}>
        <TextInput
          style={input}
          onChangeText={nome => recuperarNomeDigitado(this, nome)}
          value={this.state.nome}
          maxLength={40}
          placeholder="Digite seu nome:"
        />
      </View>
    );
  }
}
