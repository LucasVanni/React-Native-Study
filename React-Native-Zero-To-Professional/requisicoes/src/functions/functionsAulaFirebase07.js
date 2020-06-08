import { fire } from "./functionsAulaFirebase06";

export const redefinirSenha = (objeto, Nav, firebase) => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            user.updatePassword(objeto.state.senha);
            alert("Senha alterada com sucesso...");
        }
    });

    firebase.auth().signOut();

    Nav.popToTop();
};

export const receberNovaSenha = (texto, objeto) => {
    let state = objeto.state;
    state.senha = texto;
    objeto.setState(state);
};
