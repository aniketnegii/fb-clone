import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCRFmBdRRR7qyQ_RJW1lUN2hu3vIrTxiEU",
    authDomain: "fb-clone01.firebaseapp.com",
    projectId: "fb-clone01",
    storageBucket: "fb-clone01.appspot.com",
    messagingSenderId: "226677784387",
    appId: "1:226677784387:web:b3e87553e3d7f7ed0d79f6",
    measurementId: "G-VBG18PZP31"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;