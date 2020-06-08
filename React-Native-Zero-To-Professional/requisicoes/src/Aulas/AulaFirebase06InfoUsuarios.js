import React, { Component } from "react";

import { View, Button } from "react-native";

import { styles } from "../styles/stylesAulaFirebase06";

import TelaCadastro from "../components/TelaCadastro";
import TelaLogar from "../components/TelaLogar";
import InformacoesUsuario from "../components/InformacoesUsuario";

import firebase from "../apikey";
import { fire } from "../functions/functionsAulaFirebase06";

export default class AulaFirebase06InformacaoUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = { uid: "", lista: [], addItemTxt: "" };

        fire(firebase, this);
    }

    render() {
        const { viewAula06 } = styles;

        return (
            <View style={viewAula06}>
                <InformacoesUsuario
                    this={this}
                    objeto={this.props.navigation.getParam("objeto")}
                    email={this.props.navigation.getParam("email")}
                    senha={this.props.navigation.getParam("senha")}
                    navigation={this.props.navigation}
                />
            </View>
        );
    }
}
