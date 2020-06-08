import { createStackNavigator, createAppContainer } from "react-navigation";

import Tela1 from "../screens/tela112";

import Tela2 from "../screens/tela212";

const Aula12 = createStackNavigator(
  {
    primeirTela: {
      screen: Tela1,
      navigationOptions: {
        title: "Primeira tela"
      }
    },
    segundaTela: {
      screen: Tela2,
      navigationOptions: {
        title: "Segunda Tela",
        headerStyle: {
          backgroundColor: "#000FF0",
          height: 100
        },
        // Muda a cor padrão do que está escrito no header
        headerTintColor: "#00ff00",
        // Estilização do título em si
        headerTitleStyle: {
          fontWeight: "400",
          fontSize: 40
        }
      }
    }
  },
  {
    defaultNavigationOptions: {
      // title: '',
      headerStyle: {
        backgroundColor: "#FF0000",
        height: 100
      },
      // Muda a cor padrão do que está escrito no header
      headerTintColor: "#ffff",
      // Estilização do título em si
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20
      }
    },
    headerLayoutPreset: "center"
  }
);

export default createAppContainer(Aula12);
