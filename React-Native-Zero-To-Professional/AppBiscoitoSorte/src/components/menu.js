import React, {Component} from 'react';

import {View, Text} from 'react-native';

import {styles} from '../styles/styles.js';

export default class Menu extends Component {

    render() {

        const {viewPrincipalMenu, textoMenu} = styles;

        return (
            <View style={viewPrincipalMenu}>
                <Text style={textoMenu}>BISCOITO DA SORTE 2.0</Text>
            </View>
        );
    }
}
