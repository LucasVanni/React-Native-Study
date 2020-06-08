import React, { Component } from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "../styles/stylesAula16.js";

const { imgS } = styles;

const img1 = require("../images/icone1.png");

export default class Tela1 extends Component {
  static navigationOptions = {
    tabBarLabel: "Tela",
    tabBarIcon: () => <Image source={img1} style={imgS} />
  };
  render() {
    const { view, to, txt, txtTo } = styles;

    return (
      <View style={view}>
        <Text style={txt}> Olá Mundo </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("segundaTela")}
          style={to}
        >
          <Text style={txtTo}> Ir para a segunda tela </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
