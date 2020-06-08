import { createAppContainer, createDrawerNavigator } from "react-navigation";
import React from "react";

import { Image } from "react-native";

import Tela1 from "../screens/tela117";
import Tela2 from "../screens/tela217";

const img = require("../images/icone1.png");

const img2 = require("../images/icone2.png");

const Aula17 = createDrawerNavigator(
  {
    primeiraTela: {
      screen: Tela1,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: () => (
          <Image source={img} style={{ width: 26, height: 26 }} />
        ),
      },
    },
    segundaTela: {
      screen: Tela2,
      navigationOptions: {
        drawerLabel: "Login",
        drawerIcon: () => (
          <Image source={img2} style={{ width: 26, height: 26 }} />
        ),
      },
    },
  },
  {
    // Define a posição do drawer
    drawerPosition: "left",
    // Define a largura do drawer
    drawerWidth: 150,
    // Define a cor de fundo do drawer
    drawerBackgroundColor: "#FFFF00",
    /*
     Opções específicas do drawer, 
     é relativo a área dos itens
    */
    contentOptions: {
      activeTintColor: "#00f0f0",
      inactiveTintColor: "#000",
      activeBackgroundColor: "#FF5500",
      inactiveBackgroundColor: "#fff",
      /*
      Estilo para o container que engloba todos os itens
      do Drawer
      */
      itemsContainerStyle: {
        backgroundColor: "#000",
        marginTop: 100,
      },
      // Estilo para cada um dos itens, não é muito usual
      itemStyle: {
        //height: 50
      },
      //Propriedades do texto
      labelStyle: {
        fontSize: 25,
      },
      // Estilização do icone
      iconContainerStyle: {
        backgroundColor: "#000",
      },
    },
  },
);

export default createAppContainer(Aula17);
