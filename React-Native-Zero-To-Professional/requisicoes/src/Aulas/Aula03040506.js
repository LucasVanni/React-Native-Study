import React, { Component } from "react";

import { View, FlatList, Text } from "react-native";

import { styles } from "../styles/stylesAula03.js";

import ListaTarefas from "../components/ListaTarefas.js";

import AddArea from "../components/AddArea";

import { recebendoDados } from "../functions/functionsAula03";

export default class Aula03040506 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tarefas: [],
      carregando: true,
      input: ""
    };

    this.url = "https://b7web.com.br/todo/39684";

    recebendoDados(this);
  }

  render() {
    const { viewPrincipal, carregando, txtCarregando, flatList } = styles;

    if (this.state.carregando) {
      return (
        <View style={carregando}>
          <Text style={txtCarregando}>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={viewPrincipal}>
          <AddArea objeto={this} />
          <View style={flatList}>
            <FlatList
              data={this.state.tarefas}
              renderItem={({ item }) => (
                <ListaTarefas data={item} objeto={this} url={this.url} />
              )}
              keyExtractor={(item, index) => item.id}
            />
          </View>
        </View>
      );
    }
  }
}
