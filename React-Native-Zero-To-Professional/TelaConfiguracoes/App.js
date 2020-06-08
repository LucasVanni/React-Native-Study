import React, { Component } from "react";

import { View, Text } from "react-native";

import DadosPessoais from "./src/Componentes/DadosPessoais";

import DadosFinanceiros from "./src/Componentes/DadosFinanceiros";

import { styles } from "./src/styles/styles";

export default class Config extends Component {
  render() {
    const { view, viewTxtFinal, txtFinal } = styles;

    return (
      <View style={view}>
        <DadosPessoais />
        <DadosFinanceiros />
        <View style={viewTxtFinal}>
          <Text style={txtFinal}> © Lucas Vanni </Text>
        </View>
      </View>
    );
  }
}
