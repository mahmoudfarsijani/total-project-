// Import the functions you need from the SDKs you need
import {initializeApp}  from 'firebase/app';
import firebase from 'firebase/compat/app';
// import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbWwkhoTU8XFB-Zq4Ebayy-FeUj7v9hUY",
  authDomain: "vue-project-a2a07.firebaseapp.com",
  databaseURL: "https://vue-project-a2a07-default-rtdb.firebaseio.com",
  projectId: "vue-project-a2a07",
  storageBucket: "vue-project-a2a07.appspot.com",
  messagingSenderId: "734666421631",
  appId: "1:734666421631:web:15aba007ac8a36b944164a",
  measurementId: "G-YB7TSL3TPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth = getAuth(app)
export default firebase
