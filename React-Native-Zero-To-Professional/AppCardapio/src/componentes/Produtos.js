import React, { Component } from "react";

import { View, Image, Text } from "react-native";

import { styles } from "../styles/styles.js";

export default class Produtos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { viewItemProducts, productImage, productName } = styles;

    return (
      <View style={viewItemProducts}>
        <Image
          resizeMode="contain"
          source={this.props.data.img}
          style={productImage}
        />

        <Text style={productName}>{this.props.data.name}</Text>
      </View>
    );
  }
}
