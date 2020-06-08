import React, {Component} from 'react';

import {View, Text, TextInput, Button} from 'react-native';

import {styles} from './styles';

import {retirar} from './functions';

import firebase from '../../FirebaseConnection';

export default class AddDespesa extends Component {
  constructor(props) {
    super(props);

    this.state = {valor: ''};
  }
  render() {
    const {view, input} = styles;
    return (
      <View style={view}>
        <Text>Quanto você quer retirar? </Text>
        <TextInput
          style={input}
          keyboardType="numeric"
          value={this.state.valor}
          autoFocus={true}
          onChangeText={valor => this.setState({valor})}
        />
        <Button title="retirar" onPress={() => retirar(this, firebase)} />
      </View>
    );
  }
}
