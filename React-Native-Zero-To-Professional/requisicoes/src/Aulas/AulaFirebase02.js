import React, { Component } from "react";

import { View, Text, TextInput, Button } from "react-native";

import { styles } from "../styles/stylesAulaFirebase02";

import firebase from "../apikey";

import {
    usuarioNome,
    usuarioIdade,
    inserirUsuario,
} from "../functions/functionsAulaFirebase02";

export default class AulaFirebase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomeInput: "",
            idadeInput: "",
        };

        // Para criar um novo nó no banco de dados com um valor...
        firebase
            .database()
            .ref("contagem")
            .set("90");

        //Se o nó já existir o firebase substitui o valor do nó pelo que está sendo setado no momento da execução do código, fazendo com que ele seja "alterado"

        // Da para acessar acessar o nó que está dentro de um outro nó pai, é possível de duas formas... Ou assim
        firebase
            .database()
            .ref("usuarios/contagem")
            .set("90");

        // Ou assim
        firebase
            .database()
            .ref("usuarios")
            .child("contagem")
            .set("15");

        //Substitui tudo o que estiver em usuários 2, por idade: 27
        firebase
            .database()
            .ref("Usuarios")
            .child(2)
            .set({
                idade: 27,
            });

        // Para alterar uma informação é preciso entrar no nó responsável pela informação

        firebase
            .database()
            .ref("Usuarios")
            .child(2)
            .child("idade")
            .set(25);

        // Para alterar o nome de alguém

        // Recebe o id específico do usuário (Key)
        let id = "-Llrv4gfj9TMtLVQlq98";

        // Altera a informação do nó filho "nome" de chave igual a '-Llrv4gfj9TMtLVQlq98'
        firebase
            .database()
            .ref("usuarios")
            .child(id)
            .child("nome")
            .set("Lucas");

        // Para alterar várias informações caso necessário...
        firebase
            .database()
            .ref("Usuarios")
            .child(2)
            .set({
                nome: "Lucas",
                idade: 22,
            });

        // Para remover um dado...
        firebase
            .database()
            .ref("Usuarios")
            .child(1)
            .remove();

        // Para remover um nó após o banco de dados...
        firebase
            .database()
            .ref("Usuarios")
            .remove();

        // Também é possível remover dados fazendo uma seleção direta do dado...
        firebase
            .database()
            .ref(`usuarios/${id}`)
            .remove();
    }

    render() {
        const { txtNome, txtInput, viewAula02 } = styles;

        return (
            <View style={viewAula02}>
                <Text style={txtNome}>Nome do usuário: </Text>
                <TextInput
                    style={txtInput}
                    onChangeText={nomeInput => this.setState({ nomeInput })}
                />
                <Text style={txtNome}> Idade do usuário: </Text>
                <TextInput
                    style={txtInput}
                    onChangeText={idadeInput => this.setState({ idadeInput })}
                />
                <Button
                    title="Inserir Dados"
                    onPress={() => inserirUsuario(this, firebase)}
                />
            </View>
        );
    }
}
