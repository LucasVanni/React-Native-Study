import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';

import {styles} from './styles.js';

import firebase from '../apikey';

export default class Ordenacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // states do projeto
      lista: [],
    };

    // Códigos firebase

    /* Só da para fazer o filtro se estiver ordenado

    startAt -> Filtra os valores menores e aparece somente os valores maiores que é passado como parâmetro

    firebase
      .database()
      .ref('precos')
      .orderByValue()
      .startAt(1000)
      .on('value', snapshot => {
        let state = this.state;
        state.lista = [];

        snapshot.forEach(child => {
          state.lista.push({
            key: child.key,
            t: child.val(),
          });
        });
        this.setState(state);
      });

      endAt -> Filtra os valores e mostra até o valor passado por parêmetro na função

      firebase
      .database()
      .ref('precos')
      .orderByValue()
      .endAt(3000)
      .on('value', snapshot => {
        let state = this.state;
        state.lista = [];

        snapshot.forEach(child => {
          state.lista.push({
            key: child.key,
            t: child.val(),
          });
        });
        this.setState(state);
      });


    */

    firebase
      .database()
      .ref('Users')
      .orderByChild('idade')
      .limitToFirst(2)
      .on('value', snapshot => {
        let state = this.state;
        state.lista = [];

        snapshot.forEach(child => {
          state.lista.push({
            key: child.key,
            nome: child.val().name,
            idade: child.val().idade,
          });
        });
        this.setState(state);
      });
  }

  render() {
    const {view, area} = styles;
    return (
      <View style={view}>
        <FlatList
          style={area}
          data={this.state.lista}
          renderItem={({item}) => {
            return <Text> -> {`${item.nome}, tem ${item.idade} anos `} </Text>;
          }}
        />
      </View>
    );
  }
}
