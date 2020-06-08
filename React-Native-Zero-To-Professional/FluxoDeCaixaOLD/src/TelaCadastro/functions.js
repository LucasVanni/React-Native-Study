export const cadastrar = (objeto, firebase) => {
  if (objeto.state.email != '' && objeto.state.senha != '') {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref('users')
          .child(user.uid)
          .set({
            saldo: 0,
            historico: [],
          });

        firebase
          .database()
          .ref('historico')
          .set({
            historicoSaldo: [{saldo: 'Ainda não há saldo...'}, {saldo: 1400}],
          });

        objeto.props.navigation.navigate('Interna');
      }
    });

    firebase
      .auth()
      .createUserWithEmailAndPassword(objeto.state.email, objeto.state.senha)
      .catch(error => {
        alert(error.code);
      });
  }
};
