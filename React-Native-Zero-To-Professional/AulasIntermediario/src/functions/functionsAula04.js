/**
 * @format
 * @flow
 */

import React from "react";

import { Picker } from "react-native";

export const mudandoValores = (itemValue, objeto) => {
  let obj = objeto.state;

  /*
    O valor contido em item Value é armazenado na chave 'valorselecionado'

    O itemValue é passsado como parâmetro pelo retorno da prop 'onValueChange'
  */
  obj.dataSelecionada = itemValue;

  // O novo valor introduzido em 'valorSelecionado' é então introduzido no state
  // do objeto
  objeto.setState(obj);
};

// Valor sempre vem primeiro
export const introduzindoPickerItens = (valor, chave) => {
  /*
   É retonado o Picker Item que será implementado dentro da função map...
   sendo inserido no interior do componente Picker
  */
  return <Picker.Item key={chave} value={chave} label={valor.nome} />;
};
