import React, {Component} from 'react';

import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import {styles} from './styles.js';

import firebase from '../FirebaseConnection';

import {cadastrar, entrar} from './functions.js';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saldoAcumulado: 0,
    };
  }
  componentWillMount() {
    firebase
      .database()
      .ref('users')
      .on('value', snapshot => {
        snapshot.forEach(user => {
          let state = this.state;
          state.saldoAcumulado += parseFloat(user.val().saldo);
          this.setState(state);
        });
      });
  }

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
          <View>
            <Text>
              Nós estamos administrando atualmente: R${' '}
              {parseFloat(this.state.saldoAcumulado).toFixed(2)}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
