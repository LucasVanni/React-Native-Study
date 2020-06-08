import React, { Component } from "react";

import { View, Text } from "react-native";

import { styles } from "../styles/styles.js";

export default class Perfil extends Component {
  render() {
    const { viewPerfil, txtPerfil } = styles;

    return (
      <View style={viewPerfil}>
        <Text style={txtPerfil}> PERFIL </Text>
      </View>
    );
  }
}
