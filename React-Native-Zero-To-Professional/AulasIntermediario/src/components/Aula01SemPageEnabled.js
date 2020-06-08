import React, {Component} from 'react';

import {View, ScrollView} from 'react-native';

import {styles} from '../styles/styles.js';

export default class Aula01SemPageEnabled extends Component {

    render() {

        const {
            quadrado1,
            quadrado2,
            quadrado3,
            quadrado4,
            viewScrool2,
            viewAula01SemPaginaEnabled
        } = styles;

        return (
            <View style={viewAula01SemPaginaEnabled}>
                <ScrollView pagingEnabled={false} style={viewScrool2}>
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
