import React, {Component} from 'react';

import {View, StyleSheet, Animated, Easing} from 'react-native';

export default class X extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seta1: new Animated.Value(0),
      seta2: new Animated.Value(0),
    };

    Animated.parallel([
      Animated.timing(this.state.seta1, {
        toValue: 45,
        duration: 700,
        easing: Easing.elastic(1.5),
      }),

      Animated.timing(this.state.seta2, {
        toValue: -45,
        duration: 700,
        easing: Easing.elastic(1.5),
      }),
    ]).start();
  }

  render() {
    let r1 = this.state.seta1.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });
    let r2 = this.state.seta2.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <Animated.View style={styles.area}>
        <Animated.View
          style={[
            styles.seta,
            {transform: [{perspective: 1000}, {rotate: r1}]},
          ]}
        />
        <Animated.View
          style={[
            styles.seta,
            {transform: [{perspective: 1000}, {rotate: r2}]},
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
  seta: {
    width: 10,
    height: 60,
    backgroundColor: '#f00',
    //Deixa o objeto na mesma posição
    position: 'absolute',
  },
});
