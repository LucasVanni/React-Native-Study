import React, { Component } from "react";

import { View, Button } from "react-native";

import { styles } from "../styles/styles.js";

export default class Login extends Component {
  render() {
    const { view } = styles;

    return (
      <View style={[view, { justifyContent: "center", alignItems: "center" }]}>
        <Button
          title='Login'
          onPress={() => this.props.navigation.navigate("navigator")}
        />
      </View>
    );
  }
}
