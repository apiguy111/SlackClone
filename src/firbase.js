import firebase from "firebase";
//import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZyO8gvZTr7A4yxyiEL3tJNXU0jz1oHew",
  authDomain: "slack-clone-72945.firebaseapp.com",
  databaseURL: "https://slack-clone-72945-default-rtdb.firebaseio.com",
  projectId: "slack-clone-72945",
  storageBucket: "slack-clone-72945.appspot.com",
  messagingSenderId: "1047010065828",
  appId: "1:1047010065828:web:d303bf87e3a3ef33b05531",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
