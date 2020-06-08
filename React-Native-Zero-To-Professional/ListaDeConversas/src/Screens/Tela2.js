import React, { Component } from "react";

import { View, Text, FlatList } from "react-native";

import { styles } from "../styles/styles.js";

import MsgItem from "./MsgItem";

export default class Tela2 extends Component {
  constructor(props) {
    super(props);

    const dados = [
      { key: "1", nome: "Lucas", Mensagem: "Olá", m: true },
      { key: "2", nome: "Amigo", Mensagem: "Salve", m: false },
      { key: "3", nome: "Lucas", Mensagem: "Como vai a vida?", m: true },
      {
        key: "4",
        nome: "Amigo",
        Mensagem: "Vai muito bem. E você? Eu soube que vai bem legal",
        m: false
      },
      { key: "5", nome: "Lucas", Mensagem: "Bem também", m: true },
      { key: "6", nome: "Amigo", Mensagem: "Maravilha!", m: false },
      { key: "7", nome: "Lucas", Mensagem: "Grande Abraço", m: true },
      { key: "8", nome: "Amigo", Mensagem: "Abraços, Até mais", m: false },
      { key: "9", nome: "Lucas", Mensagem: "Até", m: true }
    ];

    this.state = { chat: dados };
  }

  static navigationOptions = {
    title: "Chat"
  };

  render() {
    return (
      <FlatList
        data={this.state.chat}
        renderItem={({ item }) => <MsgItem data={item} />}
      />
    );
  }
}
