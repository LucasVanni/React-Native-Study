import React, { Component } from "react";

import { View, FlatList, Text } from "react-native";

import { styles } from "../styles/stylesAula01";

import ListaFilmes from "../components/ListaFilmes";

import { requisicao } from "../functions/functionsAula01";

export default class Aula0102 extends Component {
  constructor(props) {
    super(props);

    this.state = { filmes: {}, title: "", description: "", carregando: true };

    requisicao(this);
  }

  render() {
    const {
      viewPrincipal,
      title,
      description,
      txtCarregando,
      carregando
    } = styles;

    if (this.state.carregando) {
      return (
        <View style={carregando}>
          <Text style={txtCarregando}>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={viewPrincipal}>
          <Text style={title}>{this.state.title}</Text>
          <Text style={description}>{this.state.description}</Text>
          <FlatList
            data={this.state.filmes}
            renderItem={({ item }) => <ListaFilmes data={item} />}
          />
        </View>
      );
    }
  }
}
