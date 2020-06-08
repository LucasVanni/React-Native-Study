import React, { Component } from "react";

import { View, Picker, Text } from "react-native";

import { styles } from "../styles/styles.js";

import {
  introduzindoPicker,
  mudandoValores,
  introduzindoPicker2,
  introduzindoPicker3
} from "../functions/functions";

export default class PickerDataNascimento extends Component {
  constructor(props) {
    super(props);

    const data = [
      { dia: "01", mes: "4", ano: "1999" },
      { dia: "02", mes: "4", ano: "1999" },
      { dia: "03", mes: "4", ano: "1999" },
      { dia: "04", mes: "4", ano: "1999" },
      { dia: "05", mes: "4", ano: "1999" },
      { dia: "06", mes: "5", ano: "2000" },
      { dia: "06", mes: "7", ano: "2000" },
      { dia: "07", mes: "6", ano: "2000" },
      { dia: "08", mes: "4", ano: "1999" }
    ];

    this.state = { valorSelecionado: 0, data };
  }

  render() {
    const {
      viewPrincipalPickerNascimento,
      viewTextPickerNascimento,
      viewItemsPickerNascimento,
      pickerNascimento,
      txtNascimento
    } = styles;

    let datasPicker = this.state.data.map(introduzindoPicker);
    let mesPicker = this.state.data.map(introduzindoPicker2);
    let anosPicker = this.state.data.map(introduzindoPicker3);

    return (
      <View style={viewPrincipalPickerNascimento}>
        <View style={viewTextPickerNascimento}>
          <Text style={txtNascimento}>Data de nascimento: </Text>
        </View>
        <View style={viewItemsPickerNascimento}>
          <Picker
            style={pickerNascimento}
            onValueChange={valor => mudandoValores(valor, this)}
            selectedValue={this.state.valorSelecionado}
          >
            {datasPicker}
          </Picker>

          <Picker
            style={pickerNascimento}
            onValueChange={valor => mudandoValores(valor, this)}
            selectedValue={this.state.valorSelecionado}
          >
            {mesPicker}
          </Picker>
          <Picker
            style={pickerNascimento}
            onValueChange={valor => mudandoValores(valor, this)}
            selectedValue={this.state.valorSelecionado}
          >
            {anosPicker}
          </Picker>
        </View>
      </View>
    );
  }
}
