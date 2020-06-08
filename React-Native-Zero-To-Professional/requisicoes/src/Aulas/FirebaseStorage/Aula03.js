import React, { Component } from "react";

import { View, Image, Button } from "react-native";

import { styles } from "./styles.js";

import { pegarFoto } from "./functions.js";

import ImagePicker from "react-native-image-picker";

export default class Aula02 extends Component {
    constructor(props) {
        super(props);

        this.state = { foto: null };
    }

    render() {
        const { view, foto } = styles;

        return (
            <View style={view}>
                <Button
                    title="Pegar foto"
                    onPress={() => pegarFoto(this, ImagePicker)}
                />
                <Image source={this.state.foto} style={foto} />
            </View>
        );
    }
}
