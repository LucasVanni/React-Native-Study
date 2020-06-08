import React, {Component} from 'react';

import {View} from 'react-native';

import CSlider from './CSlider.js';

import {styles} from '../styles/stylesAula06.js';

import {mudandoValorR, mudandoValorB, mudandoValorG} from '../functions/functionsAula06.js';

export default class Aula05 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valorR: 0,
            valorG: 0,
            valorB: 0
        };
    }

    render() {

        const {viewAula06, sliders, viewQuadrado, quadrado} = styles;

        return (
            <View style={viewAula06}>
                <View style={sliders}>
                    <CSlider
                        funcSlider={mudandoValorR}
                        this={this}
                        valorInicial={127}
                        txtSlider={'Red'}
                        ballColor={'#db3b1b'}
                        colorMin={'#db3b1b'}
                        colorMax={'#fff'}
                        valorMinimo={0}
                        valorMaximo={255}/>
                    <CSlider
                        funcSlider={mudandoValorB}
                        this={this}
                        valorInicial={127}
                        txtSlider={'Blue'}
                        ballColor={'#0000ff'}
                        colorMin={'#0000ff'}
                        colorMax={'#fff'}
                        valorMinimo={0}
                        valorMaximo={255}/>
                    <CSlider
                        funcSlider={mudandoValorG}
                        this={this}
                        valorInicial={127}
                        txtSlider={'Green'}
                        ballColor={'#00ff00'}
                        colorMin={'#00ff00'}
                        colorMax={'#fff'}
                        valorMinimo={0}
                        valorMaximo={255}/>
                </View>

                <View style={viewQuadrado}>

                    <View
                        style={[
                        quadrado, {
                            backgroundColor: `rgb(${this.state.valorR}, ${this.state.valorG}, ${this.state.valorB})`
                        }
                    ]}></View>

                </View>

            </View>
        );
    }
}
