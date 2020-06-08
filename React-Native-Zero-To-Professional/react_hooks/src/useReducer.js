import React, {useReducer, useState, useRef} from 'react';

import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

// Lida com as ações
// state -> valor atual, action -> informações que serão enviadas para o dispatch contagem
const reducer = (state, action) => {
  switch (action.type) {
    case 'add_plus':
      return {...state, count: state.count + action.qt};
    case 'add':
      return {...state, count: state.count + 1};
    case 'sub':
      return {...state, count: state.count - 1};
    case 'reset':
      return initialContagem;
  }
};

const initialContagem = {
  count: 0,
};

export default () => {
  // const [contagem, setContagem] = useState(0);

  // Parâmetros useReducer(Quem irá lidar com as ações, valor padrão)
  const [contagem, dispatchContagem] = useReducer(reducer, initialContagem);

  return (
    <View style={styles.container}>
      <Text>Contagem: {contagem.count}</Text>

      <Button
        title="+14"
        onPress={() => {
          dispatchContagem({type: 'add_plus', qt: 14});
        }}
      />

      <Button
        title="+10"
        onPress={() => {
          dispatchContagem({type: 'add_plus', qt: 10});
        }}
      />

      <Button
        title="+"
        onPress={() => {
          dispatchContagem({type: 'add'});
        }}
      />
      <Button
        title="-"
        onPress={() => {
          dispatchContagem({type: 'sub'});
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          dispatchContagem({type: 'reset'});
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
});
