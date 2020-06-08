import React from "react";

import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "../components/Home";
import Login from "../components/Login";

const Navigator = createStackNavigator(
    {
        Login: { screen: Login, navigationOptions: { title: "Tela de Login" } },
        Home: { screen: Home },
    },
    {
        defaultNavigationOptions: {
            headers: null,
        },
    },
);

export default createAppContainer(Navigator);
