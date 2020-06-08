import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    view: {
        height: 240,
        backgroundColor: "#EEE",
        margin: 10,
        padding: 10,
    },
    form: {
        flex: 1,
        flexDirection: "row",
    },
    formAvatar: {
        width: 100,
        height: 100,
        backgroundColor: "#CCC",
    },
    formInfo: {
        flexDirection: "column",
        flex: 1,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: "#000",
        margin: 5,
    },
    image: {
        flexDirection: "column",
    },
});
