import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  viewAppJSPrincipal: {
    flex:1,
    backgroundColor: '#4220e6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewMenu: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  viewInterior: {
    flex: 3
  },
  textoNomeApp: {
    fontSize: 45,
    fontWeight: 'normal',
    color: '#f0f0f0',
  },
  dataInput: {
      height: 40,
      // Cria uma altura para a borda
      borderWidth: 1,
      // Gera uma cor para a borda
      borderColor: '#999',
      backgroundColor: '#EEE',
      color: '#000',
      margin: 20,
      padding: 10,
  },
  imagem:{
    height: 220,
    width: 350,
    zIndex: 0,
  },
  TextoMemeCima: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#f0f0f0',
    zIndex: 1,
  },
  TextoMemeBaixo: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#f0f0f0',
    marginTop: 190,
    paddingBottom: 10,
    zIndex: 1,
  },
  TextoMeme: {
    position: 'absolute',
    alignSelf: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 23,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});
