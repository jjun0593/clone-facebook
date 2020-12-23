import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAG3EzKIuK0ax267dcXWgwWQIm1Tud4x-Q",
    authDomain: "facebook-clone-83b68.firebaseapp.com",
    projectId: "facebook-clone-83b68",
    storageBucket: "facebook-clone-83b68.appspot.com",
    messagingSenderId: "474511797279",
    appId: "1:474511797279:web:70f0cbd21fb8e2c133f92a",
    measurementId: "G-Q8D3LDR40F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
