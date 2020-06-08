import React, { Component } from 'react';

import { View, TextInput, Text} from 'react-native';

import { styles } from '../styles/styles.js';

import {mudarTexto} from '../functions/mudarTexto.js';

export default class NonaAula extends Component {

  constructor(props) {
    super(props);

    this.state = {texto: ''};
  }

  render() {

    const { viewPrincipalApp9, input, txtNome, textoResposta } = styles;

    return(
      <View style={viewPrincipalApp9}>

        <Text style={txtNome}> Qual seu nome? </Text>

        <TextInput
          style={input}
          onChangeText={ (nome) => {
            /*
              Envia o componente, e o valor que está sendo gerado pelo onChangeText
              como parâmetros para a função...
            */
            mudarTexto(this, nome);
          }}
          maxLength={20}
          placeholder='Digite aqui seu nome...'
        />

        {/*
          O texto contido em stateNome é passado para o componente
          Text, que irá exibí-lo na tela...
        */}
        <Text style={textoResposta}>{this.state.texto}</Text>

      </View>
    );
  }
}
