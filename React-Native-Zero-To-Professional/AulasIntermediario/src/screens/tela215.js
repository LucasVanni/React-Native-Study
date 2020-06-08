import React, { Component } from "react";

import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "../styles/stylesAula15.js";

export default class Tela2 extends Component {
  static navigationOptions = {
    //header: null
  };
  render() {
    const { view, to, txtTo, txt } = styles;

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
