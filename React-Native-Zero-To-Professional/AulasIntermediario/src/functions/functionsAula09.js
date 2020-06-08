import AsyncStorege from '@react-native-community/async-storage';

export const recuperarNomeDigitado = (objeto, nome) => {
    let obj = objeto.state;

    obj.nome = nome;

    // Salva a informação digitada na variável nome...
    AsyncStorege.setItem("nome", nome);
    objeto.setState(obj);
};

export const getItem = (objeto) => {
    return (
    // Recupera o valor digitado identificado como "nome" no AsyncStorege
    AsyncStorege.getItem("nome").then((value) => {
        let obj = objeto.state;
        obj.nome = value;
        objeto.setState(obj);
    }));
};
