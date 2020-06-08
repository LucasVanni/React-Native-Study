import React, { Component } from "react";

import { Text, Picker, View } from "react-native";

import { styles } from "../styles/styles.js";

import SliderDadosSalario from "./SliderDadosSalario";
import PickerBanco from "./PickerBanco";
import QntCartoes from "./QntCartoes";

export default class DadosPessoais extends Component {
  render() {
    const { viewFinanceiro, viewTextFinanceiro, titulo2 } = styles;

    return (
      <View style={viewFinanceiro}>
        <View style={viewTextFinanceiro}>
          <Text style={titulo2}>Dados Financeiros</Text>
        </View>
        <SliderDadosSalario />
        <PickerBanco />
        <QntCartoes />
      </View>
    );
  }
}
