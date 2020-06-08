import React, { Component } from "react";

import { View, Text } from "react-native";

import { styles } from "../styles/styles.js";

export default class Tela1 extends Component {
  render() {
    const { view, txt } = styles;

    return (
      <View style={view}>
        <Text style={txt}> Tela1 </Text>
        <Text style={txt}> Tela1 </Text>
        <Text style={txt}> Tela1 </Text>
        <Text style={txt}> Tela1 </Text>
        <Text style={txt}> Tela1 </Text>
      </View>
    );
  }
}
