import React, {Component} from 'react';

import {View, TextInput, TouchableOpacity, Text} from 'react-native';

import {styles} from '../styles/stylesAula03.js';

import {
  adicionarItem,
  mudandoTexto,
  removerTarefa,
} from '../functions/functionsAulaFirebase09';

export default class AddArea extends Component {
  render() {
    const {
      viewAddArea,
      textInput,
      viewTxtInput,
      txtTextInput,
      viewBotao,
      toAddItem,
      txtInserirDados,
      areaBotoes,
    } = styles;

    return (
      <View style={viewAddArea}>
        <View style={viewTxtInput}>
          <Text style={txtTextInput}> INSERIR NOVA TAREFA: </Text>
          <TextInput
            style={textInput}
            onChangeText={txt => mudandoTexto(txt, this.props.objeto)}
            value={this.props.objeto.state.input}
          />
        </View>
        <View style={areaBotoes}>
          <View style={viewBotao}>
            <TouchableOpacity
              style={toAddItem}
              onPress={() =>
                adicionarItem(this.props.AsyncStorage, this.props.objeto)
              }>
              <Text style={txtInserirDados}>INSERIR TAREFA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={toAddItem}
              onPress={() =>
                sincronizarItem(this.props.AsyncStorage, this.props.objeto)
              }>
              <Text style={txtInserirDados}>Sincronizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
