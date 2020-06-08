import React, { Component } from "react";

import { View, TouchableOpacity, Image } from "react-native";

import { styles } from "../styles/styles.js";

import ReceitasTab from "./ReceitasTab.js";

export default class Receitas extends Component {
  render() {
    const imgBack = require("../images/back.png");
    const {
      viewPrincipalReceitas,
      viewConteudoReceita,
      viewVoltar,
      touchVoltar,
      imgVoltar
    } = styles;

    return (
      <View style={viewPrincipalReceitas}>
        <View style={viewVoltar}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={touchVoltar}
          >
            <Image resizeMode="contain" source={imgBack} style={imgVoltar} />
          </TouchableOpacity>
        </View>
        <View style={viewConteudoReceita}>
          <ReceitasTab screenProps={this.props.navigation.state.params} />
        </View>
      </View>
    );
  }
}
