import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIKlZEbZx-6lRq4ixeH_nBdCIq4M5A2LI",
  authDomain: "asap-booking-app.firebaseapp.com",
  projectId: "asap-booking-app",
  storageBucket: "asap-booking-app.appspot.com",
  messagingSenderId: "560558746364",
  appId: "1:560558746364:web:500b2fbe13430e1cacc579",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
