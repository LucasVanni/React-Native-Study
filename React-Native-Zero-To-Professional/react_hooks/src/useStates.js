import React, {useState, useEffect, useRef} from 'react';

import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

import SubName from './components/submitname';

import useCharLimit from './hooks/useCharLimit';

export default Aula01 = () => {
  const [name, setName] = useCharLimit('', 10);
  const [name2, setName2] = useCharLimit('', 10);

  const txt = useRef();

  const txt2 = useRef();

  // Roda quando tiver qualquer tipo de alteração nos componentes
  // Para rodar uma vez na criação dos componentes é só colocar um array vazio como segundo parâmetro
  useEffect(() => {
    //txt.current.focus();
  }, []);

  const handleButtonClick = () => {
    SubName(name, setName);
  };

  const handleFocusClick = () => {
    txt.current.focus();
  };

  const handleBlurClick = () => {
    txt.current.blur();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Seja Bem Vindo(a)</Text>

      <TextInput
        ref={txt}
        returnKeyType="next"
        onSubmitEditing={() => txt2.current.focus()}
        style={styles.input}
        onChangeText={text => setName(text)}
        value={name}
      />

      <TextInput
        ref={txt2}
        style={styles.input}
        enablesReturnKeyAutomatically={true}
        onChangeText={text => setName2(text)}
        value={name2}
      />

      <Button title="Enviar" onPress={handleButtonClick} />

      <Button title="Focar" onPress={handleFocusClick} />

      <Button title="Desfocar" onPress={handleBlurClick} />
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
