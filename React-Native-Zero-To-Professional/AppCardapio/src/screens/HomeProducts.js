import React, { Component } from "react";

import { View, FlatList } from "react-native";

import { styles } from "../styles/styles.js";

import Produtos from "../componentes/Produtos";

export default class HomeProducts extends Component {
  constructor(props) {
    super(props);

    this.state = { list: props.navigation.state.params.products };
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  render() {
    const { viewProducts } = styles;

    return (
      <View style={viewProducts}>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => <Produtos data={item} />}
          keyExtractor={item => item.key.toString()}
        />
      </View>
    );
  }
}
