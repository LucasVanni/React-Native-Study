import React, { Component } from "react";

import { View } from "react-native";

import { styles } from "../styles/stylesAulaFirebase05";
import TelaLogar from "../components/TelaLogar";

export default class AulaFirebase05 extends Component {
  render() {
    const { viewAula05 } = styles;

    return (
      <View style={viewAula05}>
        <TelaLogar />
      </View>
    );
  }
}
