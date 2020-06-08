import React, {Component} from 'react';

import {View, ScrollView} from 'react-native';

import {styles} from '../styles/styles.js';

export default class Aula01 extends Component {

    render() {

        const {
            quadrado1,
            quadrado2,
            quadrado3,
            quadrado4,
            viewAula01ComPaginaEnabled,
            viewScrool1
        } = styles;

        return (
            <View style={viewAula01ComPaginaEnabled}>
                <ScrollView pagingEnabled={true} style={viewScrool1}>
                    <View style={quadrado1}/>
                    <View style={quadrado2}/>
                    <View style={quadrado3}/>
                    <View style={quadrado4}/>
                    <View style={quadrado1}/>
                    <View style={quadrado2}/>
                    <View style={quadrado3}/>
                    <View style={quadrado4}/>
                </ScrollView>
            </View>
        );
    }
}
