import React, {Component} from 'react';

import {View, Text} from 'react-native';

import {styles} from '../styles/styles.js';

export default class CabecalhoAula01 extends Component {

    render() {

        const {ViewCabecalho, txtCabecalho} = styles;

        return (
            <View style={ViewCabecalho}>
                <Text style={txtCabecalho}>Aula01 -> Completa</Text>
            </View>
        );

    }
}