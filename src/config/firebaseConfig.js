import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAGCXdrpRjsdDAn9Q8AJ9J1tRKBHnbvOi8",
  authDomain: "unichat-316f1.firebaseapp.com",
  projectId: "unichat-316f1",
  storageBucket: "unichat-316f1.appspot.com",
  messagingSenderId: "34845760798",
  appId: "1:34845760798:web:7ef25dd479c81d7614fd0f",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;
