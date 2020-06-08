import React, {Component} from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {styles} from '../styles/stylesTelaLogar';

import firebase from '../apikey';

import {
  receberEmail,
  receberSenha,
  logar,
  irParaCadastrar,
} from '../functions/functionsAulaFirebase06';

export default class TelaLogar extends Component {
  constructor(props) {
    super(props);

    // Para deslogar a pessoa, é necessário utilizar a seguinte função...
    firebase.auth().signOut();
  }

  render() {
    const {
      viewTelaLogin,
      txtTitulo,
      input,
      viewLoginGeral,
      viewSenhaGeral,
      viewBotaoCadastro,
      toBtnCadastrar,
      txtBtnCadastrar,
      viewTxtLogin,
      viewTxtInputLogin,
      viewTxtInputSenha,
      viewTxtSenha,
      viewBotaoGeral,
      toBtnTelaLogin,
      txtBtnLogin,
    } = styles;

    return (
      <View style={viewTelaLogin}>
        <View style={viewLoginGeral}>
          <View style={viewTxtLogin}>
            <Text style={txtTitulo}>E-mail:</Text>
          </View>

          <View style={viewTxtInputLogin}>
            <TextInput
              autoCorrect={true}
              autoCapitalize={'none'}
              style={input}
              onChangeText={email => receberEmail(email, this.props.this)}
            />
          </View>
        </View>

        <View style={viewSenhaGeral}>
          <View style={viewTxtSenha}>
            <Text style={txtTitulo}>Senha:</Text>
          </View>
          <View style={viewTxtInputSenha}>
            <TextInput
              secureTextEntry={true}
              style={input}
              onChangeText={senha => receberSenha(senha, this.props.this)}
            />
          </View>
        </View>

        <View style={viewBotaoGeral}>
          <TouchableOpacity
            style={toBtnTelaLogin}
            onPress={() => logar(this, this.props.this, firebase)}>
            <Text style={txtBtnLogin}>Logar</Text>
          </TouchableOpacity>
        </View>

        <View style={viewBotaoCadastro}>
          <TouchableOpacity
            style={toBtnCadastrar}
            onPress={() =>
              irParaCadastrar(
                this.props.navigation,
                this.props.this.state.email,
                this.props.this.state.senha,
              )
            }>
            <Text style={txtBtnCadastrar}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
