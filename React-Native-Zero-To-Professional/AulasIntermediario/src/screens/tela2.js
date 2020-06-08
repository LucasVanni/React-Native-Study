import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../styles/stylesAula11.js";

export default class Tela2 extends Component {
  static navigationOptions = {
    title: "Segunda Tela"
  };

  render() {
    const { viewTela2, btnTela2, txtBtnTela2, txtTela2 } = styles;

    return (
      <View style={viewTela2}>
        <Text style={txtTela2}> Cadastro </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("terceiraTela")}
          style={btnTela2}
        >
          <Text style={txtBtnTela2}> Ir para a terceira tela </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
