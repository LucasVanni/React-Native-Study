import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../styles/stylesAula14.js";

export default class Tela2 extends Component {
  render() {
    const { btn, txt, txtTO, viewAula14 } = styles;

    return (
      <View style={viewAula14}>
        <Text style={txt}> Olá </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={btn}
        >
          <Text style={txtTO}> Voltar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
