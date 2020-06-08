export const receberEmail = (email, objeto) => {
    let state = objeto.state;
    state.email = email;
    objeto.setState(state);
};

export const receberSenha = (senha, objeto) => {
    let state = objeto.state;
    state.senha = senha;
    objeto.setState(state);
};

export const logar = (objeto, firebase) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(objeto.state.email, objeto.state.senha)
        .catch(error => {
            switch (error.code) {
                case "auth/invalid-email":
                    alert(
                        "O e-mail inserido é inválido ou não foi preenchido corretamente..",
                    );
                    break;
                case "auth/wrong-password":
                    alert(
                        "A senha não foi digitada corretamente, tente novamente..",
                    );
                    break;
                case "auth/user-not-found":
                    alert("Usuário não encontrado...");
                    break;
                default:
                    alert(
                        `Código do erro: \n ${
                            error.code
                        } \n\n Mensagem do erro: \n "${error.message}"`,
                    );
            }
        });
};

export const deslogar = (objeto, firebase) => {
    firebase.auth().signOut();
    alert("Usuário deslogado com sucesso...");
};
