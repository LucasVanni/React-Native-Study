/*
  Temos 3 opções...
  createBottomTabNavigator -> Irá inserir a tab no footer do app
  createMaterialBottomTabNavigator -> 
  createMaterialTopTabNavigator -> O único que aparece no header do app
*/

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Tela1 from "../screens/tela113";

import Tela2 from "../screens/tela213";

const Aula13 = createBottomTabNavigator(
  {
    PrimeiraTela: {
      screen: Tela1,
      navigationOptions: {
        title: "Tela2",
        tabBarOptions: {
          showIcon: false,
          tabStyle: {
            borderColor: "#2139",
            borderWidth: 1,
            flex: 1
          },
          labelStyle: {
            fontSize: 11,
            alignSelf: "center"
          },
          style: {
            backgroundColor: "#2245",
            alignItems: "center"
          }
        }
      }
    },
    SegundaTela: {
      screen: Tela2
    }
  },
  {
    defaultNavigationOptions: {
      tabBarOptions: {
        showIcon: false,
        tabStyle: {
          borderColor: "#000",
          borderWidth: 1,
          flex: 1
        },
        labelStyle: {
          fontSize: 11,
          alignSelf: "center"
        },
        style: {
          backgroundColor: "#cccc",
          alignItems: "center"
        }
      }
    }
  }
);

export default createAppContainer(Aula13);
