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
    firebase
      .database()
      .ref('potenciais')
      .orderByChild('cavalos')
      .on('value', snapshot => {
        let state = this.state;
        state.lista = [];

        /*
          OrderByValue --> Ordena o nó pelos valores.
            Somente funciona com a estrutura do nó filho como chave: valor

          OrderByKey --> Ordena em ordem de chave registrada no banco.

          OrderByChild --> Ordena em ordem crescente (do menor para o maior) do filho...

          */

        snapshot.forEach(child => {
          state.lista.push({
            key: child.key,
            t: child.val().cavalos,
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
            return <Text> -> {`${item.key} - ${item.t} `} </Text>;
          }}
        />
      </View>
    );
  }
}
