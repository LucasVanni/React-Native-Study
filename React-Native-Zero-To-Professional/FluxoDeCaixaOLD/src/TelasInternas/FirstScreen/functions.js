export const addReceita = objeto => {
  objeto.props.navigation.navigate('AddReceita');
};
export const addDespesa = objeto => {
  objeto.props.navigation.navigate('AddDespesa');
};

export const sair = firebase => {
  firebase.auth().signOut();
};
