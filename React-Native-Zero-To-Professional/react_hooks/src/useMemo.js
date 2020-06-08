import React, {useState, useMemo} from 'react';

import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default Aula01 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const countString = str => {
    return str.length;
  };

  // Função que quero rodar, variável que eu quero monitorar
  const countedName = useMemo(() => countString(name), [name]);

  const countedEmail = useMemo(() => countString(email), [email]);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Seja Bem Vindo(a)</Text>

      <Text>Nome: </Text>

      <TextInput
        onChangeText={text => setName(text)}
        value={name}
        style={styles.input}
      />
      <Text>{countedName} letras</Text>

      <Text>Email: </Text>

      <TextInput
        onChangeText={text => setEmail(text)}
        value={email}
        style={styles.input}
      />

      <Text>{countedEmail} letras</Text>
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
