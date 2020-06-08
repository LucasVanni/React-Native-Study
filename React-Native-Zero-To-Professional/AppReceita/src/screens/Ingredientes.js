import React, { Component } from "react";

import { View, Text, FlatList, Image } from "react-native";

import { styles } from "../styles/styles.js";

import { renderIngredientes } from "../functions/functions";

export default class Ingredientes extends Component {
  static navigationOptions = {
    title: "INGREDIENTES"
  };
  render() {
    const {
      viewGeralTab,
      txtIngredientes,
      viewIngredientes,
      viewConteudoIngredientes
    } = styles;

    return (
      <View style={viewGeralTab}>
        <View style={viewIngredientes}>
          <Text style={txtIngredientes}>INGREDIENTES</Text>
        </View>
        <View style={viewConteudoIngredientes}>
          <FlatList
            data={this.props.screenProps.item.ingredientes}
            renderItem={({ item }) => renderIngredientes(item)}
            keyExtractor={item => item.key.toString()}
          />
        </View>
      </View>
    );
  }
}
