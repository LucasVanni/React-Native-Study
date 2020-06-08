import { createAppContainer, createStackNavigator } from "react-navigation";

import AulaFirebase06Logar from "./AulaFirebase06Logar";
import AulaFirebase06Cadastro from "./AulaFirebase06Cadastro";
import AulaFirebase06InformacoesUsuario from "./AulaFirebase06InfoUsuarios";

import AulaFirebase07 from "./AulaFirebase07TrocarSenhaeEmail";

const AulaFirebase06Navigator = createStackNavigator(
    {
        TelaLogar: {
            screen: AulaFirebase06Logar,
            navigationOptions: {
                title: "Tela de Login",
            },
        },
        TelaCadastro: {
            screen: AulaFirebase06Cadastro,
            navigationOptions: {
                title: "Tela de Cadastro",
            },
        },
        InformacoesUsuario: {
            screen: AulaFirebase06InformacoesUsuario,
            navigationOptions: {
                header: null,
            },
        },
        AulaFirebase07: {
            screen: AulaFirebase07,
            navigationOptions: {
                title: "Trocar Senha",
            },
        },
    },
    {
        headerLayoutPreset: "center",
        defaultNavigationOptions: {
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 22,
            },
        },
    },
);

export default createAppContainer(AulaFirebase06Navigator);
