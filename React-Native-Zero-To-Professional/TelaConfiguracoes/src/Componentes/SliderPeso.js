import React, { Component } from "react";

import { View, Slider, Text } from "react-native";

import { styles } from "../styles/styles.js";

import { mudarPeso } from "../functions/functions";

export default class SliderPeso extends Component {
  constructor(props) {
    super(props);

    this.state = { valor: 150 };
  }
  render() {
    const {
      viewSliderPeso,
      txtTituloSliderPeso,
      slider,
      txtTituloSliderPesoResut
    } = styles;

    return (
      <View style={viewSliderPeso}>
        <Text style={txtTituloSliderPeso}>Peso:</Text>
        <View style={slider}>
          <Slider
            value={this.state.valor}
            onValueChange={item => mudarPeso(item, this)}
            minimumValue={10}
            maximumValue={300}
          />
          <Text style={txtTituloSliderPesoResut}>
            {this.state.valor.toFixed(0)}KG
          </Text>
        </View>
      </View>
    );
  }
}
