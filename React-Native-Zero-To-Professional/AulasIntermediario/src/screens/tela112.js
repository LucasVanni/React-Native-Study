import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../styles/stylesAula12.js";

export default class Tela1 extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#00ff92",
      height: 100,
    },
  };

  render() {
    const { viewTela1, txtBtn, txtTela1, btn } = styles;

    return (
      <View style={viewTela1}>
        <Text style={txtTela1}> Bem vindos ao meu app </Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("segundaTela", {
              nome: "Lucas",
              idade: 22,
            })
          }
          style={btn}
        >
          <Text style={txtBtn}> Ir para segunda página </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
