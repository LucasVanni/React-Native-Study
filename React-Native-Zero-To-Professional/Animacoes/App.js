import React, {Component} from 'react';
import {View, Text, Animated, Button, StyleSheet, Modal} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: new Animated.Value(0),
      // numero: new Animated.Value(0),
      // modalVisible: false,
      // widthRetangulo: new Animated.Value(250),
      // heightRetangulo: new Animated.Value(50),
      // opacidadeRetangulo: new Animated.Value(1),
      // //backgroundColorRetangulo: new Animated.Value('#f00'),
    };

    // Animated.timing(this.state.numero, {
    //   toValue: 100,
    //   duration: 2000,
    // }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.numero, {
          toValue: 255,
          duration: 2000,
        }),

        Animated.timing(this.state.numero, {
          delay: 500,
          toValue: 0,
          duration: 2000,
        }),
      ]),
    ).start();

    // this.aumentarAltura = this.aumentarAltura.bind(this);
    // this.diminuirAltura = this.diminuirAltura.bind(this);
    // this.cadastrar = this.cadastrar.bind(this);

    // Animated.loop(
    //   Animated.parallel([
    //     Animated.sequence([
    //       Animated.timing(this.state.heightRetangulo, {
    //         toValue: 100,
    //         duration: 500,
    //       }),
    //       Animated.timing(this.state.heightRetangulo, {
    //         toValue: 50,
    //         duration: 500,
    //       }),
    //     ]),
    //     Animated.sequence([
    //       Animated.timing(this.state.widthRetangulo, {
    //         toValue: 350,
    //         duration: 500,
    //       }),
    //       Animated.timing(this.state.widthRetangulo, {
    //         toValue: 250,
    //         duration: 500,
    //       }),
    //     ]),
    //   ]),
    // ).start();

    // Animated.sequence([
    //   Animated.timing(this.state.opacidadeRetangulo, {
    //     toValue: 1,
    //     duration: 2000,
    //   }),
    //   Animated.parallel([
    //     Animated.timing(this.state.heightRetangulo, {
    //       toValue: 100,
    //       duration: 2000,
    //     }),
    //     Animated.timing(this.state.widthRetangulo, {
    //       toValue: 300,
    //       duration: 2000,
    //     }),
    //   ]),
    //   Animated.timing(this.state.opacidadeRetangulo, {
    //     toValue: 0,
    //     duration: 2000,
    //   }),
    // ]).start();

    // Animated.timing(this.state.heightRetangulo, {
    //   toValue: 500,
    //   duration: 2000,
    // }).start();
    // Animated.timing(this.state.opacidadeRetangulo, {
    //   toValue: 1,
    //   duration: 2000,
    // }).start();
    // // Animated.timing(this.state.backgroundColorRetangulo, {
    // //   toValue: '#ff0',
    // //   duration: 2000,
    // // });
  }

  // aumentarAltura() {
  //   Animated.timing(this.state.heightRetangulo, {
  //     toValue: 100,
  //     duration: 500,
  //   }).start();
  // }

  // diminuirAltura() {
  //   Animated.timing(this.state.heightRetangulo, {
  //     toValue: 50,
  //     duration: 500,
  //   }).start();
  // }

  // cadastrar() {
  //   this.setState({modalVisible: true});
  // }

  render() {
    // let pct = this.state.numero.interpolate({
    //   inputRange: [0, 100],
    //   outputRange: ['0%', '100%'],
    // });

    let pct = this.state.numero.interpolate({
      inputRange: [0, 255],
      outputRange: ['rgb(255,255,255)', 'rgb(51,255,170)'],
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            backgroundColor: pct,
            height: 50,
            width: 50,
          }}></Animated.View>
        {/* <Button title="Cadastre-se" onPress={this.cadastrar} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.modalWindow}>
            <View style={styles.modalBody}>
              <View style={styles.conteudo}>
                <Text>Tela de cadastrar</Text>

                <Button
                  title="Cadastrar"
                  onPress={() => this.setState({modalVisible: false})}
                />
              </View>
            </View>
          </View>
        </Modal> */}
        {/* <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              width: this.state.widthRetangulo,
              height: this.state.heightRetangulo,
              backgroundColor: '#f00',
              alignItems: 'center',
              justifyContent: 'center',
              //backgroundColor: this.state.backgroundColorRetangulo,
              opacity: this.state.opacidadeRetangulo,
            }}>
            <Text style={{color: '#fff', fontSize: 25, textAlign: 'center'}}>
              Texto Qualquer
            </Text>
          </Animated.View>
        </View>

        <View
          style={{
            height: 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Button title="Aumentar Autura (100)" onPress={this.aumentarAltura} />
          <Button title="Diminuir Autura (50)" onPress={this.diminuirAltura} />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   modalWindow: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   modalBody: {
  //     height: 300,
  //     width: 300,
  //     backgroundColor: '#999',
  //     borderRadius: 10,
  //   },
  //   conteudo: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //},
});
