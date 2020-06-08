import React, { Component } from "react";

import { View, TextInput, Text } from "react-native";

import { styles } from "../styles/styles.js";

export default class NomeInput extends Component {
  render() {
    const { txtInput, viewInput, input } = styles;

    return (
      <View style={viewInput}>
        <Text style={txtInput}>Nome</Text>
        <TextInput style={input} />
      </View>
    );
  }
}
