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

export const cadastrar = (objeto, firebase) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(objeto.state.email, objeto.state.senha)
        .catch(error => {
            switch (error.code) {
                case "auth/invalid-email":
                    alert("Verifique se o e-mail foi digitado corretamente...");
                    break;
                case "auth/weak-password":
                    alert(
                        "Sua senha deve ter pelo menos 6 (seis) caracteres...",
                    );
                    break;
                case "auth/email-already-in-use":
                    alert(
                        "O e-mail digitado jรก estรก cadastrado em nossa base de dados...",
                    );
                    break;
                default:
                    alert(
                        `Cรณdigo do erro: \n ${
                            error.code
                        } \n\n Mensagem do erro: \n "${error.message}"`,
                    );
                    break;
            }
        });

    alert("Usuรกrio cadastrado com sucesso...");
};
