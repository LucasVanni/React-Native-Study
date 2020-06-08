export const cadastrar = (objeto, firebase, RNFetchBlob) => {
  if (
    objeto.state.formAvatar != null &&
    objeto.state.formNome != '' &&
    objeto.state.formEmail != '' &&
    objeto.state.formSenha != ''
  ) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let state = objeto.state;
        state.userUid = user.uid;
        objeto.setState(state);

        saveAvatar(objeto, firebase, RNFetchBlob);
      }
    });
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        objeto.state.formEmail,
        objeto.state.formSenha,
      )
      .catch(error => alert(error.code));
  }
};

export const inserirImagem = (objeto, ImagePicker, RNFetchBlob) => {
  ImagePicker.showImagePicker({}, r => {
    if (r.uri) {
      let state = objeto.state;
      state.formAvatar = {uri: r.uri};
      objeto.setState(state);
    }
  });
};

const saveAvatar = (objeto, firebase, RNFetchBlob) => {
  let uri = objeto.state.formAvatar.uri.replace('file://', '');

  let avatar = firebase
    .storage()
    .ref()
    .child('users')
    .child(`${objeto.state.userUid}.jpg`);

  let mime = 'image/jpeg';

  RNFetchBlob.fs
    .readFile(uri, 'base64')
    .then(data => {
      return RNFetchBlob.polyfill.Blob.build(data, {
        type: `${mime};BASE64`,
      });
    })
    .then(blob => {
      avatar.put(blob, {contentType: mime}).on(
        'state_changed',
        snapshot => {
          let pct = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );

          let state = objeto.state;
          state.formPct = `${pct}%`;
          objeto.setState(state);
        },
        error => {
          alert(error.code);
        },
        () => {
          saveUser(objeto, firebase);
        },
      );
    });
};

const saveUser = (objeto, firebase) => {
  if (objeto.state.userUid != 0) {
    firebase
      .database()
      .ref('Users')
      .child(objeto.state.userUid)
      .set({
        name: objeto.state.formNome,
        email: objeto.state.formEmail,
      });

    let state = objeto.state;
    state.formAvatar = null;
    state.userUid = 0;
    state.formNome = '';
    state.formEmail = '';
    state.formSenha = '';
    state.formPct = '';
    objeto.setState(state);

    firebase.auth().signOut();

    alert('Usuário inserido com sucesso');
  }
};
