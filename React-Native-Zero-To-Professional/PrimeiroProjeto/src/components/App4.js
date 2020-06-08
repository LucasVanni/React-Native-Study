import React, { Component } from "react";

import ComponentePersonalizado from "./ComponentePersonalizado.js";

export default class QuartaAula extends Component {
  render() {
    // Variável nome criada
    const nome = "albert";

    /*
          Variável imagem criada, contendo o link juntamente
          com a variável nome no meio do link, o que possibilita
          que uma imagem possa ser inserida dinâmicamente, por conta
          de possíbilitar a interação com as variáveis.
      */
    const imagem = `https://abrilsuperinteressante.files.wordpress.com/2018/07/565dcdfe0e2163330400bf82${nome}-einstein-2071-hd-wallpapers.jpeg?quality=70&strip=info`;

    /*
        Variável "imagemEinstein" é criada contendo um objeto
        que irá conter a chave uri e o conteúdo da variável imagem.
      */
    const imagemEinstein = {
      uri: imagem
    };

    return (
      /*
        Componente criado que passa as propriedades "nomeEnviado" e "imagemEnviada"
         para o componente, contendo o conteúdo da variável "nome" e o conteúdo
         da variável "imagemEinstein"
      */ <ComponentePersonalizado
        nomeEnviado={nome}
        imagemEnviada={imagemEinstein}
      />
    );
  }
}
