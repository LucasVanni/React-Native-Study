import React from 'react';

import {View, TouchableOpacity, Text, Image} from 'react-native';

import {styles} from '../styles/styles.js';

export const renderizadoraItens = (item) => {

    const {flatItem, flatNome, flatIdade, flatImagem, flexItemTexto} = styles;

    return (
        <TouchableOpacity style={flatItem} onPress={() => alert(item.nome)}>
            <Image source={item.uri} style={flatImagem}/>
            <View style={flexItemTexto}>
                <Text style={flatNome}>{item.nome}</Text>
                <Text style={flatIdade}>{item.idade}</Text>
                <Text style={flatIdade}>{item.type}</Text>
            </View>
        </TouchableOpacity>
    );
}
