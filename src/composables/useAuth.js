import { ref } from "vue";
import { auth } from "@/plugins/firebase.js";
import {  signInWithEmailAndPassword, signOut } from "firebase/auth";

const user = ref(null);

export const useAuth = () => {


  const login = async (email, password) => {
    try {
      const userCurrent = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      user.value = userCredential.user;
    } catch (error) {
      console.log("error login in:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      user.value = null;
    } catch (error) {
      console.log("error loggin out:", error);
    }
  };

  const checkAuthState = () => {
    auth.onAuthStateChanged((currentUser) => {
      user.value = currentUser;
    });
  };

  return {
    user,
    loggin,
    logout,
    checkAuthState
  }
  
};

 
