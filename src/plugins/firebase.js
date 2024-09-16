// Import the functions you need from the SDKs you need
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


 
 


const firebaseConfig = {
  apiKey: "AIzaSyDbWwkhoTU8XFB-Zq4Ebayy-FeUj7v9hUY",
  authDomain: "vue-project-a2a07.firebaseapp.com",
  databaseURL: "https://vue-project-a2a07-default-rtdb.firebaseio.com",
  projectId: "vue-project-a2a07",
  storageBucket: "vue-project-a2a07.appspot.com",
  messagingSenderId: "734666421631",
  appId: "1:734666421631:web:15aba007ac8a36b944164a",
  measurementId: "G-YB7TSL3TPD",
};

 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged, signOut };
