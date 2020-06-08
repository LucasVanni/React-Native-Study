import React, { Component } from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

import { AjustarLayout } from '../functions/functions.js';

import { styles } from '../styles/styles.js';

export default class Rodape extends Component {

  render() {

    const { viewBotao, botao, txtBotao } = styles;

    return(
      <View style={viewBotao}>
        <TouchableOpacity
          style={botao}
          onPress={() => AjustarLayout(this.props.this)}
        >
          <Text style={txtBotao}>Tomou mais 100 ML</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
