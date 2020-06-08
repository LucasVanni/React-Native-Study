import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./Aula15";

import TabNavigator from "./tabNavigator";

const StackNavigator = createStackNavigator(
  {
    loginTela: {
      screen: Login,
      navigationOptions: {
        title: "Tela de login"
      }
    },
    navigator: {
      screen: TabNavigator,
      navigationOptions: {
        title: "Telas"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#122356",
        height: 100
      },
      // Muda a cor padrão do que está escrito no header
      headerTintColor: "#ccc",
      // Estilização do título em si
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20
      }
    },
    headerLayoutPreset: "center"
  }
);

export default createAppContainer(StackNavigator);
