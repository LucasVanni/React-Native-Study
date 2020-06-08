import React, {Component} from 'react';

import {View, Image, Text} from 'react-native';

import {styles} from './styles.js';

import firebase from '../../apikey';

export default class ListagemFlatContatos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: this.props.data.key,
      name: this.props.data.name,
      email: this.props.data.email,
      avatar: null,
    };

    firebase
      .storage()
      .ref()
      .child(`users/${this.state.key}.jpg`)
      .getDownloadURL()
      .then(url => {
        let state = this.state;
        state.avatar = {uri: url};
        this.setState(state);
      })
      .catch(error => alert(error.code));
  }
  render() {
    const {itemArea, itemAvatar, itemInfo} = styles;

    return (
      <View style={itemArea}>
        <Image source={this.state.avatar} style={itemAvatar} />
        <View style={itemInfo}>
          <Text>{this.state.name}</Text>
          <Text>{this.state.email}</Text>
        </View>
      </View>
    );
  }
}
