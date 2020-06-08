import React, { Component } from 'react';

import { View } from 'react-native';

import { styles } from './src/styles/styles.js';

import PainelNumeros from './src/components/painelNumeros.js';

import Botoes from './src/components/botoes.js';

import BotoesS from './src/components/botoesS.js';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {resultado: 0, numeroCompleto: ''};
  }

  render() {

    const { viewPrincipal, viewPainel, BotaoIgual, viewBotoesColuna1, ViewBotoesGeral, viewBotoesColuna2, viewBotoesColuna4, viewBotoesColuna3 } = styles;

    return(
      <View style={viewPrincipal}>
        <View style={viewPainel}>
          <PainelNumeros this={this} />
        </View>


        <View style={ViewBotoesGeral}>

          <View style={viewBotoesColuna1}>
            <Botoes this={this} numero={'C'} cor={'#ff8700'} />
            <Botoes this={this} numero={'7'} cor={'#E0E0E0'} />
            <Botoes this={this} numero={'4'} cor={'#E0E0E0'} />
            <Botoes this={this} numero={'1'} cor={'#E0E0E0'} />
            <Botoes this={this} numero={'n'} cor={'#ff8700'} />
          </View>

          <View style={viewBotoesColuna2}>
            <Botoes this={this} numero={'CC'} cor={'#ff8700'} />
            <Botoes this={this} numero={'8'} cor={'#E0E0E0'} />
            <Botoes this={this} numero={'5'} cor={'#E0E0E0'} />
            <Botoes this={this} numero={'2'} cor={'#E0E0E0'} />
            <Botoes this={this} numero={'0'} cor={'#E0E0E0'} />
          </View>

          <View style={viewBotoesColuna3}>
            <Botoes this={this} numero={'%'} cor={'#ff8700'} />
            <Botoes this={this} numero={'9'} cor={'#E0E0E0'} />
            <Botoes this={this} numero={'6'} cor={'#E0E0E0'} />
            <Botoes this={this} numero={'3'} cor={'#E0E0E0'} />
            <BotoesS this={this} numero={'.'} cor={'#E0E0E0'} />
          </View>

          <View style={viewBotoesColuna4}>
            <Botoes this={this} numero={' / '} cor={'#ff8700'} />
            <Botoes this={this} numero={' * '} cor={'#E0E0E0'} />
            <Botoes this={this} numero={' - '} cor={'#E0E0E0'} />
            <Botoes this={this} numero={' + '} cor={'#E0E0E0'} />
            <View style={BotaoIgual}>
              <Botoes this={this} numero={'='} cor={'#fff'} />
            </View>

          </View>


        </View>

      </View>
    );
  }
}
