import React, { Component } from "react";
import { View, Text } from "react-native";

import { styles } from "../styles/styles.js";

export default class ComponenteState extends Component {
  constructor(props) {
    super(props);

    // State INICIAL
    this.state = { comida: "" };

    let comidas = [
      "Lazanha",
      "Petigato",
      "Esfiha",
      "Pão de queijo",
      "Pão de casa"
    ];

    /*
      Função que faz com que seu parâmetro seja repetido de x
      em x tempo
    */
    setInterval(() => {
      /*
          Para definir um state é necessário utilizar o setState
          previousState é o state anterior, fazendo com que o
          mesmo seja substituído

        */
      this.setState(() => {
        let numeroRandom = Math.floor(Math.random() * comidas.length);

        return { comida: comidas[numeroRandom] };
      });
    }, 1000);
  }

  render() {
    const { viewApp5, textoAula05, texoStateAula05 } = styles;

    return (
      <View style={viewApp5}>
        <Text style={textoAula05}>Hoje você vai jantar...</Text>
        {/* O modo de inserir state no app é parecido com as props  */}
        <Text style={texoStateAula05}>{this.state.comida}</Text>
      </View>
    );
  }
}
