import React, {Component} from 'react';

import {View, Switch, Text} from 'react-native';

import {styles} from '../styles/stylesAula05.js';

import {mudandoValor} from '../functions/functionsAula05.js';

export default class Aula05 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valorSwitch: false
        };
    }

    render() {

        const {viewAula05} = styles;

        return (
            <View style={viewAula05}>
                <Switch // Muda a cor da bolinha
                    thumbColor='#6c3bba' // Muda a cor interna do Switch
                    trackColor={{
                    false: '#6c3bba',
                    true: '#fa0000'
                }} // Valor que será modificado entre true e false
                    value={this.state.valorSwitch} // Enviado o valor atual para a função 'mudandoValor'
                    onValueChange={(valor) => mudandoValor(valor, this)}/>
                <Text>{(this.state.valorSwitch
                        ? "Selecionado"
                        : "Não Selecionado")}</Text>
            </View>
        )
    }
}
