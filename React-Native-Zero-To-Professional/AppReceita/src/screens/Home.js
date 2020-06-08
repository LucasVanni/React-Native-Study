import React, { Component } from "react";

import { View, FlatList } from "react-native";

import { styles } from "../styles/styles.js";

import ListaItemsReceita from "../components/ListaItemsReceita";
import { exibirReceita } from "../functions/functions.js";

export default class Home extends Component {
  constructor(props) {
    super(props);

    const ChocolateQuente = require("../images/ChocolateCremoso.jpg");
    const Pudim = require("../images/Pudin.png");

    const lista = [
      {
        key: 1,
        nome: "CHOCOLATE QUENTE",
        img: ChocolateQuente,
        descricao: "Este é o melhor chocolate quente",
        rendimento: 50,
        preparo: 60,
        ingredientes: [
          { key: 1, txt: "2 xícaras (chá) de leite" },
          { key: 2, txt: "1 colher (sopa) de amido de milho" },
          { key: 3, txt: "3 colheres (sopa) de chocolate em pó" },
          { key: 4, txt: "4 colheres (sopa) de açúcar" },
          { key: 5, txt: "1 canela em pau" },
          { key: 6, txt: "1 caixinha de creme de leite" }
        ],
        modoPreparo: [
          {
            key: 1,
            txt:
              "Em um liquidificador, bata o leite, o amido de milho, o chocolate em pó e o açúcar."
          },
          {
            key: 2,
            txt:
              "Despeje a mistura em uma panela com a canela e leve ao fogo baixo, mexendo sempre até ferver."
          },
          {
            key: 3,
            txt:
              "Desligue, adicione o creme de leite e mexa bem até obter uma mistura homogênea."
          },
          { key: 4, txt: "Retire a canela e sirva quente" }
        ]
      },
      {
        key: 2,
        nome: "PUDIM DE LEITE EM PÓ",
        descricao: "Este é o melhor pudim de leite",
        rendimento: 20,
        preparo: 0,
        img: Pudim,
        ingredientes: [
          { key: 1, txt: "3 ovos inteiros" },
          { key: 2, txt: "16 colheres (sopa) de leite em pó" },
          { key: 3, txt: "10 colheres (sopa) de açúcar" },
          { key: 4, txt: "4 xícaras de água" },
          { key: 5, txt: "Caramelo" },
          { key: 6, txt: "2 xícaras de açucar" },
          { key: 7, txt: "1 xícara de água" }
        ],
        modoPreparo: [
          {
            key: 1,
            txt: "Bata todos os ingredientes no liquidificador e reserve."
          },
          { key: 2, txt: "Calda:" },
          {
            key: 3,
            txt: "Misture em uma panela o açúcar e a água e leve ao fogo."
          },
          {
            key: 4,
            txt:
              "Não volte a mexer até que a calda chegue no ponto de caramelo, desligue o fogo."
          },
          {
            key: 5,
            txt:
              "Unte uma forma (com a calda) própria para pudim em microondas."
          },
          {
            key: 6,
            txt:
              "Coloque a mistura que foi batida no liquidificador, levando ao forno até dourar."
          }
        ]
      }
    ];

    this.state = { listaDeReceitas: lista };
  }

  render() {
    const { viewPrincipal } = styles;

    return (
      <View style={viewPrincipal}>
        <FlatList
          data={this.state.listaDeReceitas}
          renderItem={({ item }) => (
            <ListaItemsReceita
              data={item}
              onPress={() => exibirReceita(this.props.navigation, item)}
            />
          )}
          keyExtractor={item => item.key.toString()}
        />
      </View>
    );
  }
}
