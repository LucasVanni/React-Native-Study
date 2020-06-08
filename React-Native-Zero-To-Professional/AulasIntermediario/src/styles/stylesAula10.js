import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
    viewAula10: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3ca0a3'
    },
    txtPlat: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        // Se o sistema for android o app atribuirá a cor #4b1a78, se for IOS ele
        // atribuirá a cor '#8a4c30'
        color: (Platform.OS === 'android')
            ? '#4b1a78'
            : '#8a4c30'
    },
    txtPlat2: Platform.select({
        ios: {
            fontSize: 16,
            color: '#00f'
        },
        android: {
            fontSize: 32,
            color: '#4b1a78',
            fontWeight: 'bold'
        }
    })
});
