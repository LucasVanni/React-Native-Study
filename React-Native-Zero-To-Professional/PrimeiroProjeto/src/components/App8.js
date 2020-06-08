import React, { Component } from 'react';

import { View } from 'react-native';

import { styles } from '../styles/styles.js';

export default class OitavaAula extends Component {

  render() {

    const { viewPrincipalApp8, viewQuadrado, viewQuadrado2, viewQuadrado3 } = styles;

    return(
      <View style={viewPrincipalApp8}>
        <View style={viewQuadrado} />
        <View style={viewQuadrado2} />
        <View style={viewQuadrado3} />
      </View>
    );
  }
}
