import "./assets/main.css";
import "./assets/tailwind.css";

import { auth, onAuthStateChanged } from "@/plugins/firebase.js";

import { createApp } from "vue";
import App from "./App.vue";
import Router from '@/router.js';
import vLazyImagePlugin from "v-lazy-image";
import { Form, Field, ErrorMessage } from "vee-validate";
import Pinia from "@/store.js";
// import firebase from '@/plugins/firebase.js';

// import { getAuth, onAuthStateChanged } from 'firebase/auth';


const app = createApp(App);

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};

Router.beforeEach(async (to, from, next) => {
  const isAuthenticat = false;
  // const checkRequiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (to.params.id) {
    document.title = `${to.meta.title} - ${to.params.id}`;
  } else {
    document.title = await to.meta.title;
  }

  const authValid = to.matched.some((record) => record.meta.requiresAuth)
  if (authValid) {
    const user = await getCurrentUser();
    if (!user) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }

  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   const user = await getCurrentUser();
  //   if (!user) {
  //     next({ name: 'Login' }); 
  //   } else {
  //     next();
  //   }
  // } else {
  //   next();
  // }
});



app
  .use(Router)
  .use(Pinia)
  .component("Form", Form)
  .component("Field", Field)
  .component("ErrorMessage", ErrorMessage)
  .use(vLazyImagePlugin)
  .mount("#app");
