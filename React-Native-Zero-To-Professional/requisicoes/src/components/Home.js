import React, {Component} from 'react';

import {View, Text} from 'react-native';

import {styles} from '../styles/stylesAulaFirebase08';

import firebase from '../apikey';

import {verificadorUsuarioLogado} from '../functions/functionsAulaFirebase08';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {nome: this.props.navigation.state.params.nome};
  }
  render() {
    const {viewAula08} = styles;

    return (
      <View style={viewAula08}>
        <Text>Olá, {this.state.nome}</Text>
      </View>
    );
  }
}
