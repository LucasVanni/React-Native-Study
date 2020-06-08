/**
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {View, Text} from 'react-native';

import {styles} from '../styles/stylesAula04.js';

export default class CabecalhoAula04 extends Component {

    render() {

        const {viewCabecalhoAula04, textoCabecalhoAula04} = styles;

        return (
            <View style={viewCabecalhoAula04}>
                <Text style={textoCabecalhoAula04}>Autopeças Vanni</Text>
            </View>
        );
    }
}
