import React, {Component} from 'react';

import {View, Text, Platform} from 'react-native';

import {styles} from '../styles/stylesAula10.js';

export default class Aula10 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            plataforma: Platform.OS,
            versao: Platform.Version
        };
    }

    render() {

        const {viewAula10, txtPlat, txtPlat2} = styles;

        return (
            <View style={viewAula10}>
                {/*
          Para recuperar a informação de qual sistema o
          usuário está utilizando
        */}
                <Text style={txtPlat}>Sistema: {this.state.plataforma}
                </Text>
                {/*
          Para recuperar a versão do sistema que está sendo
          utilizada pelo usuário
        */}
                <Text style={txtPlat2}>Versão: {this.state.versao}</Text>
            </View>
        );
    }
}
