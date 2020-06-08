import firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyCQc3KOnnQmsZMc9HjsQGQDf2u8vS_hSms',
  authDomain: 'fluxo-de-caixa-674e5.firebaseapp.com',
  databaseURL: 'https://fluxo-de-caixa-674e5.firebaseio.com',
  projectId: 'fluxo-de-caixa-674e5',
  storageBucket: '',
  messagingSenderId: '1083923186053',
  appId: '1:1083923186053:web:c95aa105c5f4d7ff',
};

firebase.initializeApp(config);

export default firebase;
