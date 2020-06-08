import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        backgroundColor: "#ccc",
    },
    textItemRecebido: {
        fontSize: 20,
        textAlign: "center",
    },
    viewItemRecebido: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    carregando: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    txtCarregando: {
        fontSize: 20,
        fontWeight: "bold",
    },
    viewAddArea: {
        flex: 1,
    },
    viewTxtInput: {
        flex: 2,
        backgroundColor: "#ccc",
        justifyContent: "center",
    },
    textInput: {
        borderColor: "#20B2AA",
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 20,
        paddingHorizontal: 20,
    },
    txtTextInput: {
        fontSize: 20,
        marginBottom: 10,
        color: "#0000EE",
    },
    viewBotao: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    toAddItem: {
        borderColor: "#20B2AA",
        backgroundColor: "#0000EE",
        borderWidth: 2,
        borderRadius: 20,
    },
    txtInserirDados: {
        fontSize: 18,
        margin: 10,
        color: "#20B2AA",
        textAlign: "center",
    },
    flatList: {
        flex: 3,
    },
    textoItemConcluido: {
        fontSize: 10,
    },
    areaBotoes: {
        flexDirection: "row",
        flex: 1,
    },
    viewInternoListaTarefas: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    toConcluirTarefa: {
        borderColor: "#0000EE",
        borderWidth: 2,
        borderRadius: 25,
        flex: 1,
        margin: 20,
        borderWidth: 2,
        borderRadius: 20,
    },
    done: {
        backgroundColor: "#32CD32",
    },
    undone: {
        backgroundColor: "#DDD",
    },
    toRemovItem: {
        borderColor: "#20B2AA",
        margin: 20,
        borderWidth: 2,
        borderRadius: 20,
    },
    viewRemovItem: {
        flex: 1,
    },
    viewtxtRecebido: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    viewConcluirTarefa: {
        flex: 1,
    },
    txtRemovDados: {
        fontSize: 18,
        margin: 10,
        color: "#20B2AA",
        textAlign: "center",
    },
});
