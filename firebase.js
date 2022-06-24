// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9_UujbtJsCAEWgM2GyPRRpqHVh08-olg",
  authDomain: "react-native-auth-99288.firebaseapp.com",
  projectId: "react-native-auth-99288",
  storageBucket: "react-native-auth-99288.appspot.com",
  messagingSenderId: "328710498042",
  appId: "1:328710498042:web:7096cdd00644921e908b43"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };