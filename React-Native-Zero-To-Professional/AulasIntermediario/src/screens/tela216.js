import React, { Component } from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "../styles/stylesAula16.js";

const { imgS } = styles;

const img2 = require("../images/icone2.png");

export default class Tela2 extends Component {
  static navigationOptions = {
    tabBarLabel: "Tela 2",
    tabBarVisible: false,
    tabBarIcon: () => <Image source={img2} style={imgS} />
  };
  render() {
    const { view, txt, to, txtTo } = styles;

    return (
      <View style={view}>
        <Text style={txt}> Bem vindo a segunda tela </Text>
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
