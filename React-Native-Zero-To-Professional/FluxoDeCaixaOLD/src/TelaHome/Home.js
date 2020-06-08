import React, {Component} from 'react';

import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import {styles} from './styles.js';

import {cadastrar, entrar} from './functions.js';

export default class Home extends Component {
  render() {
    const {view, viewTitulo, titulo, areaBotao, botao, textoBotao} = styles;

    const fundo = require('../Image/fundo.jpg');

    return (
      <ImageBackground source={fundo} style={view}>
        <StatusBar backgroundColor="#fff000" barStyle="dark-content" />
        <View style={viewTitulo}>
          <Text style={titulo}>FLUXO DE CAIXA v1.0</Text>
          <View style={areaBotao}>
            <TouchableHighlight
              underlayColor="#FFF"
              style={botao}
              onPress={() => cadastrar(this)}>
              <Text style={textoBotao}>Cadastrar</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#FFF"
              style={botao}
              onPress={() => entrar(this)}>
              <Text style={textoBotao}>Entrar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
