/**
  * @format
  * @jsx
*/

import React from 'react';

import {Text, TouchableOpacity} from 'react-native';

import {styles} from '../styles/styles.js';

export const fRenderItem = (item) => {

    const {TextitemList, viewList} = styles;

    return (
        <TouchableOpacity style={viewList} onPress={() => alert(item.nome)}>
            <Text style={TextitemList}>{item.nome}</Text>
            <Text style={TextitemList}>{item.idade}
                anos</Text>
        </TouchableOpacity>

    );
}

export const listSectionRender = (section) => {

    const {textSectionList} = styles;

    return (
        <Text style={textSectionList}>Letra: {section.title}</Text>
    );
}
