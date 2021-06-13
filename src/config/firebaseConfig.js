import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_apiKey,
  authDomain: process.env.REACT_authDomain,
  projectId: process.env.REACT_projectId,
  storageBucket: process.env.REACT_storageBucket,
  messagingSenderId: process.env.REACT_messagingSenderId,
  appId: process.env.REACT_appId,
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;
