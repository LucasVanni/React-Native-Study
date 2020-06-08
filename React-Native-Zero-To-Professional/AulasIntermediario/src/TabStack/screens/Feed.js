import React, { Component } from "react";

import { View, Text, Button } from "react-native";

import { styles } from "../styles/styles.js";

export default class Feed extends Component {
  static navigationOptions = {
    title: "Feed"
  };

  render() {
    const { viewFeed, textFeed } = styles;

    return (
      <View style={viewFeed}>
        <Text style={textFeed}> Feed </Text>
        <Button
          title="IR PARA PERFIL"
          onPress={() => this.props.navigation.navigate("Perfil")}
        />
      </View>
    );
  }
}
