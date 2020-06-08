import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        backgroundColor: '#CCC'
    },
    viewPrincipalMenu: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoMenu: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0f89b0'
    },
    viewPrincipalBody: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoBase: {
        textAlign: 'center',
        fontSize: 20,
        color: '#100ced',
        margin: 30,
        fontStyle: 'italic'
    },
    viewPrincipalFooter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        backgroundColor: '#00c2f6',
        borderColor: '#234286',
        borderWidth: 1,
        borderRadius: 15
    },
    txtBotao: {
        textAlign: 'center',
        fontSize: 20,
        color: '#100ced',
        padding: 5
    }
});
