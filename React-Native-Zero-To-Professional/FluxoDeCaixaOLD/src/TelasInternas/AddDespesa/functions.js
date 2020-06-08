export const retirar = (objeto, firebase) => {
  if (objeto.state.valor != '') {
    let uid = firebase.auth().currentUser.uid;

    let key = firebase
      .database()
      .ref('historico')
      .child(uid)
      .push().key;

    firebase
      .database()
      .ref('historico')
      .child(uid)
      .child(key)
      .set({
        type: 'despesa',
        valor: objeto.state.valor,
      });

    firebase
      .database()
      .ref('users')
      .child(firebase.auth().currentUser.uid)
      .once('value', snapshot => {
        let saldo = parseFloat(snapshot.val().saldo);

        saldo -= parseFloat(objeto.state.valor);

        firebase
          .database()
          .ref('users')
          .child(firebase.auth().currentUser.uid)
          .set({
            saldo,
          });

        objeto.props.navigation.goBack();
      });
  }
};
