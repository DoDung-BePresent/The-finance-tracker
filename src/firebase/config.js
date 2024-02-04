import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA2Mb7nUbo99dRsEJSd6wtNdr9FnOVyVqc",
  authDomain: "mymoney-a5cc4.firebaseapp.com",
  projectId: "mymoney-a5cc4",
  storageBucket: "mymoney-a5cc4.appspot.com",
  messagingSenderId: "88339309746",
  appId: "1:88339309746:web:c37f6aee595d8c057d95ab",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
