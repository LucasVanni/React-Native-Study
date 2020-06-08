import React, { Component } from "react";

import { View, TouchableHighlight, Image, Text } from "react-native";

import { styles } from "../styles/styles.js";

import { clickTH } from "../functions/functions";

export default class Lista extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { viewList, listaTitle, listaDescr, viewTitulo, imgLista } = styles;

    return (
      <TouchableHighlight onPress={() => clickTH(this)} underlayColor="#ccc">
        <View style={[viewList, { backgroundColor: this.props.data.bg }]}>
          <Image source={this.props.data.img} style={imgLista} />
          <View style={viewTitulo}>
            <Text style={listaTitle}>{this.props.data.title}</Text>
            <Text style={listaDescr}>{this.props.data.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
