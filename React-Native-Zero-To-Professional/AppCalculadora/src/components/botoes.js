import React, { Component } from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { styles } from '../styles/styles.js';

import { gerenciarNumeros } from '../functions/functions.js';



export default class Botoes extends Component {


  render() {
    const {toBotoesNumeros, txtBotoes} = styles;

    const cor = this.props.cor;

    return(
        <TouchableOpacity
          style={toBotoesNumeros}
          onPress={() => gerenciarNumeros(this.props.this, this.props.numero, this.props.sinal, this.props.numeroAnt)}
        >
          <Text style={[txtBotoes, {color : cor} ]}>{this.props.numero}</Text>
        </TouchableOpacity>
    );
  }
}
