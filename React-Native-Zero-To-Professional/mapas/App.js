import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

export default class Mapas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -7.2379005,
      lng: -35.8858189,
      txt: '',
      txt2: '',
      markers: [
        {
          key: 0,
          coords: {latitude: -7.2379005, longitude: -35.8858189},
          pinColor: '#1f33c9',
        },
        {
          key: 1,
          coords: {latitude: -7.23665845, longitude: -35.86917779},
          pinColor: '#FF0000',
        },
        {
          key: 2,
          coords: {latitude: -7.24665845, longitude: -35.86917779},
          pinColor: '#0f0',
        },
        {
          key: 3,
          coords: {latitude: -7.24675845, longitude: -35.86937779},
          pinColor: '#0ff',
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          // Identificador do mapa
          ref={map => (this.map = map)}
          // Define o tipo de mapa
          mapType="standard"
          // Propriedades do mapa

          // Recebe valores true ou false para bloquear ou ativar a movimentação do mapa
          scrollEnabled={true}
          // Recebe valores true ou false para bloquear ou ativar o zoom no mapa
          zoomEnabled={true}
          // Recebe valores true ou false para bloquear ou ativar a rotação do mapa
          rotateEnabled={true}
          // Função executada após o mapa ser carregado pro completo
          onMapReady={() => alert('Mapa carregado!')}
          // Executa enquanto a região está sendo modificada
          onRegionChange={regiao => regiaoMudou(this, regiao)}
          // Executa no final do evento de mudar a região, usado para recuperar a região final
          onRegionChangeComplete={regiao => regiaoMudouCompleta(this, regiao)}
          // Ao pressionar o mapa o evente é assionado.
          // Exemplo ao adicionar o marcador
          onPress={event =>
            alert(
              `Clicou em: ${event.nativeEvent.coordinate.latitude} X ${event.nativeEvent.coordinate.longitude}`,
            )
          }
          // Quando o usuário clicar e depois de um tempo soltar
          onLongPress={event =>
            alert(
              `Clicou longamente em: ${event.nativeEvent.coordinate.latitude} X ${event.nativeEvent.coordinate.longitude}`,
            )
          }
          style={styles.mapa}
          onPress={evento => mapClick(evento, this)}
          initialRegion={{
            latitude: this.state.lat,
            longitude: this.state.lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {this.state.markers.map(marker => {
            return (
              <Marker
                image={require('./assets/images/carro.png')}
                draggable
                onDragEnd={event => markerDrag(this, event)}
                key={marker.key}
                coordinate={marker.coords}
                pinColor={marker.pinColor}
              />
            );
          })}
          {/* <Marker
            // Prop obrigatória
            coordinate={{
              latitude: -7.2379005,
              longitude: -35.8858189,
            }}
            // Prop chamada de callout que é a janela que aparece ao clicar no marcador

            // Título
            title="Olá"
            // Descrição
            description="Uma descrição qualquers"
            // Modifica a cor, tem limitação de cores
            pinColor={'#1f33c9'}
          />
          <Marker
            // Prop obrigatória
            coordinate={{
              latitude: -7.23665845,
              longitude: -35.86917779,
            }}
            // Prop chamada de callout que é a janela que aparece ao clicar no marcador

            // Título
            title="Olá"
            // Descrição
            description="Uma descrição qualquers"
            // Modifica a cor, tem limitação de cores
            pinColor={'#ff29'}
          />
          <Marker
            // Prop obrigatória
            coordinate={{
              latitude: -7.24665845,
              longitude: -35.86917779,
            }}
            // Prop chamada de callout que é a janela que aparece ao clicar no marcador

            // Título
            title="Olá"
            // Descrição
            description="Uma descrição qualquers"
            // Modifica a cor, tem limitação de cores
            pinColor={'#ff9e29'}
          />{' '}
          */}
        </MapView>
        {/* <Text style={styles.texto}>
          {this.state.lat} X {this.state.lng}
        </Text> */}

        {/* <View style={styles.info}>
          <Text>{this.state.txt}</Text>
          <Text>{this.state.txt2}</Text> */}

        {/* <Button title="Mover mapa" onPress={() => moverMapaAnimado(this)} />
        </View> */}

        {/* <View style={styles.botaoArea}>
          <Button
            title="São Paulo"
            onPress={() => {
              moverMapa(this, -7.2379005, -35.8858189);
            }}
          />
          <Button
            title="Belo Horizonte"
            onPress={() => {
              moverMapa(this, -19.9027026, -44.0340895);
            }}
          />
          <Button
            title="Brasília"
            onPress={() => {
              moverMapa(this, -15.8080374, -47.8750231);
            }}
          />
        </View> */}
      </View>
    );
  }
}

const markerDrag = (objeto, evento) => {
  let state = objeto.state;
  let item = evento._targetInst.return.key;
  for (let i in state.markers) {
    if (state.markers[i].key == item) {
      state.markers[i].coords = evento.nativeEvent.coordinate;
    }
  }
  objeto.setState(state);
};

const mapClick = (evento, objeto) => {
  let state = objeto.state;
  state.markers.push({
    key: state.markers.length,
    coords: {
      latitude: evento.nativeEvent.coordinate.latitude,
      longitude: evento.nativeEvent.coordinate.longitude,
    },
    pinColor: '#FF0000',
  });
  objeto.setState(state);
};

const moverMapaAnimado = objeto => {
  // Irá animar até a coordenada x, do ponto a, recebe como primeiro parametro o destino e como segundo quanto tempo a animação irá durar
  objeto.map.animateToCoordinate(
    {
      // Sobe ou desce
      latitude: -15.8010374,
      // Esquerda ou direita
      longitude: -47.8123231,
    },
    2000,
  );

  // Altera a posição do mapa e o zoom de forma que todos os elementos apareçam na tela
  objeto.map.fitToElements(true);
};

const moverMapa = (objeto, latitude, longitude) => {
  let state = objeto.state;
  state.lat = latitude;
  state.lng = longitude;
  objeto.setState(state);
};

const regiaoMudouCompleta = (objeto, regiao) => {
  let state = objeto.state;

  state.txt2 = `Mudou: ${regiao.latitude} x ${regiao.longitude}`;

  objeto.setState(state);
};

const regiaoMudou = (objeto, regiao) => {
  let state = objeto.state;

  state.txt = `Mudou: ${regiao.latitude} x ${regiao.longitude}`;

  objeto.setState(state);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    width: '100%',
    height: 400,
  },
  texto: {
    fontSize: 25,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  botaoArea: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  info: {
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
