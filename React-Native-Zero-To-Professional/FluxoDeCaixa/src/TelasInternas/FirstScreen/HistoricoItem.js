import React, {Component} from 'react';

import {View, Text} from 'react-native';

import {styles} from './styles.js';

export default class HistoricoItem extends Component {
  constructor(props) {
    super(props);

    let bg;

    if (this.props.data.type == 'despesa') {
      bg = '#FF0000';
    } else {
      bg = '#00FF00';
    }

    this.state = {
      bg,
    };
  }

  render() {
    const {viewArea, textTitulo, textValor} = styles;

    return (
      <View style={[viewArea, {backgroundColor: this.state.bg}]}>
        <Text style={textTitulo}>
          {this.props.data.type.replace('r', 'R').replace('d', 'D')}
        </Text>
        <Text style={textValor}>
          R$ {parseFloat(this.props.data.valor).toFixed(2)}
        </Text>
      </View>
    );
  }
}
