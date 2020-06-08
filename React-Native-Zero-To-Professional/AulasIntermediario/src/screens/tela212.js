import React, { Component } from "react";

import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "../styles/stylesAula12.js";

export default class Tela2 extends Component {

  render() {
    const { txtBtn, viewTela1, txtTela1, btn } = styles;

    return (
      <View style={viewTela1}>
        <Text style={txtTela1}> Tela de cadastro </Text>
        <Text style={txtTela1}>
          Nome: {this.props.navigation.getParam("nome", "ninguém")}
        </Text>
        <Text style={txtTela1}>
          Idade: {this.props.navigation.getParam("idade", 0)}
        </Text>

        <Text style={txtTela1}>
          Status Social:{" "}
          {this.props.navigation.getParam("statusSocial", "Solteiro")}
        </Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={btn}
        >
          <Text style={txtBtn}> Voltar para a primeira Página </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
