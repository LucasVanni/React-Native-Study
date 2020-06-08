import React, { Component } from 'react';

import { View, TextInput, Text } from 'react-native';

import { styles } from '../styles/styles.js';

import { textoMeme } from '../functions/functions.js';

export default class Interior extends Component {

  render() {

    const { viewMenu, textoNomeApp, dataInput} = styles;

    return(

      <View style={viewMenu}>
        <Text style={textoNomeApp}>Criador de Mimimi</Text>
        <TextInput
          style={dataInput}
          onChangeText={ (texto) => textoMeme(this.props.this, texto) }
          placeholder="Digite seu meme..."
          maxLength={57}
        />
      </View>
    );
  }
}
