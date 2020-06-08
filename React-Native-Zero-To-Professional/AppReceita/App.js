import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "./src/screens/Home";

import Receitas from "./src/screens/Receitas";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Receitas: {
      screen: Receitas,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: {
      title: "App Receitas",
    },
    headerLayoutPreset: "center",
  },
);

export default createAppContainer(AppNavigator);
