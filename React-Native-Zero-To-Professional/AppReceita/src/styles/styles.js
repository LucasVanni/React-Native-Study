import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1
  },
  viewItems: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  th: {
    flex: 1,
    margin: 30,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 40,
    backgroundColor: "#ccc"
  },
  imgReceita: {
    width: 60,
    height: 60,
    borderRadius: 40
  },
  txtTitulo: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 30
  },
  txtRendPrep: {
    fontSize: 15,
    textAlign: "center",
    color: "#6E7B8B"
  },
  viewListaItems: {
    flex: 1,
    backgroundColor: "#fff"
  },
  viewReceitas: {
    flex: 1
  },

  viewConteudoReceita: {
    flex: 9
  },

  viewTxt: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  viewImg: {
    flex: 1
  },
  touchVoltar: {
    marginLeft: 10,
    marginTop: 5
  },
  viewVoltar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  imgVoltar: {
    height: 40,
    width: 40
  },
  viewPrincipalReceitas: {
    flex: 1
  },
  viewGeralTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  viewTituloResumo: {
    flex: 1,
    justifyContent: "flex-start"
  },
  viewDescricao: {
    flex: 9,
    justifyContent: "center"
  },
  txtTituloResumo: {
    fontSize: 20,
    fontWeight: "bold"
  },
  txtDescricao: {
    fontSize: 20
  },
  viewIngredientes: {
    flex: 1
  },
  txtIngredientes: {
    fontSize: 20,
    fontWeight: "bold"
  },
  txtConteudoIngredientes: {
    fontSize: 15
  },
  viewConteudoIngredientes: {
    flex: 9
  },

  viewPreparo: {
    flex: 1
  },
  txtTituloPreparo: {
    fontSize: 20,
    fontWeight: "bold"
  },
  viewConteudoPreparo: {
    flex: 9
  },
  txtPreparo: {
    fontSize: 15,
    margin: 20
  }
});
