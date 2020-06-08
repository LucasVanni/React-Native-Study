import React, {Component} from 'react';

import {View, Text, TextInput, Button} from 'react-native';

import {styles} from './styles.js';

import {cadastrar} from './functions';

import firebase from '../FirebaseConnection';

export default class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {email: '', senha: ''};

    firebase.auth().signOut();
  }
  render() {
    const {view, input} = styles;
    return (
      <View style={view}>
        <Text>E-mail:</Text>
        <TextInput
          style={input}
          onChangeText={email => this.setState({email})}
        />
        <Text>Senha:</Text>
        <TextInput
          secureTextEntry={true}
          style={input}
          onChangeText={senha => this.setState({senha})}
        />

        <Button title="Cadastrar" onPress={() => cadastrar(this, firebase)} />
      </View>
    );
  }
}
