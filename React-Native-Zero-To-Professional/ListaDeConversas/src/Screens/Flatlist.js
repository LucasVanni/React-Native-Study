import React, { Component } from "react";

import { View, FlatList } from "react-native";

import { styles } from "../styles/styles.js";

const img1 = { uri: "https://www.b7web.com.br/avatar1.png" };
const img2 = { uri: "https://www.b7web.com.br/avatar2.png" };
const img3 = { uri: "https://www.b7web.com.br/avatar3.png" };

import ListItem from "./Tela1";

export default class flatlist extends Component {
  static navigationOptions = {
    title: "WHATSAPP"
  };

  constructor(props) {
    super(props);

    const item = [
      { key: "0", img: img1, nome: "Lucas", Mensagem: "Olá" },
      { key: "1", img: img2, nome: "Amigo", Mensagem: "Goleta Plus" },
      { key: "2", img: img2, nome: "Felipe", Mensagem: "Salve" },
      {
        key: "3",
        img: img2,
        nome: "Robison",
        Mensagem:
          "Olá, tudo bem? Olá, tudo bem? Olá, tudo bem? Olá, tudo bem? Olá, tudo bem? Olá, tudo bem? Olá, tudo bem? Olá, tudo bem?"
      },
      { key: "4", img: img3, nome: "Mãe", Mensagem: "Oi filho" },
      { key: "5", img: img2, nome: "Pai", Mensagem: "Onde você está?" },
      { key: "6", img: img3, nome: "Aline Gonçalves", Mensagem: "Grupo Chato" }
    ];

    this.state = { lista: item };
  }

  render() {
    const { view } = styles;

    return (
      <View style={view}>
        <FlatList
          data={this.state.lista}
          renderItem={({ item }) => (
            <ListItem data={item} navigation={this.props.navigation} />
          )}
        />
      </View>
    );
  }
}
