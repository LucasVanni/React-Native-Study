import React, { Component } from "react";

import { View } from "react-native";

import { styles } from "../styles/stylesAulaFirebase06";

import TelaLogar from "../components/TelaLogar";

export default class AulaFirebase06Logar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uid: "",
            lista: [],
            addItemTxt: "",
            email: "",
            senha: "",
        };
    }

    render() {
        const { viewAula06 } = styles;

        return (
            <View style={viewAula06}>
                <TelaLogar this={this} navigation={this.props.navigation} />
            </View>
        );
    }
}
