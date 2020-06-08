import { StyleSheet } from 'react-native';

// Importado a constante tamanhoImagem do componente criado
import { tamanhoImagem } from '../components/ComponentePersonalizado.js'

/*
  Exportando Objeto JSON estilos que irá
  conter um objeto literal
*/
export const styles = StyleSheet.create({
    // Objeto literal "texto"
    texto:{
      // Chave:valor do objeto literal
      fontSize: 30,
    },

    textoAula03: {
      /*
        O celular é quem irá definir o que o número
        implementado como medida quer dizer...
        No celular é medido em pontos...
        Não tem unidade de medida...
      */
      fontSize: 25,
      fontWeight: 'bold',
      color: 'red',
      margin: 20
    },

    /*
      Propriedade que é chamada pela imagem, e
      envia as chaves height e width para a imagem
      e ela é renderizada na tela, com o tamanho definido
      no valor após a implementação das chaves (:____...).
    */
    estiloImagem: {
      /*
        Seu conteúdo sendo um objeto literal
        suas chaves podem ser acessadas...
        Recuperando os valores contidos em
        cada chave, e o introduzindo nas chaves
        de estilo "width" e "height"
      */
      width: tamanhoImagem.largura,
      height: tamanhoImagem.altura,
    },

    viewApp5: {
      /*
        Espaçamento de 20 em cima...
        Tudo o que estiver dentro do View começará
        a partir do espaçamento
      */
      paddingTop: 20,
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    textoAula05: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      color: 'red',
      justifyContent: 'center'
    },

    texoStateAula05: {
      fontSize: 20,
      textAlign: 'center',
      justifyContent: 'center'
    },

    textoAzul: {
      fontSize: 40,
      color: "#0000FF",
      fontWeight: 'bold',
      textAlign: 'center',

    },

    textoVermelho: {
      fontSize: 15,
      fontWeight: 'bold',
      color: "#FF0000",

    },

    view1App7: {
      /*
        Tamanhos fixos
          width: 50,
      */
          height: 70,

      //  Tamanhos Dinâmicos
      flex: 1,
      backgroundColor: '#000',
    },

    view2App7: {
      /*
        Tamanhos fixos
          width: 100,
          height: 100,
      */
      // Tamanho Dinâmico
      flex: 1,
      backgroundColor: 'white',
    },

    view3App7: {
      /*
        Tamanhos fixos
          width: 200,
      */
          height: 40,

      // Tamanho Dinâmico
      //flex: 2,
      backgroundColor: 'red',
    },

    viewFlex: {
      backgroundColor: 'green',
      flex: 1
    },

    view4App7: {
      backgroundColor: 'yellow',
      flex: 1,
    },

    viewPrincipal: {
      /*
        Faz com que o componente cujo estilo está sendo aplicado
        Ocupe 1 espaço de 1
      */
      flex: 1,
      backgroundColor: '#ccc',

    },

    viewPrincipalApp8: {
      flex: 1,
      backgroundColor: '#ccc',
      /* Direção de alinhamento dos componentes modificado para as colunas
          flexDirection: 'column'

        Direção de alinhamento dos componentes modificado para as linhas
          flexDirection: 'row'
      */
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },

    viewQuadrado: {
      //flex: 1,
      width: 50,
      height: 50,
      backgroundColor: 'blue',
    },

    viewQuadrado2: {
      //flex: 1,
      width: 50,
      height: 50,
      backgroundColor: 'red',
    },

    viewQuadrado3: {
      //flex: 1,
      width: 50,
      height: 50,
      backgroundColor: 'green',
    },

    viewPrincipalApp8: {
      flex: 1,
    },

    input: {
      height: 40,
      // Cria uma altura para a borda
      borderWidth: 1,
      // Gera uma cor para a borda
      borderColor: '#1552d2',
      margin: 10,
      padding: 10,
    },

    txtNome: {
      fontSize: 20,
      fontWeight: '200',
    },

    styBtnNome: {
      backgroundColor: '#07e3e9',
      height: 10,
      width: 10,
    },

    textoResposta: {
      fontSize: 20,
      textAlign: 'center',
      color: '#004388',
      fontWeight: 'bold',
    },

    viewPrincipalApp10: {
      flex: 1,
    },

    viewPrincipalApp11: {
      flex: 1,
    },

    inputNome: {
      height: 40,
      // Cria uma altura para a borda
      borderWidth: 1,
      // Gera uma cor para a borda
      borderColor: '#f70a0a',
      margin: 10,
      padding: 10,
      backgroundColor: '#0bf7e9',
      color: '#f70a0a'
    },

    txtNomeState: {
      fontSize: 40,
      fontWeight: '100',
      color: '#1ccf43',
      textAlign: 'center',
    },

    txtNomeAdivinhadosState : {
      fontSize: 25,
      fontWeight: '400',
      color: '#2689a8',
      marginTop: 10,
      textAlign: 'center',
    },

});
