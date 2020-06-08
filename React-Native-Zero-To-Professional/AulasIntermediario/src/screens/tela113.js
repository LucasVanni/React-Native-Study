import React, { Component } from "react";

import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "../styles/stylesAula13.js";

export default class Tela1 extends Component {
  static navigationOptions = {
    title: "HOME"
  };

  render() {
    const { viewAula13, btn, txtTO, txt } = styles;

    return (
      <View style={viewAula13}>
        <Text style={txt}> Bem Vindo</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("SegundaTela", {
              nome: "Lucas",
              idade: 22
            })
          }
          style={btn}
        >
          <Text style={txtTO}>Lucas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("SegundaTela", {
              nome: "Adriane",
              idade: 22
            })
          }
          style={btn}
        >
          <Text style={txtTO}>Adriane</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
