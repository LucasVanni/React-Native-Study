import React, {Component} from 'react';

import {View, TouchableOpacity, Text, TextInput, FlatList} from 'react-native';

import {styles} from '../styles/stylesAulaFirebase06';

import {
  textInputFunc,
  add,
  deslogar,
  mudarDados,
} from '../functions/functionsAulaFirebase06';

import ItemRender from './ItemRender';

import firebase from 'firebase';

export default class InformacoesUsuario extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      viewInfo,
      txtTitulo,
      input,
      viewBtn,
      touch,
      txtTO,
      addArea,
      AddConteudo,

      toBtnTelaLogin,
      txtBtnLogin,
    } = styles;

    return (
      <View style={viewInfo}>
        <View style={AddConteudo}>
          <Text style={txtTitulo}>Adicionar um item:</Text>
          <TextInput
            value={this.props.this.state.addItemTxt}
            style={input}
            onChangeText={item => textInputFunc(item, this)}
          />
          <View style={viewBtn}>
            <TouchableOpacity
              onPress={() =>
                add(
                  this.props.this.state.uid,
                  this.props.this.state.addItemTxt,
                  firebase,
                )
              }
              style={touch}>
              <Text style={txtTO}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={addArea}>
          <FlatList
            data={this.props.this.state.lista}
            renderItem={({item}) => <Text> -> {item.titulo}</Text>}
          />
        </View>
        <TouchableOpacity
          style={toBtnTelaLogin}
          onPress={() => deslogar(this, firebase)}>
          <Text style={txtBtnLogin}>Deslogar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={toBtnTelaLogin}
          onPress={() =>
            mudarDados(
              this,
              this.props.objeto,
              this.props.email,
              this.props.senha,
            )
          }>
          <Text style={txtBtnLogin}>Alterar senha</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
