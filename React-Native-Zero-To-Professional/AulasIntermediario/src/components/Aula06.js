import React, {Component} from 'react';

import {View, Text} from 'react-native';

import Slider from '@react-native-community/slider'

import {styles} from '../styles/stylesAula06.js';

import {mudandoValor} from '../functions/functionsAula06.js';

export default class Aula05 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valorSlider: 50
        };
    }

    render() {

        const {viewAula06, txtSlider} = styles;

        return (
            <View style={viewAula06}>
                <Slider
                    value={this.state.valorSlider}
                    onValueChange={(valor) => mudandoValor(valor, this)}
                    minimumValue={0}
                    maximumValue={100}
                    thumbTintColor={'#db3b1b'}
                    minimumTrackTintColor={'#db3b1b'}
                    maximumTrackTintColor={'#00e0ff'}/>
                <Text style={txtSlider}>{this.state.valorSlider}%</Text>
            </View>
        )
    }
}
