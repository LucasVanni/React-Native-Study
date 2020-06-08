import React, { Component } from 'react';

import { View, Image, Text } from 'react-native';

import { styles } from '../styles/styles.js';

export default class Interior extends Component {

  render() {

    //const caminho2 = {uri: `https://brasil.elpais.com/resizer/_XN0gekHMy507d5LQajrzEpXnBU=/1000x0/smart/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/CJNYCB45H4GE56DH5YB3AV7BX4.jpg`};

    const caminho = require('../images/ImagemMeme.jpg');

    const { viewInterior, imagem, TextoMemeCima, TextoMemeBaixo, TextoMeme} = styles;

    return(
      <View style={viewInterior}>

        <Text style={[TextoMeme, TextoMemeCima]}>{this.props.this.state.texto.toUpperCase()} </Text>

        <Image source={caminho} style={imagem} />

        {/*
          <Image source={caminho2} style={imagem} />
        */}

        <Text style={[TextoMeme, TextoMemeBaixo]}>{this.props.this.state.segundoTexto.toUpperCase()} </Text>
      </View>
    );
  }
}
