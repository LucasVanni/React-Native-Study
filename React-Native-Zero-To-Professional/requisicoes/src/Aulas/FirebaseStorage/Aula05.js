import React, { Component } from "react";

import { View, Image, Button } from "react-native";

import { styles } from "./styles.js";

import firebase from "../../apikey";

import { remover } from "./functions";

export default class Aula05 extends Component {
    constructor(props) {
        super(props);

        this.state = { avatar: null };

        firebase
            .storage()
            .ref()
            .child("images/imagem.jpg")
            .getDownloadURL()
            .then(url => {
                this.setState({ avatar: { uri: url } });
            });
    }
    render() {
        const { view, foto } = styles;

        return (
            <View style={view}>
                <Image source={this.state.avatar} style={foto} />
                <Button
                    title="Remover avatar"
                    onPress={() => remover(this, firebase)}
                />
            </View>
        );
    }
}
