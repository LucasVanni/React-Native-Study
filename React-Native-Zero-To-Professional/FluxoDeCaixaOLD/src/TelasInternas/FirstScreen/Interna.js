import React, {Component} from 'react';

import {View, Text, FlatList, Button} from 'react-native';

import {styles} from './styles';

import {addReceita, addDespesa, sair} from './functions';

import HistoricoItem from './HistoricoItem';

import firebase from '../../FirebaseConnection';

export default class Interna extends Component {
  constructor(props) {
    super(props);

    this.state = {saldo: 0, historico: []};

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref('users')
          .child(user.uid)
          .on('value', snapshot => {
            let state = this.state;
            state.saldo = snapshot.val().saldo;
            //state.historico = snapshot.forEach();
            this.setState(state);
          });
      } else {
        this.props.navigation.navigate('Home');
      }
    });
  }
  render() {
    const {view, saldoArea, saldo, historico, botoesArea} = styles;
    return (
      <View style={view}>
        <View style={saldoArea}>
          <Text style={saldo}>Saldo: R$ {this.state.saldo.toFixed(2)}</Text>
        </View>
        <FlatList
          style={historico}
          data={this.state.historico}
          renderItem={item => <HistoricoItem data={item} />}
        />
        <View style={botoesArea}>
          <Button title="+ Receita" onPress={() => addReceita(this)} />
          <Button title="+ Despesa" onPress={() => addDespesa(this)} />
          <Button title="Sair" onPress={() => sair(firebase)} />
        </View>
      </View>
    );
  }
}
