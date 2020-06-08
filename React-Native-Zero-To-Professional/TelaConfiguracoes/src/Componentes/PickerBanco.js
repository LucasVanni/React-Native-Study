import React, { Component } from "react";

import { View, Text, Picker } from "react-native";

import { styles } from "../styles/styles.js";

import { mudandoBancos, introduzindoPickerBanco } from "../functions/functions";

export default class PickerBanco extends Component {
  constructor(props) {
    super(props);

    const bancos = [
      { nomeBanco: "Santander" },
      { nomeBanco: "Banco do Brasil" },
      { nomeBanco: "Banco Inter" },
      { nomeBanco: "NOBANK" },
      { nomeBanco: "Caixa Federal" }
    ];

    this.state = { valorSelecionado: 0, dados: bancos };
  }
  render() {
    const { viewPickerBanco, viewTxtBanco, pickerBanco, txtBanco } = styles;

    const itemPicker = this.state.dados.map(introduzindoPickerBanco);

    return (
      <View style={viewPickerBanco}>
        <View style={viewTxtBanco}>
          <Text style={txtBanco}> Banco: </Text>
        </View>
        <Picker
          style={pickerBanco}
          onValueChange={valor => mudandoBancos(valor, this)}
          selectedValue={this.state.valorSelecionado}
        >
          {itemPicker}
        </Picker>
      </View>
    );
  }
}
