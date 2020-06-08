import React, { Component } from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "../styles/styles.js";

export default class Resumo extends Component {
  static navigationOptions = {
    title: "RESUMO",
  };

  render() {
    const {
      viewGeralTab,
      txtTituloResumo,
      viewDescricao,
      txtDescricao,
      viewTituloResumo,
    } = styles;
    return (
      <View style={viewGeralTab}>
        <View style={viewTituloResumo}>
          <Text style={txtTituloResumo}>
            {this.props.screenProps.item.nome}
          </Text>
        </View>
        <View style={viewDescricao}>
          <Text style={txtDescricao}>
            {this.props.screenProps.item.descricao}
          </Text>
        </View>
      </View>
    );
  }
}
