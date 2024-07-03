import "./assets/main.css";
import "./assets/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import Router from "@/router.js";
import vLazyImagePlugin from "v-lazy-image";
import { Form, Field, ErrorMessage } from "vee-validate";
import Pinia from "@/store.js";
import firebase from './plugins/firebase';

const app = createApp(App);


Router.beforeEach((to, from, next) => {
  const isAuthenticat = false;
  // const statusUser = 'gaust'
  if (to.params.id) {
    document.title = `${to.meta.title} - ${to.params.id}`;
  } else {
    document.title = to.meta.title;
  }

  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticat) {
    next({ name: "login" });
  } else {
    next();
  }
});

app
  .use(Router)
  .use(Pinia)
  .use(firebase)
  .component("Form", Form)
  .component("Field", Field)
  .component("ErrorMessage", ErrorMessage)
  .use(vLazyImagePlugin)
  .mount("#app");
