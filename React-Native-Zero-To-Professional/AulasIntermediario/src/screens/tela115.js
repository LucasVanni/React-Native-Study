import React, { Component } from "react";

import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "../styles/stylesAula15.js";

export default class Tela1 extends Component {
  render() {
    const { view, to, txt, txtTo } = styles;

    return (
      <View style={view}>
        <Text style={txt}> Primeira Tela </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("segundaTela")}
          style={to}
        >
          <Text style={txtTo}> Ir para Perfil </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
