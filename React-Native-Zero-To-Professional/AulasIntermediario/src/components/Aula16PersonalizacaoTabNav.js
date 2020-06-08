import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";

import Tela1 from "../screens/tela116";

import Tela2 from "../screens/tela216";

const TabNavigator = createMaterialTopTabNavigator(
  {
    primeiraTela: {
      screen: Tela1
    },
    segundaTela: {
      screen: Tela2
    }
  },
  {
    // Posição da tabBar
    tabBarPosition: "top",
    // Configura se tem animação ou não
    animationEnabled: false,
    // Define qual a primeira tela a ser renderizada
    initialRouteName: "primeiraTela",
    // Define a ordem com que as telas irão aparecer na tabBar
    order: ["segundaTela", "primeiraTela"],
    // Opções do TabBar
    tabBarOptions: {
      // Mostrar ícones
      showIcon: true,
      // Mostrar labels(nomes) dos icones
      showLabel: true,
      // Cor do label no tabBar que está ativo
      activeTintColor: "#FF0000",
      // Cor do label no tabBar que está inativo
      inactiveTintColor: "#00FF00",
      // Deixa os labels todos em maiúsculo... Só funciona no Android...
      // Se quiser que fique nos dois é sugerido colocar o title em maiúsculo...
      upperCaseLabel: true,
      /*
      Muda a cor do label ao ser pressionado... Só funciona em Androids 
      da versão 5 para cima...
      */
      pressColor: "#FF0000",
      /*
        Quando tiver muitas abas ele gerará um scroll, para
        que todas as opções fiquem do mesmo tamanho, possibilitando
        que o usuário ver as outras...
        Só funciona no Android
      */
      scrollEnabled: false,
      // Modifica a estilização da TabBar
      tabStyle: {
        /*
        backgroundColor: "#ffffff"
        Funciona no Android... Pois se modificar as métricas do app,
        ele não será aceito pela Apple
        height: 100
        */
      },
      /*
      Irá mudar o estilo do tracinho 
      que fica abaixo das telas selecionadas,
      funciona somente quando não tem background no tabStyle
      */
      indicatorStyle: {
        backgroundColor: "#ff0000"
      },
      // Muda o estilo do nome da tela
      labelStyle: {
        fontSize: 25
      },
      // Muda o estilo do ícone
      iconStyle: {
        color: "#fff"
      }
    }
  }
);

export default createAppContainer(TabNavigator);
