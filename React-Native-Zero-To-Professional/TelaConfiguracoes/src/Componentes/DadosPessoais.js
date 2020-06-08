import React, { Component } from "react";

import { Text, View } from "react-native";

import { styles } from "../styles/styles.js";

import NomeInput from "./NomeInput.js";
import PickerDataNascimento from "./PickerDataNascimento.js";
import PickerSexo from "./PickerSexo";

import SliderAltura from "./SliderAltura";

import SliderPeso from "./SliderPeso";

import Switch from "./Switch";

export default class DadosPessoais extends Component {
  render() {
    const { viewDadosPessoais, viewtxtDadosPessoais, titulo1 } = styles;

    return (
      <View style={viewDadosPessoais}>
        <View style={viewtxtDadosPessoais}>
          <Text style={titulo1}>Dados Pessoais</Text>
        </View>
        <NomeInput />
        <PickerDataNascimento />
        <PickerSexo />
        <SliderAltura />
        <SliderPeso />
        <Switch />
      </View>
    );
  }
}
