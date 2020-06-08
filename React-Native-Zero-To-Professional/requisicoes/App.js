import React, {Component} from 'react';

import {View} from 'react-native';

import {styles} from './src/styles/stylesApp.js';
/*
import Aula0102 from "./src/Aula0102";
import Aula03040506 from "./src/Aula03040506";
import AulaFirebase from "./src/Aulas/AulaFirebase";
import AulaFirebase02 from "./src/Aulas/AulaFirebase02";
import AulaFirebase03 from "./src/Aulas/AulaFirebase03";
import AulaFirebase04 from "./src/Aulas/AulaFirebase04";
import AulaFirebase05 from "./src/Aulas/AulaFirebase05";
import AulaFirebase06 from "./src/Aulas/AulaFirebase06";
import AulaFirebase07Navigator from "./src/Aulas/AulaFirebase06Navigator.js";
import AulaFirebase08 from "./src/Aulas/AulaFirebase08";
import AulaFirebase09OFF from "./src/Aulas/AulaFirebase09OFF";
import Aula01 from "./src/Aulas/FirebaseStorage/Aula01";
import Aula02 from "./src/Aulas/FirebaseStorage/Aula02";
import Aula04 from "./src/Aulas/FirebaseStorage/Aula04";
import Aula05 from "./src/Aulas/FirebaseStorage/Aula05.js";
import Aula06_SicronizarTenologias from './src/SincronizandoTecnologias/Aula06';
import Ordenacao from './src/OrdenarInfo/ordenacao.js';

import FiltrandoDados from './src/FiltrandoDados/filtrandoDados';

*/

import OutrosTiposFiltragem from './src/OutrosTiposFiltragem/outrosTiposFiltragem';

export default class App extends Component {
  render() {
    const {viewAPP} = styles;

    return (
      <View style={viewAPP}>
        {/*
                <AulaFirebase />
                <AulaFirebase02 />
                <AulaFirebase03 />
                <AulaFirebase04 />
                <AulaFirebase05 />
                <AulaFirebase06 />
                <AulaFirebase07Navigator />
                <AulaFirebase08 />
                <AulaFirebase09OFF />
                <Aula01 />
                <Aula02 />
                <Aula04 />
                <Aula05 />
        <Aula06_SicronizarTenologias />
        <Ordenacao />
        <FiltrandoDados />

                */}
        <OutrosTiposFiltragem />
      </View>
    );
  }
}
