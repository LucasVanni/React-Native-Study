import React, { Component } from "react";

import { View } from "react-native";

import { styles } from "../styles/stylesAulaFirebase06";

import TelaCadastro from "../components/TelaCadastro";
import TelaLogar from "../components/TelaLogar";
import InformacoesUsuario from "../components/InformacoesUsuario";

import firebase from "firebase";
import { fire } from "../functions/functionsAulaFirebase06";

export default class AulaFirebase06Logar extends Component {
    constructor(props) {
        super(props);

        this.state = { uid: "", lista: [], addItemTxt: "" };

        fire(firebase, this);
    }

    render() {
        const { viewAula06 } = styles;

        return (
            <View style={viewAula06}>
                <TelaCadastro />
                <TelaLogar this={this} />
                <InformacoesUsuario this={this} />
            </View>
        );
    }
}
