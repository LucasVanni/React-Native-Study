import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight, Text, Button} from 'react-native';

import X from './src/X.js';
import O from './src/O.js';

export default class JogoDaVelha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 1,
      vez: 'x',
      aviso: '',
      a1: '',
      a2: '',
      a3: '',
      b1: '',
      b2: '',
      b3: '',
      c1: '',
      c2: '',
      c3: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.area}>
          <View style={[styles.velhaVertical, {borderLeftWidth: 0}]}>
            <TouchableHighlight
              underlayColor="#EEE"
              onPress={() => {
                clicou(this, 'a1');
              }}
              style={[styles.velhaHorizontal, {borderTopWidth: 0}]}>
              <View>
                {this.state.a1 == 'x' && <X />}
                {this.state.a1 == 'o' && <O />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#EEE"
              onPress={() => {
                clicou(this, 'a2');
              }}
              style={styles.velhaHorizontal}>
              <View>
                {this.state.a2 == 'x' && <X />}
                {this.state.a2 == 'o' && <O />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#EEE"
              onPress={() => {
                clicou(this, 'a3');
              }}
              style={styles.velhaHorizontal}>
              <View>
                {this.state.a3 == 'x' && <X />}
                {this.state.a3 == 'o' && <O />}
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.velhaVertical}>
            <TouchableHighlight
              underlayColor="#EEE"
              onPress={() => {
                clicou(this, 'b1');
              }}
              style={[styles.velhaHorizontal, {borderTopWidth: 0}]}>
              <View>
                {this.state.b1 == 'x' && <X />}
                {this.state.b1 == 'o' && <O />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#EEE"
              onPress={() => {
                clicou(this, 'b2');
              }}
              style={styles.velhaHorizontal}>
              <View>
                {this.state.b2 == 'x' && <X />}
                {this.state.b2 == 'o' && <O />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#EEE"
              onPress={() => {
                clicou(this, 'b3');
              }}
              style={styles.velhaHorizontal}>
              <View>
                {this.state.b3 == 'x' && <X />}
                {this.state.b3 == 'o' && <O />}
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.velhaVertical}>
            <TouchableHighlight
              underlayColor="#EEE"
              onPress={() => {
                clicou(this, 'c1');
              }}
              style={[styles.velhaHorizontal, {borderTopWidth: 0}]}>
              <View>
                {this.state.c1 == 'x' && <X />}
                {this.state.c1 == 'o' && <O />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#EEE"
              onPress={() => {
                clicou(this, 'c2');
              }}
              style={styles.velhaHorizontal}>
              <View>
                {this.state.c2 == 'x' && <X />}
                {this.state.c2 == 'o' && <O />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#EEE"
              onPress={() => {
                clicou(this, 'c3');
              }}
              style={styles.velhaHorizontal}>
              <View>
                {this.state.c3 == 'x' && <X />}
                {this.state.c3 == 'o' && <O />}
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.infoArea}>
          <View style={styles.infoVez}>
            <Text>Vez de: </Text>
            {this.state.vez == 'x' && <X />}
            {this.state.vez == 'o' && <O />}
          </View>
          <View style={styles.infoAviso}>
            <Text>{this.state.aviso}</Text>
          </View>
        </View>

        <View>
          <Button title="resetar" onPress={() => resetar(this)} />
        </View>
      </View>
    );
  }
}

const clicou = (objeto, posicao) => {
  let state = objeto.state;

  if (eval('state.' + posicao) == '' && state.status == 1) {
    eval('state.' + posicao + ' = state.vez');

    if (state.vez == 'x') {
      state.vez = 'o';
    } else {
      state.vez = 'x';
    }
  }

  verificar(objeto, 'x');
  verificar(objeto, 'o');
};

const verificar = (objeto, item) => {
  let state = objeto.state;

  if (
    (state.a1 == item && state.b1 == item && state.c1 == item) ||
    (state.a2 == item && state.b2 == item && state.c2 == item) ||
    (state.a3 == item && state.b3 == item && state.c3 == item) ||
    (state.a1 == item && state.a2 == item && state.a3 == item) ||
    (state.b1 == item && state.b2 == item && state.b3 == item) ||
    (state.c1 == item && state.c2 == item && state.c3 == item) ||
    (state.a1 == item && state.b2 == item && state.c3 == item) ||
    (state.a3 == item && state.b2 == item && state.c1 == item)
  ) {
    state.aviso = `${item} ganhou`;
    state.status = 0;
  }

  if (state.status == 1) {
    if (
      state.a1 != '' &&
      state.a2 != '' &&
      state.a3 != '' &&
      state.b1 != '' &&
      state.b2 != '' &&
      state.b3 != '' &&
      state.c1 != '' &&
      state.c2 != '' &&
      state.c3 != ''
    ) {
      state.aviso = `EMPATE`;
      state.status = 0;
    }
  }

  objeto.setState(state);
};

const resetar = objeto => {
  let state = objeto.state;

  state.aviso = '';
  state.vez = 'x';
  state.a1 = '';
  state.a2 = '';
  state.a3 = '';
  state.b1 = '';
  state.b2 = '';
  state.b3 = '';
  state.c1 = '';
  state.c2 = '';
  state.c3 = '';
  state.status = 1;

  objeto.setState(state);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  area: {
    width: 300,
    height: 300,
    flexDirection: 'row',
  },
  velhaVertical: {
    flex: 1,
    borderLeftColor: '#000',
    borderLeftWidth: 5,
  },
  velhaHorizontal: {
    flex: 1,
    borderTopColor: '#000',
    borderTopWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoArea: {
    marginTop: 30,
    flexDirection: 'row',
  },
  infoVez: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoAviso: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
