import React, { Component } from "react";

import { View, Text, FlatList } from "react-native";

import { styles } from "../styles/styles.js";

import { renderizarPreparo } from "../functions/functions";

export default class Preparo extends Component {
  static navigationOptions = {
    title: "PREPARO"
  };
  render() {
    const {
      viewGeralTab,
      txtTituloPreparo,
      viewPreparo,
      viewConteudoPreparo
    } = styles;
    return (
      <View style={viewGeralTab}>
        <View style={viewPreparo}>
          <Text style={txtTituloPreparo}>PREPARO</Text>
        </View>
        <View style={viewConteudoPreparo}>
          <FlatList
            data={this.props.screenProps.item.modoPreparo}
            renderItem={({ item }) => renderizarPreparo(item)}
            keyExtractor={item => item.key.toString()}
          />
        </View>
      </View>
    );
  }
}
