import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDU2dbWTe_El2upP6Pu_HV21apME3R5FZU',
  authDomain: 'twitter-clone-b47cb.firebaseapp.com',
  projectId: 'twitter-clone-b47cb',
  storageBucket: 'twitter-clone-b47cb.appspot.com',
  messagingSenderId: '325851333985',
  appId: '1:325851333985:web:0cc5edcea2edc19c167120',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
