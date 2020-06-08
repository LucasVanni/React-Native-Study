import firebase from "./apikey";

export const logout = () => {
    firebase.auth().signOut();
};

export const addAuthListener = userFunction => {
    firebase.auth().onAuthStateChanged(userFunction);
};

export const loginEP = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const getUserInfo = callback => {
    firebase
        .database()
        .ref("usuarios")
        .child(firebase.auth().currentUser.uid)
        .once("value")
        .then(callback);
};
