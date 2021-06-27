import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC5z3UCWgnLzwJ3rYArvhYcoCADBKpA-wg",
  authDomain: "drive-clone-3e387.firebaseapp.com",
  projectId: "drive-clone-3e387",
  storageBucket: "drive-clone-3e387.appspot.com",
  messagingSenderId: "361859698063",
  appId: "1:361859698063:web:851d7848accb8439a14ffa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // initializing firebase here

const auth = firebase.auth();     // authenticating user
const provider = new firebase.auth.GoogleAuthProvider(); //authen user using google login features
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
