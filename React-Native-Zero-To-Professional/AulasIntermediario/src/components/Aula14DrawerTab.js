import {
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import Tela1 from "../screens/tela114";

import Tela2 from "../screens/tela214";

const Aula14 = createDrawerNavigator({
  primeiraTela: {
    screen: Tela1
  },
  segundaTela: {
    screen: Tela2
  }
});

export default createAppContainer(Aula14);