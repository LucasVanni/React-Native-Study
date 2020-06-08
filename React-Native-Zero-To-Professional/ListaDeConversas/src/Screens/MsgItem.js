import React, { Component } from "react";

import { View, TouchableHighlight, Text } from "react-native";

import { styles } from "../styles/styles.js";

const renderItem = objeto => {
  if (objeto.m == false) {
    return (
      <View
        style={{
          backgroundColor: "#004500",
          alignSelf: "flex-start",
          borderRadius: 10,
          padding: 10,
          marginRight: 50
        }}
      >
        <Text style={{ color: "#00ff00" }}>{objeto.nome}</Text>
        <Text style={{ fontSize: 20, color: "#00ff00" }}>
          {objeto.Mensagem}
        </Text>
      </View>
    );
  } else {
    return (
      <View
        style={{
          alignSelf: "flex-end",
          backgroundColor: "#ccc",
          borderRadius: 10,
          padding: 10
        }}
      >
        <Text style={{ textAlign: "right" }}> {objeto.nome} </Text>
        <Text style={{ fontSize: 20 }}>{objeto.Mensagem}</Text>
      </View>
    );
  }
};
export default class MsgItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight style={{ margin: 10, padding: 10 }}>
        <View style={{ flex: 1 }}>{renderItem(this.props.data)}</View>
      </TouchableHighlight>
    );
  }
}
