import React, { Component } from "react";

import { View, Picker, Text } from "react-native";

import { styles } from "../styles/styles.js";

import { introduzindoPicker4, mudandoValores } from "../functions/functions";

export default class PickerDataNascimento extends Component {
  constructor(props) {
    super(props);

    const sexo = [
      { key: "0", sexo: "Masculino" },
      { key: "1", sexo: "Feminino" }
    ];

    this.state = { valorSelecionado: 0, sexo };
  }

  render() {
    const { viewPickerSexo, pickerSexo, txtSexo } = styles;

    let SexoPicker = this.state.sexo.map(introduzindoPicker4);

    return (
      <View style={viewPickerSexo}>
        <Text style={txtSexo}>Sexo:</Text>
        <Picker
          style={pickerSexo}
          onValueChange={valor => mudandoValores(valor, this)}
          selectedValue={this.state.valorSelecionado}
        >
          {SexoPicker}
        </Picker>
      </View>
    );
  }
}
