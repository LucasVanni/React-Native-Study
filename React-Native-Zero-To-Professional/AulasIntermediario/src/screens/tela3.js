import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../styles/stylesAula11.js";

export default class Tela3 extends Component {
  static navigationOptions = {
    title: "Tela 3"
  };

  render() {
    const { viewTela3, txtTela3, btnTela3, txtBtnTela3 } = styles;

    return (
      <View style={viewTela3}>
        <Text style={txtTela3}> Terceira Tela </Text>
        <TouchableOpacity
          style={btnTela3}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={txtBtnTela3}>Voltar para a tela anterior...</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
