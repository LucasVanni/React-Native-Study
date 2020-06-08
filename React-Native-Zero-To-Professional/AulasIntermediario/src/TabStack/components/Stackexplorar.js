import { createStackNavigator, createAppContainer } from "react-navigation";

import Mosaico from "../screens/Mosaico";

import Foto from "../screens/Foto";

import Perfil from "../screens/Perfil";

const Explorar = createStackNavigator({
  Mosaico: {
    screen: Mosaico
  },
  Foto: {
    screen: Foto
  },
  Perfil: {
    screen: Perfil
  }
});

export default createAppContainer(Explorar);
