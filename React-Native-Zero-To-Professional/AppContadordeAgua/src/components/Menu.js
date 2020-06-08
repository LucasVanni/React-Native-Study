import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { styles } from '../styles/styles.js';

export default class Corpo extends Component {

  render() {

    const { ViewPrincipalMenu, textoTitulo } = styles;

    return(
      <View style={ViewPrincipalMenu}>
        <Text style={textoTitulo} > Water Counter  </Text>
      </View>
    );
  }
}
