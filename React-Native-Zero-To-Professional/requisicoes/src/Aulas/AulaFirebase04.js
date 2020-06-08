import React, { Component } from "react";

import { View } from "react-native";

import { styles } from "../styles/stylesAulaFirebase04";

import TelaCadastro from "../components/TelaCadastro";
import TelaLogar from "../components/TelaLogar";

/*
  Como funciona a autenticação do firebase?

  Temos dois serviços separados o database e o autentication...

  Se quero fazer um sistema de login --> Usar o autentication, pois é com ele que conseguimos fazer o login de forma fácil, rápida e tranquila, tanto o cadastro, quato o login...

  Só que as informações extras do usuário devem ser armazenadas em database
*/

export default class AulaFirebase04 extends Component {
  render() {
    const { viewAula04 } = styles;

    return (
      <View style={viewAula04}>
        <TelaCadastro />
      </View>
    );
  }
}
