import React, { Component } from 'react';

import {View, Text, Image} from 'react-native';

import { styles } from '../styles/styles.js';

/*
  Exportados o objeto literal contendo as chaves altura e largura,
  com os já valores específicados
*/
export const tamanhoImagem = { altura: 200, largura: 200 };

export default class ComponentePersonalizado extends Component {

  render () {
    // Importado a chave estiloImagem do objeto estilos;
    const { estiloImagem } = styles;


    return (
      <View>
      {/*
          As propriedades que foram enviadas no componente pelo componente
            QuartaAula são implementadas no código...
          A prop do componente Image, denominada de source recebe a prop imagemEnviada...
          Os estilos recebem a propriedade que foi enviada de estilos.js...
          O componente Text recebe como propriedade o valor enviado do componente
            QuartaAula...
      */}

          <Image source={this.props.imagemEnviada} style={estiloImagem} />
          <Text>{this.props.nomeEnviado}</Text>
      </View>
    );
  }

}
