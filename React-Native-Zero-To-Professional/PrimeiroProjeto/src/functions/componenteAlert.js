import { Alert } from 'react-native';

export const aoClicar = () => {
  Alert.alert(
    // Título
    "Olá",
    // Mensagem interior do alerta
    "Clique em sim para aceitar e não para negar",
    // Botões
    [
      {
        // Nome do sub-botão dentro do alert
        text: 'Cancelou',
        // Ação do sub-botão dentro do alert
        onPress: () => {Alert.alert(
          // Título
          "Cancelar",
          // Mensagem interior do alerta
          "Deseja mesmo cancelar?",
          // Botões
          [
            {
              // Nome do sub-botão dentro do alert
              text: 'sim',
              // Ação do sub-botão dentro do alert
              onPress: () => alert("sim"),
              // Estilo do sub-botão dentro do alert
              style: 'true',
            },
            {
              // Nome do sub-botão dentro do alert
              text: 'não',
              // Ação do sub-botão dentro do alert
              onPress: () => alert('não'),
              // Estilo do sub-botão dentro do alert
              style: 'cancel',
            },
          ],
          // Cancelável ou não(true/false)
          {cancelable: true},
        );},
        // Estilo do sub-botão dentro do alert
        style: 'cancel',
      }
    ],
    // Cancelável ou não(true/false)
    {cancelable: true},
  );
}
