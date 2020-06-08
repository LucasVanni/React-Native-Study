import React, { Component } from "react";

import { View } from "react-native";

import Formulario from "./Formulario/Formulario.js";
import ListagemCadastros from "./ListagemCadastros/ListagemCadastros.js";
import { styles } from "./styles/styles.js";

import firebase from "../apikey";

export default class Aula06 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formAvatar: null,
            formNome: "",
            formEmail: "",
            formSenha: "",
            formPct: "",
            userUid: 0,
            lista: [],
        };

        firebase.auth().signOut();

        firebase
            .database()
            .ref("Users")
            .on("value", snapshot => {
                let state = this.state;
                state.lista = [];

                snapshot.forEach(child => {
                    state.lista.push({
                        key: child.key,
                        name: child.val().name,
                        email: child.val().email,
                    });
                });

                this.setState(state);
            });
    }
    render() {
        const { view } = styles;

        return (
            <View style={view}>
                <Formulario objeto={this} />
                <ListagemCadastros objeto={this} />
            </View>
        );
    }
}
