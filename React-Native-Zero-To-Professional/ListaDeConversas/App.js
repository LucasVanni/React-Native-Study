import { createStackNavigator, createAppContainer } from "react-navigation";
import flatlist from "./src/Screens/Flatlist";
import Tela1 from "./src/Screens/Tela1";
import ListItem from "./src/Screens/Tela2";

const AppNavigator = createStackNavigator({
  home: {
    screen: flatlist
  },
  nomes: {
    screen: Tela1
  },
  conversas: {
    screen: ListItem
  }
});

export default createAppContainer(AppNavigator);
