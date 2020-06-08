import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../styles/stylesAula14.js";

export default class Tela1 extends Component {
  render() {
    const { viewAula14, txt, txtTO, btn, btnAbrir, txtAbrir } = styles;

    return (
      <View style={viewAula14}>
        <Text style={txt}> Olá </Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.toggleDrawer()}
          style={btnAbrir}
        >
          <Text style={txtAbrir}> Abrir Menu </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("segundaTela")}
          style={btn}
        >
          <Text style={txtTO}> Ir para a segunda tela </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
