import React, {Component} from 'react';

import {View, TouchableOpacity, Text} from 'react-native';

import {styles} from '../styles/styles.js';

import {gerarBiscoito} from '../functions/functions.js';

export default class Footer extends Component {

    render() {

        const {viewPrincipalFooter, botao, txtBotao} = styles;

        return (
            <View style={viewPrincipalFooter}>
                <TouchableOpacity style={botao} onPress={() => gerarBiscoito(this.props.this)}>
                    <Text style={txtBotao}>Gerar novo biscoito</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
