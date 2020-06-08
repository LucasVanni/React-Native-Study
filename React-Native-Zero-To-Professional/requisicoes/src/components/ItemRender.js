import React, { Component } from "react";

import { View, Text } from "react-native";

import { styles } from "../styles/stylesAulaFirebase06";

export default class ItemRender extends Component {
    render() {
        const { viewItemRender, textoRender } = styles;

        return (
            <View style={viewItemRender}>
                <Text style={textoRender}>{this.props.item.titulo}</Text>
            </View>
        );
    }
}
