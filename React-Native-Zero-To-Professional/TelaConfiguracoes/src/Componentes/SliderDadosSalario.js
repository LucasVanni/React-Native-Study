import React, { Component } from "react";

import { View, Slider, Text } from "react-native";

import { styles } from "../styles/styles.js";

import { mudarDadosSalario } from "../functions/functions";

export default class SliderDadosSalario extends Component {
  constructor(props) {
    super(props);

    this.state = { valor: 15000 };
  }

  render() {
    const {
      viewGeralDados,
      viewTituloDados,
      textTituloDados,
      viewSliderDados,
      textResultDados
    } = styles;

    return (
      <View style={viewGeralDados}>
        <View style={viewTituloDados}>
          <Text style={textTituloDados}>Salário atual:</Text>
        </View>
        <View style={viewSliderDados}>
          <Slider
            value={this.state.valor}
            onValueChange={item => mudarDadosSalario(item, this)}
            minimumValue={200}
            maximumValue={30000}
          />
          <Text style={textResultDados}>R$ {this.state.valor.toFixed(2)}</Text>
        </View>
      </View>
    );
  }
}
