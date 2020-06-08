import React, {Component} from 'react';

import {View, Text} from 'react-native';

import {styles} from '../styles/styles.js';

export default class Body extends Component {

    render() {

        const {viewPrincipalBody, textoBase} = styles;

        return (
            <View style={viewPrincipalBody}>
                <Text style={textoBase}>"{this.props.this.state.texto}"</Text>
            </View>
        );
    }
}
