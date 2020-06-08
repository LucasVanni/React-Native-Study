import React, { Component } from 'react';

import { View } from 'react-native';

import { styles } from '../styles/styles.js';

export default class SetimaAula extends Component {

  render() {

    const { view1App7, view2App7, view3App7, viewFlex } = styles;

    return(
        <View style={viewFlex} >
          {/*
              <View>

                <Text> Este é um texto qualquer </Text>

              </View>
          */}
            <View style={view1App7} />

            <View style={view2App7} />

            <View style={view3App7} />

          </View>
    );
  }
}
