import React, {Component} from 'react';

import {View} from 'react-native';

import {styles} from '../styles/stylesAulaFirebase04';

export default class Autenticacao extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {viewAutenticacao} = styles;

    return <View style={viewAutenticacao} />;
  }
}
