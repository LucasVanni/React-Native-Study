import React, {Component} from 'react';

import {View, Text} from 'react-native';

import Slider from '@react-native-community/slider';

import {styles} from '../styles/stylesAula06.js';

export default class CSlider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valor: this.props.valorInicial
        };

    }

    render() {

        const {txtSlider} = styles;

        let funcaoSlider = this.props.funcSlider;

        return (
            <View >
                <Text style={txtSlider}>{this.props.txtSlider}</Text>
                <Slider
                    value={this.state.valor}
                    onValueChange={(valor) => funcaoSlider(valor, this, this.props.this)}
                    minimumValue={this.props.valorMinimo}
                    maximumValue={this.props.valorMaximo}
                    thumbTintColor={this.props.ballColor}
                    minimumTrackTintColor={this.props.colorMin}
                    maximumTrackTintColor={this.props.colorMax}/>
                <Text style={txtSlider}>{this.state.valor}%</Text>

            </View>
        );
    }
}
