import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, Slider} from 'react-native';

import {RNCamera} from 'react-native-camera';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagem: null,
      trocarCamera: RNCamera.Constants.Type.back,
      flashCamera: RNCamera.Constants.FlashMode.off,
      cameraFlashText: 'OFF',
      zoomCamera: 0,
      tipoBarCode: '',
      dataBarCode: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.camera}
          ref={camera => {
            this.camera = camera;
          }}
          flashMode={this.state.flashCamera}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          zoom={this.state.zoomCamera}
          onBarCodeRead={objetoBarra => lerCodigoDeBarra(this, objetoBarra)}
          // barCodeTypes={[RNCamera.Constants.BarCodeTypes.qr]}
          type={this.state.trocarCamera}
        />

        <View style={styles.conteudo}>
          <View style={styles.itemConteudo}>
            <Button
              title={`Flash: ${this.state.cameraFlashText}`}
              onPress={() => {
                trocarFlash(this);
              }}
            />
          </View>
          <View style={styles.itemConteudo}>
            <Button
              title={'Tirar foto'}
              onPress={() => {
                tirarFoto(this);
              }}
            />
          </View>
          <View style={styles.itemConteudo}>
            <Button
              title={'Trocar Câmera'}
              onPress={() => {
                trocarCamera(this);
              }}
            />
          </View>
        </View>

        <View style={styles.responseArea}>
          <Text>{this.state.tipoBarCode}</Text>
          <Text>{this.state.dataBarCode}</Text>
        </View>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          onValueChange={value => trocarZoom(value, this)}
        />
      </View>
    );
  }
}

const lerCodigoDeBarra = (objeto, barra) => {
  if (barra.type != null) {
    let state = objeto.state;

    state.tipoBarCode = barra.type;
    state.dataBarCode = barra.data;

    objeto.setState(state);
  }
};

const trocarFlash = objeto => {
  if (objeto.camera) {
    let state = objeto.state;
    if (objeto.state.flashCamera == RNCamera.Constants.FlashMode.off) {
      state.flashCamera = RNCamera.Constants.FlashMode.on;
      state.cameraFlashText = 'ON';
    } else if (objeto.state.flashCamera == RNCamera.Constants.FlashMode.on) {
      state.flashCamera = RNCamera.Constants.FlashMode.auto;
      state.cameraFlashText = 'AUTO';
    } else if (objeto.state.flashCamera == RNCamera.Constants.FlashMode.auto) {
      state.flashCamera = RNCamera.Constants.FlashMode.torch;
      state.cameraFlashText = 'TORCH';
    } else if (objeto.state.flashCamera == RNCamera.Constants.FlashMode.torch) {
      state.flashCamera = RNCamera.Constants.FlashMode.off;
      state.cameraFlashText = 'OFF';
    }
    objeto.setState(state);
  }
};

const tirarFoto = objeto => {
  if (objeto.camera) {
    objeto.camera
      .takePictureAsync({
        quality: 1,
        width: 500,
      })
      .then(data => {
        // data.width
        // data.height
        // data.uri
        // data.base64

        objeto.setState({imagem: data});
      });
  }
};

const trocarCamera = objeto => {
  let state = objeto.state;
  if (objeto.camera) {
    if (objeto.state.trocarCamera == RNCamera.Constants.Type.back) {
      state.trocarCamera = RNCamera.Constants.Type.front;
    } else {
      state.trocarCamera = RNCamera.Constants.Type.back;
    }

    objeto.setState(state);
  }
};

const trocarZoom = (v, objeto) => {
  let state = objeto.state;

  state.zoomCamera = v;

  objeto.setState(state);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  conteudo: {
    flexDirection: 'row',
    height: 150,
  },
  imagem: {
    width: 200,
    height: 200,
  },
  itemConteudo: {
    flex: 1,
    padding: 5,
  },
  slider: {
    width: '100%',
    height: 50,
    backgroundColor: '#0f0',
  },
  responseArea: {
    height: 100,
    backgroundColor: '#fff',
  },
});
