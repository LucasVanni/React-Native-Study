import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './src/TelaHome/Home.js';

import Cadastro from './src/TelaCadastro/Cadastro.js';

import Login from './src/TelaLogin/Login.js';

import Interna from './src/TelasInternas/FirstScreen/Interna';

import Preload from './src/TelasInternas/Preload/Preload.js';

import AddReceita from './src/TelasInternas/AddReceita/AddReceita';

import AddDespesa from './src/TelasInternas/AddDespesa/AddDespesa';

const Navegador = createStackNavigator(
  {
    Preload: {
      screen: Preload,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Interna: {
      screen: Interna,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Cadastro: {
      screen: Cadastro,
      navigationOptions: {
        title: 'Cadastro',
        headerStyle: {
          backgroundColor: '#fff000',
        },
        headerTintColor: '#000',
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      },
    },
    AddReceita: {
      screen: AddReceita,
      navigationOptions: {
        title: 'Adicionar Receita',
      },
    },
    AddDespesa: {
      screen: AddDespesa,
      navigationOptions: {
        title: 'Adicionar Despesa',
      },
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

export default createAppContainer(Navegador);
