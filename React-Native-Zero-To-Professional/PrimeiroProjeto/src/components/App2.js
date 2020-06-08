import React, { Component } from "react";
import { Text, View, Button } from "react-native";

// Importando módulo de estilos para o app
import { styles } from "../styles/styles.js";

// Import das Funções
import { Somar, Dividir } from "../functions/mathFunctions.js";

export default class PrimeiroProjeto extends Component {
  /*
      Funções ensinadas na aula

      somar(n1, n2) => {
        return n1 + n2;
      }

      (n1, n2) => n1 + n2;

    */

  render() {
    // Variável criada por meio do JavaScript no JSX
    let nome = "Lucas";

    // Capturando o objeto texto do módulo estilos importado
    const { texto } = styles;

    return (
      <View>
        {/* Para utlizar a variável JavaScipt criada no JSX */}
        <Text /*
                    /*
                    A propriedade style do componente Text
                    recebe o objeto texto, que foi importado
                    do módulo estilos
                    */
          style={texto}
        >
          Meu nome é {nome}
        </Text>

        {/*Calculando a divisão de 10 por 2 através da função Dividir*/}
        <Text style={texto}>A divisão de 10 por 2 é: {Dividir(10, 2)}</Text>

        {/*Calculando a soma de 2 + 2 através da função Somar*/}
        <Text style={texto}>A soma de 2 + 2 é: {Somar(2, 2)}</Text>

        {/* Componente Botão
              A propriedade title que recebe a String de valor 'Aperte'
              A propriedade onPress recebe uma função anônima do JavaScipt
              com um simples alert com o texto 'Me Apertou!'
            */}
        <Button title="Aperte" onPress={() => alert("Me Apertou!")} />
      </View>
    );
  }
}
