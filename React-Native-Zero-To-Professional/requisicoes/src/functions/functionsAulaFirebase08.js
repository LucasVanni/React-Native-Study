export const emailDigitado = (texto, objeto) => {
    let state = objeto.state;
    state.email = texto;
    objeto.setState(state);
};

export const senhaDigitada = (texto, objeto) => {
    let state = objeto.state;
    state.senha = texto;
    objeto.setState(state);
};

// Opção 1
export const logar1 = (firebase, objeto) => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            firebase
                .database()
                .ref("usuarios")
                .child(user.uid)
                .once("value", snapshot => {
                    objeto.props.navigation.navigate("Home", {
                        nome: snapshot.val().nome,
                    });
                });
        }
    });

    firebase
        .auth()
        .signInWithEmailAndPassword(objeto.state.email, objeto.state.senha)
        .catch(error => {
            alert(error.code);
        });
};

// Opçao2
export const logar2 = (addAuthListener, loginEP, objeto, getUserInfo, rota) => {
    addAuthListener(user => userAuth(user, getUserInfo, objeto, rota)),
        loginEP(objeto.state.email, objeto.state.senha).catch(error =>
            errorEP(error),
        );
};

const errorEP = error => {
    alert(error.code);
};

const userAuth = (user, getUserInfo, objeto, rota) => {
    if (user) {
        getUserInfo(info =>
            objeto.props.navigation.navigate(rota, { nome: info.val().nome }),
        );
    }
};

export const verificadorUsuarioLogado = (firebase, objeto) => {
    if (firebase.auth().currentUser) {
        firebase
            .database()
            .ref("usuarios")
            .child(firebase.auth().currentUser.uid)
            .once("value")
            .then(snapshot => {
                let state = objeto.state;
                state.nome = snapshot.val().nome;
                objeto.setState(state);
            });
    }
};
