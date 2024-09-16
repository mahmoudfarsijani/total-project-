<template>
  <div class="flex flex-col h-screen">
    <Header>
      <div class="text-white">
        {{ user?.email }}
      </div>
    </Header>
    <div class="flex flex-nowrap">
    <div
      class=" flex relative duration-500 transition-all"
      :class="[`${isShow ?  'translate-x-[-25px] w-[0%]  ' : 'w-[20%] translate-x-0'}`]"
    >
      <Dashboard class="w-full h-full bg-gray-600 overflow-hidden" />
      <Button
        :is-icon-only="true"
        icon="burger"
        class="right-[-40px] absolute top-[17px] transition-all duration-500 w-[110px]  justify-end"
        :class="[`${isShow ? 'right-[-65px] bg-gray-600' : 'right-[0px]'}`]"
        @click="isShow = !isShow"
      />
   
    </div>
    <Main
      class=" bg-slate-300 flex justify-center items-center"
      :class="[`${isShow ? 'w-screen' : 'w-[80%]'}`]"
    >
      <RouterView />
    </Main>
  </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from "vue";
import Dashboard from "@/components/main/Dashboard.vue";
import Main from "@/components/base/Main.vue";
import Button from "@/components/base/Button.vue";
import Header from '@/components/main/Header.vue'
import { auth, signOut } from '@/plugins/firebase.js';

const user = ref(null);

onMounted(() => {
      user.value = auth.currentUser;
    });

const isShow = ref(false);
</script>
