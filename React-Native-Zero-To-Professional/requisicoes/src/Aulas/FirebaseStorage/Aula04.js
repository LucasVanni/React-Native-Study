import React, { Component } from "react";

import { View, Text, Button, Image } from "react-native";

import { styles } from "./styles.js";

import { recuperarFotoFirebase } from "./functions.js";

import firebase from "../../apikey";

import ImagePicker from "react-native-image-picker";

import RNFetchBlob from "react-native-fetch-blob";

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

export default class Aula04 extends Component {
    constructor(props) {
        super(props);

        this.state = { foto: null, pct: "" };
    }

    render() {
        const { view, foto } = styles;

        return (
            <View style={view}>
                <Button
                    title="Pegar foto"
                    onPress={() =>
                        recuperarFotoFirebase(
                            this,
                            ImagePicker,
                            RNFetchBlob,
                            firebase,
                        )
                    }
                />
                <Text>{this.state.pct}</Text>
                <Image source={this.state.foto} style={foto} />
            </View>
        );
    }
}
