import React, {Component} from 'react';

import {View, Text, Image, TextInput, Button} from 'react-native';

import {styles} from './styles.js';

import {cadastrar, inserirImagem} from './functions';

import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';

import firebase from '../../apikey';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

export default class Formulario extends Component {
  render() {
    const {view, form, formAvatar, formInfo, input, image} = styles;

    return (
      <View style={view}>
        <Text>Cadastre um novo usuário</Text>
        <View style={form}>
          <View style={image}>
            <Image
              source={this.props.objeto.state.formAvatar}
              style={formAvatar}
            />
            <Button
              title="Adicionar"
              onPress={() =>
                inserirImagem(this.props.objeto, ImagePicker, RNFetchBlob)
              }
            />
          </View>
          <View style={formInfo}>
            <TextInput
              style={input}
              placeholder="Digite seu nome"
              value={this.props.objeto.state.formNome}
              onChangeText={formNome => this.props.objeto.setState({formNome})}
            />
            <TextInput
              style={input}
              placeholder="Digite seu e-mail"
              value={this.props.objeto.state.formEmail}
              onChangeText={formEmail =>
                this.props.objeto.setState({formEmail})
              }
            />
            <TextInput
              style={input}
              placeholder="Digite sua senha"
              secureTextEntry={true}
              value={this.props.objeto.state.formSenha}
              onChangeText={formSenha =>
                this.props.objeto.setState({formSenha})
              }
            />
          </View>
        </View>
        <Button
          title="Cadastrar"
          onPress={() => cadastrar(this.props.objeto, firebase, RNFetchBlob)}
        />
      </View>
    );
  }
}
