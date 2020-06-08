import React, { Component } from "react";

import { View, FlatList } from "react-native";

import { styles } from "../styles/styles.js";

import Lista from "../componentes/Lista.js";

export default class HomeList extends Component {
  constructor(props) {
    super(props);

    const imgBebidas = require("../images/tipos/bebidas.png");
    const imgCaipirosca = require("../images/cardapio/bebidas/capirosc_3.png");
    const imgCookie = require("../images/cardapio/bebidas/cookies_crea.png");
    const imgBatidaMorango = require("../images/cardapio/bebidas/morango_gd.png");
    const imgBatidaLaranja = require("../images/cardapio/bebidas/patra.png");
    const imgSucoFitness = require("../images/cardapio/bebidas/suco_fitines_gd.png");

    const imgPratoFeito = require("../images/tipos/pe.png");
    const imgFrango = require("../images/cardapio/pe/executivos_frang_.png");
    const imgPicanha = require("../images/cardapio/pe/executivos_peix_.png");
    const imgPeixe = require("../images/cardapio/pe/executivos_picanh_.png");

    const imgSaladas = require("../images/tipos/saladas.png");
    const imgSldFrango = require("../images/cardapio/saladas/salada-fr.png");
    const imgSAguaDoce = require("../images/cardapio/saladas/salada_aguadoc_.png");
    const imgSalmao = require("../images/cardapio/saladas/salada_salma.png");

    const imgSobremesa = require("../images/tipos/sobremesa.png");
    const imgBrownie = require("../images/cardapio/sobremesas/brownie_gd.png");
    const imgPapaya = require("../images/cardapio/sobremesas/creme_papaya_cassis_gd.png");
    const imgdlcGelada = require("../images/cardapio/sobremesas/delicia_gelada_gd.png");

    const tipos = [
      {
        key: 1,
        title: "Pratos Feitos",
        img: imgPratoFeito,
        description: "Pratos já prontos para comer",
        bg: "#e35339",
        products: [
          {
            key: 1,
            name: "Prato de Frango",
            img: imgFrango
          },
          {
            key: 2,
            name: "Prato de Peixe",
            img: imgPeixe
          },
          {
            key: 3,
            name: "Prato de Picanha",
            img: imgPicanha
          }
        ]
      },
      {
        key: 2,
        title: "Saladas",
        img: imgSaladas,
        description: "Pratos saudáveis para você",
        bg: "#a6bb24",
        products: [
          {
            key: 1,
            name: "Salada de Frango",
            img: imgSldFrango
          },
          {
            key: 2,
            name: "Salada Água Doce",
            img: imgSAguaDoce
          },
          {
            key: 3,
            name: "Salada de Salmão",
            img: imgSalmao
          }
        ]
      },
      {
        key: 3,
        title: "Bebidas",
        img: imgBebidas,
        description: "Refrescos para você",
        bg: "#079ed4",
        products: [
          {
            key: 1,
            name: "Caipirosca",
            img: imgCaipirosca
          },
          {
            key: 2,
            name: "Cookie Cream",
            img: imgCookie
          },
          {
            key: 3,
            name: "Batida de Morango",
            img: imgBatidaMorango
          },
          {
            key: 4,
            name: "Batida de Laranja",
            img: imgBatidaLaranja
          },
          {
            key: 5,
            name: "Suco Fitness",
            img: imgSucoFitness
          }
        ]
      },
      {
        key: 4,
        title: "Sobremesa",
        img: imgSobremesa,
        description: "A melhor sobremesa do seu dia",
        bg: "#fcb81c",
        products: [
          {
            key: 1,
            name: "Brownie",
            img: imgBrownie
          },
          {
            key: 2,
            name: "Creme de Papaya",
            img: imgPapaya
          },
          {
            key: 3,
            name: "Delícia Gelada",
            img: imgdlcGelada
          }
        ]
      }
    ];

    this.state = { tipos };
  }

  render() {
    const { viewHomeList } = styles;

    return (
      <View style={viewHomeList}>
        <FlatList
          data={this.state.tipos}
          renderItem={({ item }) => (
            <Lista data={item} navigation={this.props.navigation} />
          )}
          keyExtractor={item => item.key.toString()}
        />
      </View>
    );
  }
}
