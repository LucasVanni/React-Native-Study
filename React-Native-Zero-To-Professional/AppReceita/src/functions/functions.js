export const exibirReceita = (nav, item) => {
  nav.navigate("Receitas", { item });
};

import React from "react";

import { Text } from "react-native";

import { styles } from "../styles/styles";

export const renderIngredientes = item => {
  const { txtConteudoIngredientes } = styles;
  return <Text style={txtConteudoIngredientes}>{item.txt}</Text>;
};

export const renderizarPreparo = item => {
  const { txtPreparo } = styles;
  return (
    <Text style={txtPreparo}>
      Passo {item.key} -> {item.txt}
    </Text>
  );
};
