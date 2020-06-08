import React, { Component } from "react";

import { View, Text } from "react-native";

import { styles } from "../styles/styles.js";

export default class Sobre extends Component {
  render() {
    const { viewSobre } = styles;

    return <View style={viewSobre} />;
  }
}
