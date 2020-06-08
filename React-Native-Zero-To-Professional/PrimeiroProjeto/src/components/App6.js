import React, { Component } from "react";

import { View, Text } from "react-native";

import { styles } from "../styles/styles.js";

export default class SextaAula extends Component {
  render() {
    const { textoAzul, textoVermelho } = styles;

    return (
      <View>
        <Text style={textoAzul}>Esse é o texto 1</Text>
        <Text style={textoVermelho}>Esse é o texto 2</Text>
        {/*
            Primeiro pega as propriedades do textoAzul
            depois pega as do textoVermelho substituindo
            as que estão iguais do textoAzul pelos novos
            valores obtidos no textoVermelho.
            É implementado as propriedades que não estão
            no textoAzul e estão no textoVermelho.
            As que estão no textoAzul, que não estão no
            textoVermelho não são alteradas.
        */}
        <Text style={[textoAzul, textoVermelho]}>Esse é o texto 3</Text>
        {/*
          Primeiro pega as propriedades do textoVermelho
          depois pega as do textoAzul substituindo
          as que estão iguais do textoVermelho pelos novos
          valores obtidos no textoAzul.
          É implementado as propriedades que não estão
          no textoVermelho e estão no textoAzul.
          As que estão no textoVermelho, que não estão
          no textoAzul não são alteradas.
        */}
        <Text style={[textoVermelho, textoAzul]}>Esse é o texto 4</Text>
      </View>
    );
  }
}
