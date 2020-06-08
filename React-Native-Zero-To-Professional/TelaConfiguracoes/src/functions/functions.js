import React from "react";
import { View, Picker } from "react-native";

import { styles } from "../styles/styles";

export const introduzindoPicker = (valor, chave) => {
  const { item } = styles;
  return <Picker.Item key={chave} value={valor} label={valor.dia} />;
};

export const introduzindoPicker2 = (valor, chave) => {
  return <Picker.Item key={chave} value={valor} label={valor.mes} />;
};

export const introduzindoPicker3 = (valor, chave) => {
  return <Picker.Item key={chave} value={valor} label={valor.ano} />;
};

export const introduzindoPicker4 = (valor, chave) => {
  return <Picker.Item key={chave} value={valor} label={valor.sexo} />;
};

export const mudandoValores = (itemValue, objeto) => {
  let obj = objeto.state;

  obj.valorSelecionado = itemValue;

  objeto.setState(obj);
};

export const mudarAltura = (item, objeto) => {
  let obj = objeto.state;

  obj.valor = item;

  objeto.setState(obj);
};

export const mudarPeso = (item, objeto) => {
  let obj = objeto.state;

  obj.valor = item;

  objeto.setState(obj);
};

export const switchValor = (valor, objeto) => {
  let obj = objeto.state;

  obj.valorSwitch = valor;

  objeto.setState(obj);
};

export const mudarDadosSalario = (valor, objeto) => {
  let obj = objeto.state;

  obj.valor = valor;

  objeto.setState(obj);
};

export const mudarCartaoMenos = objeto => {
  let obj = objeto.state;

  obj.valor = obj.valor - 1;

  if (obj.valor <= 0) {
    obj.valor = 0;
    obj.desativado = true;
    obj.opacidade = 250;
    obj.cor = "#ccc";
  }

  objeto.setState(obj);
};

export const mudarCartaoMais = objeto => {
  let obj = objeto.state;

  obj.valor = obj.valor + 1;

  if (obj.valor >= 0) {
    obj.desativado = false;
    obj.opacidade = 0.2;
    obj.cor = "#000";
  }

  objeto.setState(obj);
};

export const mudandoBancos = (valor, objeto) => {
  var obj = objeto.state;

  obj.valorSelecionado = valor;

  objeto.setState(valor);
};

export const introduzindoPickerBanco = (valor, chave) => {
  return <Picker.Item key={chave} value={valor} label={valor.nomeBanco} />;
};
