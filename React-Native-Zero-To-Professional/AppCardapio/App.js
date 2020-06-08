import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import React from "react";

import { Image } from "react-native";

import Home from "./src/screens/home";

import Contato from "./src/screens/contato";

import Horarios from "./src/screens/horarios";

import Sobre from "./src/screens/sobre";

import { styles } from "./src/styles//styles";

const { icone } = styles;

const iconeHomeAzul = require("./src/images/home_azul.png");
const iconeHomePreto = require("./src/images/home_preto.png");
const iconeContatosAzul = require("./src/images/contato_azul.png");
const iconeContatosPreto = require("./src/images/contato_preto.png");
const iconeHorariosAzul = require("./src/images/horario_azul.png");
const iconeHorariosPreto = require("./src/images/horario_preto.png");
const iconeSobreAzul = require("./src/images/sobre_azul.png");
const iconeSobrePreto = require("./src/images/sobre_preto.png");
const AppTabNav = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "HOME",
      tabBarIcon: ({ focused, tintColor }) => {
        if (focused) {
          return <Image source={iconeHomeAzul} style={icone} />;
        } else {
          return <Image source={iconeHomePreto} style={icone} />;
        }
      }
    }
  },
  Contato: {
    screen: Contato,
    navigationOptions: {
      tabBarLabel: "CONTATOS",
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return <Image source={iconeContatosAzul} style={icone} />;
        } else {
          return <Image source={iconeContatosPreto} style={icone} />;
        }
      }
    }
  },
  Horarios: {
    screen: Horarios,
    navigationOptions: {
      tabBarLabel: "HORÁRIOS",
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return <Image source={iconeHorariosAzul} style={icone} />;
        } else {
          return <Image source={iconeHorariosPreto} style={icone} />;
        }
      }
    }
  },
  Sobre: {
    screen: Sobre,
    navigationOptions: {
      tabBarLabel: "SOBRE",
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return <Image source={iconeSobreAzul} style={icone} />;
        } else {
          return <Image source={iconeSobrePreto} style={icone} />;
        }
      }
    }
  }
});
export default createAppContainer(AppTabNav);
