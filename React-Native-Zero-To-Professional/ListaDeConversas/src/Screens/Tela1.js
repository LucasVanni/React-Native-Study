import React, { Component } from "react";

import { View, Text, TouchableHighlight, Image } from "react-native";

import { styles } from "../styles/styles.js";

import { screenChange } from "../Functions/functions";

export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { msg: this.props.data.Mensagem };
  }

  render() {
    const { item, imgR, info, msg, nome } = styles;

    return (
      <TouchableHighlight
        underlayColor={"#ccc"}
        onPress={() => screenChange(this)}
      >
        <View style={item}>
          <Image source={this.props.data.img} style={imgR} />

          <View style={info}>
            <Text style={nome} numberOfLines={1}>
              {this.props.data.nome}
            </Text>
            <Text style={msg} numberOfLines={1}>
              {this.state.msg}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
