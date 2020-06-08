/*

Status Bar

Manipulando a barra de cima onde aparece a bateria o icone de wifi etc...

Não tem como colocar cor personalizada no texto dos itens inseridos nela?
Ou é escura, ou clara, ou não mostra na tela...

Prop barStyle faz com que mude a cor do texto

Temos os valores -->
	'light-content' que deixa as letras brancas
	'dark-content' que deixa as letras pretas
'default' que deixa as letras da cor default do sistema

*/

import React, {Component} from 'react';

import {View, Button, StatusBar, Modal, Text} from 'react-native';

import {styles} from '../styles/stylesAula08.js';

import {mudarCor, esconder, abrirModal, fecharModal} from '../functions/functionsAula08.js';

export default class Aula08 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bkCor: '#fff',
            statusColor: 'dark-content',
            escondido: false,
            visible: false
        };
    }

    render() {

        const {viewAula08, viewModal, textModal} = styles;

        return (

            <View
                style={[
                viewAula08, {
                    backgroundColor: this.state.bkCor
                }
            ]}>

                <Modal animationType='slide' visible={this.state.visible}>
                    <StatusBar barStyle={'light-content'} backgroundColor={'#000'}/>
                    <View style={viewModal}>
                        <Text style={textModal}>Teste</Text>
                        <Button title={'Fechar Modal'} onPress={() => fecharModal(this)}/>
                    </View>
                </Modal>

                <StatusBar
                    barStyle={this.state.statusColor}
                    backgroundColor={this.state.bkCor}
                    hidden={this.state.escondido}/>
                <View style={{
                    padding: 10
                }}>
                    <Button title={'Mudar cor'} onPress={() => mudarCor(this)}/>
                </View>

                <View style={{
                    padding: 10
                }}>
                    <Button title={'Fazer o Status Bar sumir'} onPress={() => esconder(this)}/>
                </View>

                <View style={{
                    padding: 10
                }}>
                    <Button title={'Abrir Modal'} onPress={() => abrirModal(this)}/>
                </View>
            </View>
        );
    }
}
