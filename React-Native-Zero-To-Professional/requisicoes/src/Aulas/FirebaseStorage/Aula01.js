import React, { Component } from "react";

import { View, Text } from "react-native";

import { styles } from "./styles.js";

import firebase from "../../apikey";

export default class Aula01 extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        let images = firebase
            .storage()
            .ref()
            .child("images/imagem.jpg");
        // Volta um diretório
        let arquivos = images.parent.child("files");

        //Volta para a raiz
        let raiz = imagem.root;
    }

    render() {
        const { view } = styles;

        return (
            <View style={view}>
                <Text>...</Text>
            </View>
        );
    }
}
