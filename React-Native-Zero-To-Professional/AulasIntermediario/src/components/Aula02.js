import React, {Component} from 'react';

import {View, FlatList} from 'react-native';

import {styles} from '../styles/styles.js';

import {renderizadoraItens} from '../functions/functionsAula02.js';

export default class Aula02 extends Component {

    constructor(props) {
        super(props);

        const imagemUser = {
            uri: `https://image.flaticon.com/icons/png/512/10/10938.png`
        };

        // Key serve para que o FlatList saiba qual item foi clicado...
        const info = [
            {
                key: '0',
                uri: imagemUser,
                nome: 'User1',
                idade: 22,
                type: 'foto'
            }, {
                key: '1',
                uri: imagemUser,
                nome: 'User2',
                idade: 32,
                type: 'video'
            }, {
                key: '2',
                uri: imagemUser,
                nome: 'User3',
                idade: 26,
                type: 'foto'
            }
        ];

        // Os dados são armazenados dentro do State...
        this.state = {
            dados: info
        };

    }

    render() {

        const {viewAula02, flatList} = styles;

        return (
            <View style={viewAula02}>
                {/*
          Possui no mínimo dois parâmetros...
          Uma é a data={} e a outra é a renderItem={}
          É uma listagem como o scroll view, porém é
          uma listagem ordenada...
          Pode ter centenas de itens, porém só carrega os,
          itens a vista...
          O que não está na tela não serão carregados na memória...

          data={} -> É recebido todas as informações... É criado um JSON, que
          levará as informações... Terá todos os itens que serão exibidos...
          Guarda as informações a serem exibidas...

          renderItem={} -> Irá executar quantas vezes forem necessárias para que
          os itens, presentes no data={} apareçam na tela...
          Renderiza os componentes que vão sendo exibidos na ordem...

          removeClippedSubviews={false}
          maxToRenderPerBatch={10}
          windowSize={21}
          legacyImplementation={false}
        */}
                <FlatList
                    data={this.state.dados}
                    renderItem={({item}) => renderizadoraItens(item)}
                    style={flatList}/>
            </View>
        );
    }
}
