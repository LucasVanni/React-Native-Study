import React, { Component } from "react";

import { View, FlatList, Text } from "react-native";

import { styles } from "../styles/stylesAulaFirebase09";

import ListaTarefas from "../components/ListaTarefas.js";

import AddArea from "../components/AddArea";

import { recebendoDados } from "../functions/functionsAulaFirebase09";

import NetInfo from "@react-native-community/netinfo";
import { AsyncStorage } from "@react-native-community/async-storage";

export default class Aula09OFF extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tarefas: [],
            carregando: true,
            input: "",
            netStatus: 0,
        };

        this.url = "https://b7web.com.br/todo/39684";

        recebendoDados(AsyncStorage, NetInfo, this);
    }

    render() {
        const { viewPrincipal, carregando, txtCarregando, flatList } = styles;

        if (this.state.carregando) {
            return (
                <View style={carregando}>
                    <Text style={txtCarregando}>Loading...</Text>
                </View>
            );
        } else {
            return (
                <View style={viewPrincipal}>
                    <AddArea objeto={this} AsyncStorage={AsyncStorage} />
                    <View style={flatList}>
                        <FlatList
                            data={this.state.tarefas}
                            renderItem={({ item }) => (
                                <ListaTarefas
                                    AsyncStorage={AsyncStorage}
                                    data={item}
                                    objeto={this}
                                    url={this.url}
                                />
                            )}
                            keyExtractor={(item, index) => item.id}
                        />
                    </View>
                    <View
                        style={{
                            height: 50,
                            alignItems: "center",
                            backgroundColor: "#EEE",
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            {this.state.netStatus}
                        </Text>
                    </View>
                </View>
            );
        }
    }
}
