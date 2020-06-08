import React, { Component } from "react";

import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "../styles/styles.js";

export default class Tela2 extends Component {
  render() {
    const { view, txt, txtTo, to } = styles;

    return (
      <View style={view}>
        <Text style={txt}> Segunda Tela </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={to}
        >
          <Text style={txtTo}> Voltar para a primeira tela </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
