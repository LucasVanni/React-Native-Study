import React, { Component } from "react";
import { Text, View } from "react-native";

/*
  A classe de nome "PrimeiroProjeto" irá herdar as
  características da classe Component,
  que contém a informação dos componentes do React...

  A classe é um componente que é o aplicativo em si,
  dentro do componente principal irá ter vários outros
  componentes que serão utilizados para formar o
  aplicativo como um todo...
*/
export default class PrimeiroProjeto extends Component {
  /*
   É uma função que serve para renderizar os componentes
   retornados para ela...
  */
  render() {
    /*
      É implementado o que a função render irá retornar
      no caso de todos os apps, irá retornar componentes
    */
    return (
      // Componente View sendo retornado para a função render
      <View>
        {/* O componente Text é retornado para a função render */}
        <Text> Olá Mundo </Text>
        {/* Outro componente Text sendo retornado para a função render */}
        <Text> Olá Mundo2 </Text>
      </View>
    );
  }
}
