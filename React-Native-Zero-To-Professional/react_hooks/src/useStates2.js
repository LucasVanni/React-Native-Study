import React, {useState} from 'react';

import {View, StyleSheet, Text, Button} from 'react-native';

export default () => {
  const [msg, setMsg] = useState('Mostrar');
  const [mostrar, setMostrar] = useState(false);

  const handleButtonClick = () => {
    setMostrar(!mostrar);
    setMsg(mostrar ? 'Mostrar' : 'Ocultar');
  };

  return (
    <View>
      <Button onPress={handleButtonClick} title={msg} />
      {mostrar && <Text>Men$4gem S3cr3t4!!!</Text>}
    </View>
  );
};
