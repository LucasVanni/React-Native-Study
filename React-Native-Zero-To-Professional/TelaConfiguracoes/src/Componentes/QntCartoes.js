import React, { Component } from "react";

import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "../styles/styles.js";

import { mudarCartaoMenos, mudarCartaoMais } from "../functions/functions";

export default class SliderDadosSalario extends Component {
  constructor(props) {
    super(props);

    this.state = { valor: 3, desativado: false, opacidade: 0.2, cor: "#000" };
  }

  render() {
    const {
      viewGeralCartao,
      viewTituloCartao,
      textTituloCartao,
      viewSliderCartao,
      btnMenos,
      viewBtnMenos,
      txtInternoBtnMenos,
      textResultCartao,
      btnMais,
      viewBtnMais,
      txtInternoBtnMais,
      viewTextResultCartao
    } = styles;

    return (
      <View style={viewGeralCartao}>
        <View style={viewTituloCartao}>
          <Text style={textTituloCartao}>Quantidade de Cartões:</Text>
        </View>
        <View style={viewSliderCartao}>
          <View style={viewBtnMenos}>
            <TouchableOpacity
              disabled={this.state.desativado}
              onPress={() => mudarCartaoMenos(this)}
              style={btnMenos}
              activeOpacity={this.state.opacidade}
            >
              <Text
                style={[
                  txtInternoBtnMenos,
                  { borderColor: this.state.cor, color: this.state.cor }
                ]}
              >
                -
              </Text>
            </TouchableOpacity>
          </View>
          <View style={viewTextResultCartao}>
            <Text style={textResultCartao}>{this.state.valor}</Text>
          </View>
          <View style={viewBtnMais}>
            <TouchableOpacity
              onPress={() => mudarCartaoMais(this)}
              style={btnMais}
            >
              <Text style={txtInternoBtnMais}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
