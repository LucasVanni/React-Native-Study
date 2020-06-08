import React, {Component} from 'react';

import {styles} from './src/styles/styles.js';

import {View} from 'react-native';

import Menu from './src/components/menu.js';

import Footer from './src/components/footer.js';

import Body from './src/components/body.js';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            texto: "Frases do Dia..."
        };
    }

    render() {

        const {viewPrincipal} = styles;

        return (
            <View style={viewPrincipal}>
                <Menu/>
                <Body this={this}/>
                <Footer this={this}/>
            </View>
        );
    }
}
