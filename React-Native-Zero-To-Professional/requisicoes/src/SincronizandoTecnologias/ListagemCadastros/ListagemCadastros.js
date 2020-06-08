import React, {Component} from 'react';

import {View, FlatList} from 'react-native';

import {styles} from './styles.js';
import ListagemFlatContatos from '../Components/ListagemFlatContatos.js';

export default class ListagemCadastros extends Component {
  render() {
    const {view} = styles;

    return (
      <View style={view}>
        <FlatList
          data={this.props.objeto.state.lista}
          renderItem={({item}) => <ListagemFlatContatos data={item} />}
        />
      </View>
    );
  }
}
