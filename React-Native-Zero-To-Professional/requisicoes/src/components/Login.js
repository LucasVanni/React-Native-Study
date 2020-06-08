import React, { Component } from "react";

import { View, TextInput, Text, Button } from "react-native";

import { styles } from "../styles/stylesAulaFirebase08";

import { logout, addAuthListener, loginEP, getUserInfo } from "../Sistema";

import {
    emailDigitado,
    senhaDigitada,
    logar2,
} from "../functions/functionsAulaFirebase08";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = { email: "", senha: "" };

        logout();
    }

    render() {
        const { viewLogin, txtEmailSenha, input } = styles;

        return (
            <View style={viewLogin}>
                <Text style={txtEmailSenha}>E-mail</Text>
                <TextInput
                    onChangeText={texto => emailDigitado(texto, this)}
                    style={input}
                />
                <Text style={txtEmailSenha}>Senha</Text>
                <TextInput
                    onChangeText={texto => senhaDigitada(texto, this)}
                    style={input}
                />
                <Button
                    title={"Logar"}
                    onPress={() =>
                        logar2(
                            addAuthListener,
                            loginEP,
                            this,
                            getUserInfo,
                            "Home",
                            "nome",
                            "nome",
                        )
                    }
                />
            </View>
        );
    }
}
