import React, { Component } from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "../styles/stylesTelaCadstro";

import firebase from "../apikey";

import {
    receberNome,
    receberEmail,
    receberSenha,
    cadastrar,
} from "../functions/functionsAulaFirebase06";

export default class TelaCadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            email: "",
            senha: "",
        };

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // uid --> Referência o usuário cadastrado no banco de dados...
                firebase
                    .database()
                    .ref("usuarios")
                    .child(user.uid)
                    .set({
                        nome: this.state.nome,
                    });
            }
        });
    }

    render() {
        const {
            viewTelaCadastro,
            txtTitulo,
            input,
            viewEmailGeral,
            viewSenhaGeral,
            viewTxtCadastro,
            viewTxtInputCadastro,
            viewTxtInputSenha,
            viewTxtSenha,
            viewNomeGeral,
            viewTxtNome,
            viewTxtInputNome,
            viewBotaoGeral,
            toBtnTelaCadastro,
            txtBtnCadastro,
        } = styles;

        return (
            <View style={viewTelaCadastro}>
                <View style={viewEmailGeral}>
                    <View style={viewTxtCadastro}>
                        <Text style={txtTitulo}>E-mail:</Text>
                    </View>

                    <View style={viewTxtInputCadastro}>
                        <TextInput
                            autoCapitalize={"none"}
                            autoCorrect={false}
                            style={input}
                            onChangeText={email => receberEmail(email, this)}
                        />
                    </View>
                </View>

                <View style={viewSenhaGeral}>
                    <View style={viewTxtSenha}>
                        <Text style={txtTitulo}>Senha:</Text>
                    </View>
                    <View style={viewTxtInputSenha}>
                        <TextInput
                            //Toda entrada de texto será segura...
                            secureTextEntry={true}
                            style={input}
                            onChangeText={senha => receberSenha(senha, this)}
                        />
                    </View>
                </View>

                <View style={viewNomeGeral}>
                    <View style={viewTxtNome}>
                        <Text style={txtTitulo}>Nome:</Text>
                    </View>
                    <View style={viewTxtInputNome}>
                        <TextInput
                            style={input}
                            onChangeText={nome => receberNome(nome, this)}
                        />
                    </View>
                </View>

                <View style={viewBotaoGeral}>
                    <TouchableOpacity
                        style={toBtnTelaCadastro}
                        onPress={() => cadastrar(this, firebase)}
                    >
                        <Text style={txtBtnCadastro}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
