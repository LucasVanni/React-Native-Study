import React, { Component } from "react";

import { View, Text } from "react-native";

import { styles } from "../styles/styles.js";

export default class Contato extends Component {
  render() {
    const { viewContato } = styles;

    return <View style={viewContato} />;
  }
}
