import React, { Component } from "react";

import { View } from "react-native";

import { styles } from "../styles/stylesAulaFire07.js";

import MudarDados from "../components/MudaDados";

export default class Aula07 extends Component {
    render() {
        const { viewAula07 } = styles;

        return (
            <MudarDados
                navigation={this.props.navigation}
                thisPrincipal={this.props.navigation.getParam("thisPrincipal")}
                this={this.props.navigation.getParam("this")}
                email={this.props.navigation.getParam("email")}
                senha={this.props.navigation.getParam("senha")}
            />
        );
    }
}
