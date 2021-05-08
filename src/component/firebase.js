import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAVpMOSmAvlBDUIIJ6UIeZh5remKTQxwK4",
  authDomain: "train-scheduling-71683.firebaseapp.com",
  projectId: "train-scheduling-71683",
  storageBucket: "train-scheduling-71683.appspot.com",
  messagingSenderId: "928286621607",
  appId: "1:928286621607:web:66bd73868706672cec8082",
});

const db = firebase.firestore();
export { db };
