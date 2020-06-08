import React, { Component } from "react";

import { View, Text } from "react-native";

import { styles } from "../styles/stylesAula17.js";

export default class Tela1 extends Component {
  render() {
    const { view, text } = styles;

    return (
      <View style={view}>
        <Text style={text}> First Screen </Text>
      </View>
    );
  }
}
