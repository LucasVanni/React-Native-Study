import { createAppContainer, createStackNavigator } from "react-navigation";

import React from "react";

import { Text, View } from "react-native";

import tela1 from "../screens/tela115";
import tela2 from "../screens/tela215";

const Aula15Navigator = createStackNavigator(
  {
    primeiraTela: {
      screen: tela1
    },
    segundaTela: {
      screen: tela2,
      navigationOptions: {
        title: "Perfil"
      }
    }
  },
  {
    /*
    Sem definir o initialRouteName sempre começará 
    a renderizar da primeira tela que foi introduzida...
    */
    initialRouteName: "primeiraTela",
    /* 
    Como o header irá se comportar quando tiver troca de tela ou não...
    No float um vai sumindo e o outro aparecendo "devagar"...
    No screen um cabeçalho abaixa e o outro sobe...
    No modo none o cabeçalho é removido...
    */
    headerMode: "float",
    /* 
    Na tela atual, aparecerá por padrão o nome da tela anterior, porém
    pode ser alterado... Valor padrão do comando é false...
    */
    headerBackTitleVisible: false,
    // Modifica a posição do título... Valor padrão do comando é 'left'
    headerLayoutPreset: "center",
    // Define as opções padrões do Navigation
    defaultNavigationOptions: {
      // Define o titulo padrão das telas da aplicação
      title: "Feed",
      /*
       Quando recebe null a tela em específico
       não terá header, pode ser criado um componente
       para que seja aplicado um header customizado
      */
      //header: null

      /*
      Irá customizar o ícone do botão voltar
      */
      headerBackImage: () => (
        <Text
          style={{
            color: "#00FF00",
            fontSize: 22
          }}
        >
          Voltar
        </Text>
      ),
      /*
      Irá gerar um componente customizável a direita
      do cabeçalho
      */
      headerRight: (
        <View
          style={{
            marginRight: 20,
            width: 30,
            height: 30,
            backgroundColor: "#00FF00"
          }}
        />
      ),
      /*
      Irá gerar um componente customizável a esquerda
      do cabeçalho
      */
      /*
      headerLeft: (
        <View
          style={{
            marginLeft: 20,
            width: 30,
            height: 30,
            backgroundColor: "#00FF00"
          }}
        />
      )*/
      /* 
      Define as propriedades de estilização do 
      header como um todo
      */
      headerStyle: {
        backgroundColor: "#0000FF",
        height: 80
      },
      /*
      Cor dos títulos da tela
      */
      headerTintColor: "#00FF00",
      headerTitleStyle: {
        fontSize: 30
      }
    }
  }
);

export default createAppContainer(Aula15Navigator);
