import React, { Component } from 'react';

import { View } from 'react-native';

import PrimeiraAula from './src/components/App1.js';

import SegundaAula from './src/components/App2.js';

import TerceiraAula from './src/components/App3.js';

import QuartaAula from './src/components/App4.js';

import QuintaAula from './src/components/App5.js';

import SextaAula from './src/components/App6.js';

import SetimaAula from './src/components/App7.js';

import OitavaAula from './src/components/App8.js';

import NonaAula from './src/components/App9.js';

import DecimaAula from './src/components/App10.js';

import {styles} from './src/styles/styles.js';

export default class PrimeiroProjeto extends Component {



  render() {

      const { viewPrincipal } = styles;

    return (
      <View style={viewPrincipal}>

        <PrimeiraAula />
        <SegundaAula />
        <TerceiraAula />
        <QuartaAula />
        <QuintaAula />
        <SextaAula />
        <SetimaAula />
        <OitavaAula />
        <NonaAula />
        <DecimaAula />

      </View>
    );
  }
}
