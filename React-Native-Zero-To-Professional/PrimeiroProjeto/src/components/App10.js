import React, { Component } from 'react';

import { View, Button, Text, TextInput } from 'react-native';

import { styles } from '../styles/styles.js';

import { aoMudar, aoClicar } from '../functions/mudarTextoAoClicarNoBotao.js';

export default class DecimaAula extends Component {

  constructor(props) {
    super(props);

    this.state = {nome: '', nomeCompleto: '', nomesAleatorios: ''};
  }

  render() {

    const { viewPrincipalApp10, inputNome, txtNomeState, txtNome, txtNomeAdivinhadosState } = styles;

    return(
      <View style={viewPrincipalApp10}>

        <Text style={txtNome}> Digite abaixo seu nome... </Text>

        <TextInput
          style={inputNome}
          onChangeText={ (nome) => aoMudar(this, nome) }
        />


        {/*
          Elemento Botão, no caso de seu layaut
          será o padrão definido pelo sistema...
        */}
        <Button
          // Texto que aparecerá no botão
          title="Clique aqui"
          /*
          Ao pressionar o botão
          tem que conter uma ação
          a ser executada, no caso
          a função aoClicar é executada.
          */
          onPress={ () => aoClicar(this) }

          // É definida a cor do botão
          color="#df0835"

        />

        <Text style={txtNomeState}> {this.state.nomeCompleto} </Text>
        <Text style={txtNomeAdivinhadosState}> {this.state.nomesAleatorios} </Text>
      </View>
    );
  }
}
