import React, {Component} from 'react';

import {View, Modal, Text, Button} from 'react-native';

import {styles} from '../styles/stylesAula07.js';

export default class Aula07 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        };
    }

    render() {

        const {viewAula07, viewModal} = styles;

        return (
            <View style={viewAula07}>
                <Modal animationType="slide" visible={this.state.modalVisible}>
                    <View style={viewModal}>
                        <Text>Testando Modal</Text>
                        <Button
                            title="Fechar Modal"
                            onPress={() => this.setState({modalVisible: false})}/>
                    </View>
                </Modal>

                <Button
                    title="Abrir Modal"
                    onPress={() => this.setState({modalVisible: true})}/>
            </View>
        );
    }
}
