import React, { Component } from "react";

import { View, Image } from "react-native";

import { styles } from "../styles/styles.js";

export default class Fotos extends Component {
  static navigationOptions = {
    title: "Fotos"
  };
  render() {
    const { viewFotos, img } = styles;

    const uri = require("../img/teste.jpg");

    return (
      <View style={viewFotos}>
        <Image source={uri} style={img} />
      </View>
    );
  }
}
