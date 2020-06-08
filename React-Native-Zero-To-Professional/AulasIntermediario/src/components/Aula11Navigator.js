import { createStackNavigator, createAppContainer } from "react-navigation";

import Tela1 from "../screens/tela1";

import Tela2 from "../screens/tela2";

import Tela3 from "../screens/tela3";

const Aula11Navigator = createStackNavigator({
  primeiraTela: {
    screen: Tela1
  },
  segundaTela: {
    screen: Tela2
  },
  terceiraTela: {
    screen: Tela3
  }
});

export default createAppContainer(Aula11Navigator);
