<template>
  <Form
    @submit="formHandler"
    :validation-schema="schema"
    class="w-[35%] h-[500px] p-[15px] overflow-hidden rounded-md flex flex-col items-center"
  >
    <h2 class="title text-black font-boldt text-[23px]">Create your account</h2>
    <p class="text-center font-thin text-black text-[15px]">
      create an account to view and manage your projects.
    </p>
    <div class="w-full h-[170px] flex flex-col mt-[15px]">
      <label for="username" class="capitalize text-black"> username </label>
      <Field
        name="username"
        type="text"
        id="username"
        class="px-[10px] py-[5px] bg-white text-black"
        v-model="username"
      />
      <ErrorMessage name="username" class="text-[11px] text-red-500" />
    </div>
    <div class="w-full h-[170px] flex flex-col">
      <label for="email" class="capitalize text-black"> email </label>
      <Field
        name="email"
        type="email"
        id="email"
        class="px-[10px] py-[5px] bg-white text-black]"
        v-model="email"
      />
      <ErrorMessage name="email" class="text-[11px] text-red-500" />
    </div>
    <div class="w-full h-[170px] flex flex-col">
      <label for="password" class="capitalize text-black"> password </label>
      <Field
        name="password"
        type="password"
        id="password"
        class="px-[10px] py-[5px] bg-white text-black"
        v-model="password"
      />
      <ErrorMessage name="password" class="text-[11px] text-red-500" />
    </div>
    <div class="w-full h-[170px] flex flex-col">
      <label for="rePassword" class="capitalize text-black">
        confirm password
      </label>
      <Field
        name="rePassword"
        type="password"
        id="rePassword"
        class="px-[10px] py-[5px] bg-white text-black"
        v-model="rePassword"
      />
      <ErrorMessage name="rePassword" class="text-[11px] text-red-500" />
    </div>
    <div class="w-full h-[170px] flex items-center gap-[5px] flex-nowrap">
      <input type="checkbox" v-model="isAgree" />
      <label for="remember" class="capitalize text-black">agree rules</label>
    </div>
    <button type="submit" class="w-full btn capitalize" :class="[`${isAgree ? 'btn-primary ' : 'btn-disabled' }`]">
      create your account
    </button>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, defineEmits } from "vue";
import { useRouter } from "vue-router";



const router = useRouter();

const username = ref("");
const email = ref("");
const password = ref("");
const rePassword = ref("");
const isAgree = ref(false)

const schema = yup.object({
  username: yup.string().required().min(8),
  email: yup.string().email().required(),
  password: yup.string().min(12).required(),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .min(6)
    .required("Confirm Password is required"),
});

const auth = getAuth();

const formHandler = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push({
      path: "/",
    });
  } catch (error) {
    console.log(error);
  }
};

</script>
