import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxbCSqnmaQ5osrToOq8A_GzYchbZ0RpAY",
  authDomain: "linkedin-clone-589cb.firebaseapp.com",
  projectId: "linkedin-clone-589cb",
  storageBucket: "linkedin-clone-589cb.appspot.com",
  messagingSenderId: "600592828872",
  appId: "1:600592828872:web:d791cf8f430e5c5ff198fd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
