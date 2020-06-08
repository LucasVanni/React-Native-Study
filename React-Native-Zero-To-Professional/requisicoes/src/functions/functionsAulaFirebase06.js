export const receberEmail = (email, objeto) => {
    const state = objeto.state;
    state.email = email;
    objeto.setState(state);
};

export const receberSenha = (senha, objeto) => {
    const state = objeto.state;
    state.senha = senha;
    objeto.setState(state);
};

export const receberNome = (nome, objeto) => {
    const state = objeto.state;
    state.nome = nome;
    objeto.setState(state);
};

export const logar = (objeto, thisPrincipal, firebase) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(
            thisPrincipal.state.email,
            thisPrincipal.state.senha,
        )
        .catch(error => {
            switch (error.code) {
                case "auth/user-not-found":
                    alert(
                        "Não temos registro deste usuário em nosso sistema...",
                    );
                    break;
                case "auth/email-already-exists":
                    alert(
                        "O email que está tentando efetuar o cadastro já existe...",
                    );
                    break;
                case "auth/network-request-failed":
                    alert(
                        "Falha na conexão... Verifique se sua internet está ativa...",
                    );
                    break;
                case "auth/wrong-password":
                    alert(
                        "Senha incorreta, verifique se está sendo inserida corretamente...",
                    );
                    break;
                case "auth/invalid-email":
                    alert(
                        "O e-mail está inválido, verifique se foi digitado corretamente...",
                    );
                    break;
                default:
                    alert(error.code);
                    break;
            }
        });

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            objeto.props.navigation.navigate("InformacoesUsuario", {
                email: thisPrincipal.state.email,
                objeto: objeto.props.this,
                senha: thisPrincipal.state.senha,
            });
        }
    });
};

export const irParaCadastrar = (navigation, email, senha) => {
    navigation.navigate("TelaCadastro", {
        email: email,
        senha: senha,
    });
};

export const cadastrar = (objeto, firebase) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(objeto.state.email, objeto.state.senha)
        .catch(
            error => {
                console.log(error);
                switch (error.code) {
                    case "auth/invalid-email":
                        alert(
                            "Verifique se o e-mail foi digitado corretamente...",
                        );
                        break;
                    case "auth/weak-password":
                        alert(
                            "Sua senha deve ter pelo menos 6 (seis) caracteres...",
                        );
                        break;
                    case "auth/email-already-in-use":
                        alert(
                            "O e-mail digitado já está cadastrado em nossa base de dados...",
                        );
                        break;
                    case "auth/network-request-failed":
                        alert(
                            "Falha na conexão... Verifique se sua internet está ativa...",
                        );
                        break;
                    default:
                        alert(
                            `Código do erro: \n ${
                                error.code
                            } \n\n Mensagem do erro: \n "${error.message}"`,
                        );
                        break;
                }
            },
            //       alert("Usuário criado com sucesso");
            //     objeto.props.navigation.navigate("InformacoesUsuario");
        );
};

export const deslogar = (objeto, firebase) => {
    firebase.auth().signOut();
    alert("User disconnected");

    objeto.props.navigation.navigate("TelaLogar");
};

export const textInputFunc = (item, objeto) => {
    let state = objeto.props.this.state;
    state.addItemTxt = item;
    objeto.props.this.setState(state);
};

export const add = (uid, addItemTxt, firebase) => {
    if (uid != "" && addItemTxt != "") {
        let todo = firebase
            .database()
            .ref("todo")
            .child(uid);

        let chave = todo.push().key;

        todo.child(chave).set({
            titulo: addItemTxt,
        });
    }
};

export const addItemLista = (firebase, objeto) => {
    firebase
        .database()
        .ref("todo")
        .child(objeto.state.uid)
        .on("value", snapshot => {
            let state = objeto.state;
            state.lista = [];

            snapshot.forEach(filho => {
                state.lista.push({
                    titulo: filho.val().titulo,
                    key: filho.key,
                });
            });
            objeto.setState(state);
        });
};

// Pegar o uid do usuário e associar indiretamente a estrutura do banco de dados...
export const fire = (firebase, objeto) => {
    firebase.auth().onAuthStateChanged(user => {
        // Quando uma pessoa é cadastrada, automaticamente é efetuado seu login no sistema...

        if (user) {
            let state = objeto.state;
            state.uid = user.uid;
            objeto.setState(state);

            firebase
                .database()
                .ref("usuarios")
                .child(user.uid)
                .once("value")
                .then(snapshot => {
                    let nome = snapshot.val().nome;
                    alert(`Seja Bem Vindo(a), ${nome}`);
                });
            addItemLista(firebase, objeto);
        }
    });
};

export const mudarDados = (objeto, thisPrincipal, email, senha) => {
    objeto.props.navigation.navigate("AulaFirebase07", {
        email,
        thisPrincipal,
        senha,
    });
};

export const verificador = (firebase, objeto) => {
    // Para deslogar a pessoa, é necessário utilizar a seguinte função...
    firebase.auth().signOut();

    /*
     Cria um listener para verificar mudan?as de estado do usu?rio...
     Se ele logou ou deslogou
    */
    firebase
        .auth()
        .signInWithEmailAndPassword(objeto.state.email, objeto.state.senha)
        .catch(error => {});
};
