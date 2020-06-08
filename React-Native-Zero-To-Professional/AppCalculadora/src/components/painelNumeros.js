import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { styles } from '../styles/styles.js';

export default class PainelNumeros extends Component {

  render() {

    const { painelNumeros, digitoCALC } = styles;

    return(
      <View style={painelNumeros}>
        <Text style={digitoCALC}>{this.props.this.state.resultado}</Text>
      </View>
    );
  }
}
