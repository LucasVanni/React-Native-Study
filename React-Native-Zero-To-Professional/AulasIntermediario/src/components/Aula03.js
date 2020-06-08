import React, {Component} from 'react';

import {View, SectionList} from 'react-native';

import {styles} from '../styles/styles.js';

import {listSectionRender, fRenderItem} from '../functions/functionsAula03.js';

export default class Aula03 extends Component {

    constructor(props) {
        super(props);

        const dataA = [
            {
                key: '1',
                nome: 'Amanda',
                idade: 22
            }
        ];

        const dataB = [
            {
                key: '2',
                nome: 'Bianca',
                idade: 20
            }, {
                key: '3',
                nome: 'Bruna',
                idade: 23
            }
        ];

        const dataC = [
            {
                key: '4',
                nome: 'Carla',
                idade: 20
            }
        ];

        const dataD = [
            {
                key: '5',
                nome: 'Denis',
                idade: 30
            }, {
                key: '6',
                nome: 'Daniel',
                idade: 29
            }
        ];

        const informacoes = [
            {
                title: 'A',
                data: dataA
            }, {
                title: 'B',
                data: dataB
            }, {
                title: 'C',
                data: dataC
            }, {
                title: 'D',
                data: dataD
            }
        ];

        this.state = {
            dados: informacoes
        };
    }

    render() {

        const {viewAula03} = styles;

        return (
            <View style={viewAula03}>
                <SectionList // Passa as seções criadas através do sections
                    sections={this.state.dados} // Renderiza cada um dos itens */
                    renderItem={({item}) => fRenderItem(item)} // Renderiza a seção
                    renderSectionHeader={({section}) => listSectionRender(section)}/>
            </View>
        );
    }
}
