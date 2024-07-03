<template>
  <div
    class="w-[35%] h-[500px] p-[15px] overflow-hidden rounded-md flex flex-col items-center"
  >
    <Form @submit="formHandler" :validation-schema="schema" class="w-full">
      <h2
        class="title text-black font-boldt text-[23px] capitalize text-center"
      >
        login
      </h2>
      <div class="w-full h-[85px] flex flex-col mt-[15px] gap-[7px]">
        <label for="email" class="capitalize text-black"> email </label>
        <Field
          type="email"
          name="email"
          id="email"
          v-model="email"
          class="px-[10px] py-[5px] bg-white text-black"
        />
        <ErrorMessage name="email" class="text-[11px] text-red-500" />
      </div>
      <div class="w-full h-[85px] flex flex-col mt-[15px] gap-[7px]">
        <label for="password" class="capitalize text-black"> password </label>
        <Field
          type="password"
          name="password"
          id="password"
          v-model="password"
          class="px-[10px] py-[5px] bg-white text-black"
        />
        <ErrorMessage name="password" class="text-[11px] text-red-500" />
      </div>
      <div class="w-full flex flex-nowrap items-center gap-[5px] mt-[20px]">
        <label for="remember" class="capitalize"> remember me </label>
        <input type="checkbox" id="remember" v-model="isRemember" />
      </div>
      <button type="submit" class="w-full btn btn-neutral mt-[15px]">
        SIGN IN
      </button>
    </Form>
    <span class="flex flex-nowrap items-center">
      don't have an acoount?
      <button class="btn btn-link" @click="goLogout">sign up</button>
    </span>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Cookie from "js-cookie";

const email = ref("");
const password = ref("");
const isRemember = ref(false);
const router = useRouter();

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(12).required(),
});

const goLogout = () => {
  router.push({
    name: "logout",
  });
};

const auth = getAuth();
const formHandler = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    if (isRemember.value) {
      Cookie.set("RememberMe", email.value, { expires: 7 });
    }
    router.push({name:'dashboard'})
  } catch (error) {
    console.log(error);
  }
};
</script>
