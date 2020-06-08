import { createStackNavigator, createAppContainer } from "react-navigation";

import Feed from "../screens/Feed";

import Perfil from "../screens/Perfil";

const Home = createStackNavigator({
  Feed: {
    screen: Feed
  },
  Perfil: {
    screen: Perfil
  }
});

export default createAppContainer(Home);
