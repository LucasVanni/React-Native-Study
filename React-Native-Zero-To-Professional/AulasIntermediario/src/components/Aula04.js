import React, { Component } from "react";

import { View, Picker, Text } from "react-native";

import { styles } from "../styles/stylesAula04.js";

import {
  mudandoValores,
  introduzindoPickerItens
} from "../functions/functionsAula04.js";

export default class Aula04 extends Component {
  constructor(props) {
    super(props);

    // Array Serviços
    const servicos = [
      {
        nome: "Alinhamento",
        valor: 30
      },
      {
        nome: "Balanceamento",
        valor: 20
      },
      {
        nome: "Rodízio de Pneus",
        valor: 50
      },
      {
        nome: "Dar uma voltinha",
        valor: 10
      }
    ];

    // State
    this.state = {
      valorSelecionado: 0,
      servicos
    };
  }

  render() {
    const { viewAula04, picker, textAula04 } = styles;
    /*
      Map é usado para percorrer um array, item a item, recebendo seus daods
      e aplicando um mapeamento, aplicando assim uma outra função...
    */
    let itensServicos = this.state.servicos.map(introduzindoPickerItens);

    return (
      <View style={viewAula04}>
        <Picker
          style={
            picker
          } /*
                    /*
                    /*
                    * Armazena o valor interno do item que está sendo selecionado.
                    */
          selectedValue={
            this.state.valorSelecionado
          } /*
                    /*
                    /*
                    * Armazena o valor interno do item que está sendo selecionado.
                    */
          /*
                    /*
                    /*
                    * Armazena o valor interno do item que está sendo selecionado.
                    */
          /*
                    /*
                    /*
                    * Armazena o valor interno do item que está sendo selecionado.
                    */
          /*
                    /*
                    /*
                    * Armazena o valor interno do item que está sendo selecionado.
                    */
          /*
                    /*
                    /*
                    * Qyabdi trocar o valor do picker, envia o valor do novo item selecionado
                    * para a função...
                    */
          onValueChange={itemValue => mudandoValores(itemValue, this)}
        >
          {/*
            O valor retonado pela outra função, que foi executada pela função map,
            é introduzida aqui...
          */}
          {itensServicos}
        </Picker>
        {/*
          È recuperado a chave 'valor' contido no array 'serviços', sendo cada valor
          específicado pelo valor introduzido na chave 'valorSelecionado'
        */}
        <Text style={textAula04}>
          R$ {this.state.servicos[this.state.valorSelecionado].valor.toFixed(2)}
        </Text>
      </View>
    );
  }
}
