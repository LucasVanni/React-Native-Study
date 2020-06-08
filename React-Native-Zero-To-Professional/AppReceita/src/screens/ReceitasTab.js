import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Ingredientes from "./Ingredientes";

import Preparo from "./Preparo";

import Resumo from "./Resumo";

const ReceitasTab = createBottomTabNavigator(
  {
    Resumo: {
      screen: Resumo
    },
    Ingredientes: {
      screen: Ingredientes
    },
    Preparo: {
      screen: Preparo
    }
  },
  {
    tabBarOptions: {
      showIcon: false,
      style: {
        backgroundColor: "#EEE"
      },
      labelStyle: {
        fontSize: 14,
        lineHeight: 47
      },
      activeTintColor: "#333",
      inactiveTintColor: "#CCC"
    },
    animationEnabled: true
  }
);

export default createAppContainer(ReceitasTab);
