import React, { Component } from 'react';

import {ImageBackground } from 'react-native';

import Menu from './src/components/Menu.js';

import Corpo from './src/components/Corpo.js';

import Rodape from './src/components/Rodape.js';

import { getItem } from './src/functions/functions.js';

import { styles } from './src/styles/styles.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {metaDiaria: 2000, quantidadeConsumida: 0, status: 'Ruim', porcentagem: 0};

    getItem(this);

  }

  render() {

    const caminho = require('./src/images/waterbg.png');

    const { imagemFundo } = styles;

    return(
        <ImageBackground source={caminho} style={imagemFundo}>
          <Menu this={this} />
          <Corpo this={this} />
          <Rodape this={this} />
        </ImageBackground>
    );
  }
}
