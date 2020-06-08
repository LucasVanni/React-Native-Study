import React, { Component } from "react";

import { View, Text, Button } from "react-native";

import { styles } from "../styles/styles.js";

export default class Mosaico extends Component {
  static navigationOptions = {
    title: "Explorar"
  };
  render() {
    const { viewMosaico, txtMosaico } = styles;

    return (
      <View style={viewMosaico}>
        <Text style={txtMosaico}> Mosaico </Text>
        <Button
          title="Fotos"
          onPress={() => this.props.navigation.navigate("Foto")}
        />
        <Button
          title="Perfil"
          onPress={() => this.props.navigation.navigate("Perfil")}
        />
      </View>
    );
  }
}
