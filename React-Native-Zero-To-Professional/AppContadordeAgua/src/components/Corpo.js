import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { styles } from '../styles/styles.js';

export default class Corpo extends Component {

  render() {

    const {
      viewPrincipalCorpo,
      viewTitulos,
      viewTitulosQnt,
      txtQnt,
      viewTitulosMD,
      txtMD,
      viewInformacoes,
      viewInfomacaoQnt,
      viewInfomacaoMD,
      texto,
      txtTituloStatus,
      viewTituloStatus,
      viewPorcentagem,
      viewInfomacaoStatus,
      txtPorcentagem
    } = styles;

    return(
      <View style={viewPrincipalCorpo}>

        <View style={viewTitulos}>

          <View style={viewTitulosQnt}>
            <Text style={txtQnt}>Consumido</Text>
          </View>

          <View style={viewTitulosMD}>
            <Text style={txtMD}>Meta Diária</Text>
          </View>
          <View style={viewTituloStatus}>
            <Text style={txtTituloStatus}>Status</Text>
          </View>

        </View>

        <View style={viewInformacoes}>

          <View style={viewInfomacaoQnt}>
            <Text style={texto} >{this.props.this.state.quantidadeConsumida} ML</Text>
          </View>

          <View style={viewInfomacaoMD}>
            <Text style={texto}>{this.props.this.state.metaDiaria} ML</Text>
          </View>

          <View style={viewInfomacaoStatus}>
            <Text style={texto}>{this.props.this.state.status}</Text>
          </View>

        </View>

        <View style={viewPorcentagem}>
          <Text style={txtPorcentagem}>{this.props.this.state.porcentagem}%</Text>
        </View>

      </View>
    );
  }
}
