export const login = (objeto, firebase) => {
  if (objeto.state.email != '' && objeto.state.senha != '') {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        objeto.props.navigation.navigate('Interna');
      }
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(objeto.state.email, objeto.state.senha)
      .catch(error => {
        alert(error.code);
      });
  }
};
