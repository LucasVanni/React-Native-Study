import React, { Component } from "react";

import { View, Switch, Text } from "react-native";

import { styles } from "../styles/styles.js";

import { switchValor } from "../functions/functions";

export default class SwitchComp extends Component {
  constructor(props) {
    super(props);

    this.state = { valorSwitch: false };
  }

  render() {
    const { viewSwitch, txtTituloSwitch, viewPrincipalSwitch } = styles;

    return (
      <View style={viewPrincipalSwitch}>
        <Text style={txtTituloSwitch}>Doador de Orgãos:</Text>
        <View style={viewSwitch}>
          <Switch
            thumbColor="#00ff00"
            trackColor={{ false: "#ff0000", true: "#00ff00" }}
            value={this.state.valorSwitch}
            onValueChange={valor => switchValor(valor, this)}
          />
        </View>
      </View>
    );
  }
}
