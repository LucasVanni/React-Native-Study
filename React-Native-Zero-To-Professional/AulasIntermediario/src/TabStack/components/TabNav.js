import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from "./StackHome";

import Explorar from "./Stackexplorar";

const TabNav = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Explorar: {
    screen: Explorar
  }
});
export default createAppContainer(TabNav);
