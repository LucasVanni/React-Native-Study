import React, { Component } from "react";

import { View, Text } from "react-native";

import { styles } from "../styles/stylesAula01.js";

export default class ListaFilmes extends Component {
  render() {
    const { viewListaFilmes, txtRYConteudo, txtTituloConteudo } = styles;

    return (
      <View style={viewListaFilmes}>
        <Text style={txtTituloConteudo}>{this.props.data.title}</Text>
        <Text style={txtRYConteudo}>{this.props.data.releaseYear}</Text>
      </View>
    );
  }
}
