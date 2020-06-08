import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Tela1 from "../screens/tela1";

import Tela2 from "../screens/tela2";

const TabNavigator = createBottomTabNavigator({
  primeiraTela: {
    screen: Tela1,
    navigationOptions: {
      title: "Primeira Tela"
    }
  },
  segundaTela: {
    screen: Tela2,
    navigationOptions: {
      title: "Segunda Tela"
    }
  }
});
export default TabNavigator;
