import React, { Component } from "react";

import { View, Slider, Text } from "react-native";

import { styles } from "../styles/styles.js";

import { mudarAltura } from "../functions/functions";

export default class SliderAltura extends Component {
  constructor(props) {
    super(props);

    this.state = { valor: 2 };
  }

  render() {
    const {
      viewSliderAltura,
      txtTituloSliderAltResut,
      txtTituloSliderAlt,
      viewTextAlt,
      slider
    } = styles;

    return (
      <View style={viewSliderAltura}>
        <View style={viewTextAlt}>
          <Text style={txtTituloSliderAlt}>Altura:</Text>
        </View>
        <View style={slider}>
          <Slider
            value={this.state.valor}
            onValueChange={item => mudarAltura(item, this)}
            minimumValue={1}
            maximumValue={3}
          />
          <Text style={txtTituloSliderAltResut}>
            {this.state.valor.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }
}
