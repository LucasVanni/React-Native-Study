import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../styles/stylesAula03.js";

import {
    concluirTarefa,
    removerTarefa,
} from "../functions/functionsAulaFirebase09";

export default class ListaTarefas extends Component {
    constructor(props) {
        super(props);

        const { done, undone } = styles;

        this.state = {
            escolha: this.props.data.done == "1" ? done : undone,
        };
    }

    render() {
        const {
            textItemRecebido,
            viewItemRecebido,
            viewInternoListaTarefas,
            viewConcluirTarefa,
            toConcluirTarefa,
            viewRemovItem,
            toRemovItem,
            txtRemovDados,
            viewtxtRecebido,
        } = styles;
        return (
            <View style={viewItemRecebido}>
                <View style={viewInternoListaTarefas}>
                    <View style={viewConcluirTarefa}>
                        <TouchableOpacity
                            style={[toConcluirTarefa, this.state.escolha]}
                            onPress={() =>
                                concluirTarefa(this.props.AsyncStorage, this)
                            }
                        />
                    </View>
                    <View style={viewtxtRecebido}>
                        <Text style={textItemRecebido}>
                            {this.props.data.item}
                        </Text>
                    </View>
                    <View style={viewRemovItem}>
                        <TouchableOpacity
                            style={toRemovItem}
                            onPress={() =>
                                removerTarefa(this.props.AsyncStorage, this)
                            }
                        >
                            <Text style={txtRemovDados}>X</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
