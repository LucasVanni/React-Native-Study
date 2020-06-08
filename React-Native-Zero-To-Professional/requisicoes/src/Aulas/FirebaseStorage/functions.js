export const pegarFoto = (objeto, ImagePicker) => {
    let options = {
        title: "Selecione uma foto",
        cancelButtonTitle: "Cancelar",
        takePhotoButtonTitle: "Tirar uma foto...",
        chooseFromLibraryButtonTitle: "Escolher uma foto de sua biblioteca...",
    };

    ImagePicker.showImagePicker(options, resposta => {
        if (resposta.uri) {
            let state = objeto.state;
            state.foto = { uri: resposta.uri };
            objeto.setState(state);
        }
    });

    /*

    Abre a câmera para tirar uma foto...

    ImagePicker.launchCamera(null, resposta => {
        if (resposta.uri) {
            let state = objeto.state;
            state.foto = { uri: resposta.uri };
            objeto.setState(state);
        }
    });
   

    Abre a Galeria de imagens

    ImagePicker.launchImageLibrary(null, resposta => {
        if (resposta.uri) {
            let state = objeto.state;
            state.foto = { uri: resposta.uri };
            objeto.setState(state);
        }
    });
    
    */
};

export const recuperarFotoFirebase = (
    objeto,
    ImagePicker,
    RNFetchBlob,
    firebase,
) => {
    ImagePicker.launchImageLibrary(null, r => {
        if (r.uri) {
            let uri = r.uri.replace("file://", "");

            let imagem = firebase
                .storage()
                .ref()
                .child("images")
                .child("imagem3.jpg");

            let mime = "image/jpeg";

            RNFetchBlob.fs
                .readFile(uri, "base64")
                .then(data => {
                    return RNFetchBlob.polyfill.Blob.build(data, {
                        type: mime + ";BASE64",
                    });
                })
                .then(blob => {
                    imagem.put(blob, { contentType: mime }).on(
                        "state_changed",
                        snapshot => {
                            let porcentagem = Math.floor(
                                (snapshot.bytesTransferred /
                                    snapshot.totalBytes) *
                                    100,
                            );

                            let state = objeto.state;
                            state.pct = "Carregando...";
                            objeto.setState(state);
                        },
                        error => alert(error.code),
                        () => {
                            imagem.getDownloadURL().then(url => {
                                let state = objeto.state;
                                state.foto = { uri: url };
                                objeto.setState(state);
                            });

                            let state = objeto.state;
                            state.pct = "Carregada com sucesso";
                            objeto.setState(state);
                        },
                    );
                });
        }
    });
};

export const remover = (objeto, firebase) => {
    firebase
        .storage()
        .ref()
        .child("images/imagem.jpg")
        .delete()
        .then(() => {
            firebase
                .storage()
                .ref()
                .child("images/imagem3.jpg")
                .getDownloadURL()
                .then(url => {
                    objeto.setState({ avatar: { uri: url } });
                });
        })
        .catch(error => alert(error.code));
};
