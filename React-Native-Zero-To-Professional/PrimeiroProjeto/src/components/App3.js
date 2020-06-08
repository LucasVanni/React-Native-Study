import React, { Component } from "react";

import { View, Text, Image } from "react-native";

// É impotado a ""classe"" estilos.js, para o componente estilos
import { styles } from "../styles/styles.js";

export default class TerceiraAula extends Component {
  render() {
    /*
      É recuperado os valores que foram introduzidos
      no objeto literal "texto" presente na ""classe""
      estilos.js para uma variável texto, textoAula03 e
      estiloImagem, que são objetos do tipo JSON...
    */
    const { texto, textoAula03, estiloImagem } = styles;
    /*
      Imprime a variável ( no caso um objeto ) no console
      do navegador através do debug...
    */
    {
      console.log(texto);
    }

    /* Variável let que receberá o objeto JSON contendo como
      nome da chave uri e o endereço do html após os dois pontos
    */
    let imagem = {
      uri:
        "https://abrilsuperinteressante.files.wordpress.com/2018/07/565dcdfe0e2163330400b" +
        "f82albert-einstein-2071-hd-wallpapers.jpeg?quality=70&strip=info"
    };

    return (
      <View>
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        {/*
          Propriedade style com seu conteúdo
          (objeto literal) implementado em um outro
          código.
        */}
        <Text style={textoAula03}>Olá Mundo</Text>

        {/*
          Componente que mostra uma imagem na tela do celular
          Esse componente necessita de duas props para funcionar
          A primeira é a "source" é definido o diretório em que a
            imagem está localizada, podendo ser até url externas
            desde que ela contenha https (protocólo de segurança)...
          A segunda é a propriedade "style", que deve conter um objeto
          literal com as chaves ("height" e "width") e seus valores já
          pensados e implementados, para que possam ser renderizadas
          na tela...
        */}
        <Image /*
                    /*
                    No caso desse código a variável imagem
                    foi setada acima, e recebe um objeto JSON
                    contendo a chave uri e como valor, introduzido
                    o link https
                    */
          source={
            imagem
          } /*
                    /*
                    No caso desse código a variável imagem
                    foi setada acima, e recebe um objeto JSON
                    contendo a chave uri e como valor, introduzido
                    o link https
                    */
          /*
                    /*
                    Sempre uma imágem deve conter em seu estilo,
                    o valor de altura(height) e o valor de
                    largura(width), para ser renderizada na tela
                    do app.
                    */
          style={estiloImagem}
        />
      </View>
    );
  }
}
