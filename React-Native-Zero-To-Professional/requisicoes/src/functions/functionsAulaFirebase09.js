export const loadList = (AsyncStorage, objeto) => {
    let state = objeto.state;
    if (objeto.state.netStatus == 1) {
        fetch(objeto.url, { method: "GET" })
            .then(r => r.json())
            .then(r => {
                state.tarefas = r.todo;
                state.carregando = false;

                objeto.setState(state);

                let listaTarefas = JSON.stringify(r.todo);
                setItem(AsyncStorage);
            });
    } else {
        getItemAsync(AsyncStorage, objeto);
    }
};

async function setItem(AsyncStorage, listaTarefas) {
    await AsyncStorage.setItem("tarefas", listaTarefas);
}

async function getItemAsync(AsyncStorage, objeto) {
    await AsyncStorage.getItem("tarefas").then(v => {
        let state = objeto.state;
        if (v != "") {
            let tarefasJson = JSON.parse(v);
            state.tarefas = tarefasJson;
        }
        objeto.setState(state);
    });
}
async function getItemAsyncADD(AsyncStorage, objeto) {
    await AsyncStorage.getItem("tarefas").then(v => {
        let state = objeto.state;

        let tarefasJson = JSON.parse(v);
        tarefasJson.push({
            item: objeto.state.input,
            done: "0",
            id: 0,
        });

        state.tarefas = tarefasJson;

        let listaTarefasStr = JSON.stringify(tarefasJson);

        AsyncStorage.setItem("tarefas", listaTarefasStr);
        state.input = "";
        objeto.setState(state);
    });
}

export const recebendoDados = (AsyncStorage, NetInfo, objeto) => {
    NetInfo.addEventListener("connectionChange", info =>
        conEvent(AsyncStorage, objeto, info),
    );

    loadList(AsyncStorage, objeto);
};

export const conEvent = (AsyncStorage, objeto, info) => {
    let state = objeto.state;

    if (info.type == "none") {
        state.netStatus = 0;
    } else {
        state.netStatus = 1;
    }

    objeto.setState(state);

    if (objeto.state.tarefas.length == 0) {
        loadList(AsyncStorage, objeto);
    }
};

export const adicionarItem = (AsyncStorage, objeto) => {
    getItemAsyncADD(AsyncStorage, objeto);

    /*
    if (objeto.state.netStatus == 1) {
        fetch(objeto.url, {
            method: "POST",
            headers: {
                Aceept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                item: texto,
            }),
        })
            .then(r => r.json())
            .then(() => {
                loadList(AsyncStorage, obj);
            });
    } else {
        alert("Não pode adicionar items, pois não tem conexão");
    }*/
};

import { styles } from "../styles/stylesAula03";

export const concluirTarefa = (AsyncStorage, objeto) => {
    const { done, undone } = styles;

    let state = objeto.state;

    let doneTF;

    if (state.escolha == undone) {
        state.escolha = done;
        doneTF = "sim";
    } else if (state.escolha == done) {
        state.escolha = undone;
        doneTF = "nao";
    }

    fetch(objeto.props.url + "/" + objeto.props.data.id, {
        method: "PUT",
        headers: {
            Aceept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            done: doneTF,
        }),
    });

    objeto.setState(state);
};

export const removerTarefa = (AsyncStorage, objeto) => {
    let obj = objeto.props.objeto;

    fetch(objeto.props.url + "/" + objeto.props.data.id, {
        method: "DELETE",
        headers: {
            Aceept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then(r => r.json())
        .then(() => {
            loadList(AsyncStorage, obj);
        });
};

export const mudandoTexto = (texto, objeto) => {
    let state = objeto.state;
    state.input = texto;
    objeto.setState(state);
};

export const sincronizarItem = (AsyncStorage, objeto) => {
    AsyncStorage.getItem("tarefas").then(v => {
        fetch(objeto.props.url + "/sync", {
            method: "POST",
            headers: {
                Aceept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                json: v,
            }),
        })
            .then(r => r.json())
            .then(() => {
                alet("Itens sincronizados com sucesso!");
            });
    });
};
