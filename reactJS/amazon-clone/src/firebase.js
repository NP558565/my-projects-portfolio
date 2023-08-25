import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBSGIEnvXx8gzExuFIKmOE37pz3NFZkXa0",
    authDomain: "challenge-d310a.firebaseapp.com",
    projectId: "challenge-d310a",
    storageBucket: "challenge-d310a.appspot.com",
    messagingSenderId: "1012326000636",
    appId: "1:1012326000636:web:99fe88678a349d227d3479"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
