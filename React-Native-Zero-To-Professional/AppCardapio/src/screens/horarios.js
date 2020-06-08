import React, { Component } from "react";

import { View } from "react-native";

import { styles } from "../styles/styles.js";

export default class Horarios extends Component {
  render() {
    const { viewHorarios } = styles;

    return <View style={viewHorarios} />;
  }
}
