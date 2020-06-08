import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeList from "./HomeList.js";

import HomeProducts from "./HomeProducts.js";

const Home = createStackNavigator(
  {
    HomeList: {
      screen: HomeList
    },
    HomeProducts: {
      screen: HomeProducts
    }
  },
  {
    defaultNavigationOptions: {
      title: "Restaurante Domingos"
    },
    headerLayoutPreset: "center"
  }
);

export default createAppContainer(Home);
