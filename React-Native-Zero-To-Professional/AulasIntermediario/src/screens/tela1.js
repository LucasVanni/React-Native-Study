import React, { Component } from "react";

import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "../styles/stylesAula11.js";

export default class Tela1 extends Component {
  static navigationOptions = {
    title: "Welcome to my App"
  };

  render() {
    const { txtBtnTela1, btnTela1, viewTela1, txtTela1 } = styles;

    return (
      <View style={viewTela1}>
        <Text style={txtTela1}> Tela 1 </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("segundaTela")}
          style={btnTela1}
        >
          <Text style={txtBtnTela1}> Ir para a próxima página </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
