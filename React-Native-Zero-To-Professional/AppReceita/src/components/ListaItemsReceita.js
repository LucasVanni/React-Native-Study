import React, { Component } from "react";

import { TouchableHighlight, View, Text, Image } from "react-native";

import { styles } from "../styles/styles.js";

export default class ListaItemsReceita extends Component {
  render() {
    const {
      viewTxt,
      viewListaItems,
      imgReceita,
      viewItems,
      th,
      txtTitulo,
      txtRendPrep,
      viewImg
    } = styles;

    return (
      <View style={viewListaItems}>
        <TouchableHighlight
          underlayColor="#ccc"
          style={th}
          onPress={this.props.onPress}
        >
          <View style={viewItems}>
            <View style={viewImg}>
              <Image source={this.props.data.img} style={imgReceita} />
            </View>
            <View style={viewTxt}>
              <Text style={txtTitulo}>{this.props.data.nome} </Text>
              <Text style={txtRendPrep}>
                Rendimento: {this.props.data.rendimento}
              </Text>
              <Text style={txtRendPrep}>
                Tempo de preparo: {this.props.data.preparo} minutos
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
