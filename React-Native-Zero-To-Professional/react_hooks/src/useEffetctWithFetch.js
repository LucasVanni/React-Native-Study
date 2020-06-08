import React, {useState, useEffect} from 'react';

import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';

export default () => {
  const [filmes, setFilmes] = useState([]);

  const getFilmes = async () => {
    const res = await fetch('https://alunos.b7web.com.br/cinema/');

    const json = await res.json();

    setFilmes(json);
  };

  useEffect(() => getFilmes(), []);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Seja Bem Vindo(a)</Text>
      <FlatList
        style={styles.list}
        data={filmes}
        renderItem={({item}) => {
          <View>
            <Image source={{uri: item.avatar}} style={styles.img} />
            <Text style={styles.title}>{item.titulo}</Text>
          </View>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 23,
  },
  input: {
    backgroundColor: '#eee',
    width: 150,
  },
  list: {
    flex: 1,
  },

  img: {
    width: 100,
    height: 200,
  },
  title: {
    fontSize: 17,
    marginTop: 10,
  },
});
