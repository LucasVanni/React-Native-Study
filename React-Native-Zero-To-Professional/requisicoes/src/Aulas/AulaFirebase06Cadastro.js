import React, { Component } from "react";

import { View } from "react-native";

import { styles } from "../styles/stylesAulaFirebase06";

import TelaCadastro from "../components/TelaCadastro";

import firebase from "../apikey";

export default class AulaFirebase06Cadastro extends Component {
    constructor(props) {
        super(props);

        firebase.auth().signOut();

        this.state = { uid: "", lista: [], addItemTxt: "" };
    }

    render() {
        const { viewAula06 } = styles;

        return (
            <View style={viewAula06}>
                <TelaCadastro this={this} navigation={this.props.navigation} />
            </View>
        );
    }
}
