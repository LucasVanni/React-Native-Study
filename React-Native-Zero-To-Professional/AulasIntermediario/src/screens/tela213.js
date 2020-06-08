import React, { Component } from "react";

import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "../styles/stylesAula13.js";

export default class Tela2 extends Component {
  static navigationOptions = {
    title: "Perfil"
  };

  render() {
    const { viewAula13, btn, txtTO, txt } = styles;

    return (
      <View style={viewAula13}>
        <Text style={txt}> Segunda Página </Text>
        <Text style={txt}>
          Nome: {this.props.navigation.getParam("nome", "Eu")}
        </Text>
        <Text style={txt}>
          Idade: {this.props.navigation.getParam("idade", 0)}
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={btn}
        >
          <Text style={txtTO}> Voltar para a primeira tela </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
