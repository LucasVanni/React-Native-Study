import React, {Component} from 'react';

import {StyleSheet, Animated, Easing} from 'react-native';

export default class O extends Component {
  constructor(props) {
    super(props);

    this.state = {
      altura: new Animated.Value(0),
      largura: new Animated.Value(0),
    };
    Animated.parallel([
      Animated.timing(this.state.altura, {
        toValue: 60,
        duration: 600,
        easing: Easing.elastic(1.5),
      }),

      Animated.timing(this.state.largura, {
        toValue: 60,
        duration: 600,
        easing: Easing.elastic(1.5),
      }),
    ]).start();
  }

  render() {
    return (
      <Animated.View style={styles.area}>
        <Animated.View
          style={[
            styles.circulo,
            {
              width: this.state.largura,
              height: this.state.altura,
            },
          ]}
        />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  area: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circulo: {
    backgroundColor: '#f00',
    borderRadius: 30,
  },
});
