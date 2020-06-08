import React, {Component} from 'react';

import {ImageBackground, StatusBar, View, Text} from 'react-native';

import {styles} from './styles.js';

import firebase from '../../FirebaseConnection';

export default class Preload extends Component {
  constructor(props) {
    super(props);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('Interna');
      } else {
        this.props.navigation.navigate('Home');
      }
    });
  }
  render() {
    const {view, viewTitulo, titulo} = styles;

    const fundo = require('../../Image/fundo.jpg');

    return (
      <ImageBackground source={fundo} style={view}>
        <StatusBar backgroundColor="#fff000" barStyle="dark-content" />
        <View style={viewTitulo}>
          <Text style={titulo}>FLUXO DE CAIXA v1.0</Text>
        </View>
      </ImageBackground>
    );
  }
}
