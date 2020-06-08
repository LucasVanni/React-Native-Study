import React, {Component} from 'react';

import { View } from 'react-native';

import Interior from './src/components/interior.js'

import Menu from './src/components/menu.js';

import { styles } from './src/styles/styles.js';

const { viewAppJSPrincipal } = styles;

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {texto: '', segundoTexto: ''};
  }
render(){
    return (
      <View style={viewAppJSPrincipal}>
          <Menu this={this} />
          <Interior this={this} />
      </View>
    );
  }
}
