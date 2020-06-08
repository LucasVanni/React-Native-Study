import React, { Component } from "react";

import { View, Text, TextInput, TouchableHighlight } from "react-native";

import { styles } from "../styles/stylesAulaFire07";

import firebase from "../apikey.js";

import {
    redefinirSenha,
    receberNovaSenha,
} from "../functions/functionsAulaFirebase07";

export default class MudarDados extends Component {
    render() {
        const {
            viewMudarDados,
            input,
            textTodosTitulos,
            btn,
            viewGeral,
            viewBotao,
            txtbtn,
        } = styles;

        return (
            <View style={viewMudarDados}>
                <View style={viewGeral}>
                    <Text style={textTodosTitulos}>E-Mail:</Text>
                    <Text style={input}>{this.props.email}</Text>
                </View>
                <View style={viewGeral}>
                    <Text style={textTodosTitulos}>Senha Antiga:</Text>
                    <Text style={input}> {this.props.senha} </Text>
                </View>
                <View style={viewGeral}>
                    <Text style={textTodosTitulos}>Nova Senha:</Text>
                    <TextInput
                        style={input}
                        onChangeText={newPassword =>
                            receberNovaSenha(
                                newPassword,
                                this.props.thisPrincipal,
                            )
                        }
                    />
                </View>
                <View style={viewBotao}>
                    <TouchableHighlight
                        underlayColor="#ccc"
                        style={btn}
                        onPress={() =>
                            redefinirSenha(
                                this.props.thisPrincipal,
                                this.props.navigation,
                                firebase,
                            )
                        }
                    >
                        <Text style={txtbtn}>Redefinir Senha</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
