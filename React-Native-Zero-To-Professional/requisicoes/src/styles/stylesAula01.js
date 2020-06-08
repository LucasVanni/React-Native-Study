import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  viewListaFilmes: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  txtTituloConteudo: {
    fontSize: 20,
    color: "#4682B4"
  },
  txtRYConteudo: {
    color: "#B0C4DE"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  description: {
    fontSize: 15,
    fontWeight: "bold"
  },
  carregando: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txtCarregando: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
