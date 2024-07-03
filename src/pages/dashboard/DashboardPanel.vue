<template>
  <div class="flex flex-nowrap h-screen">
    <div
      class=" flex relative duration-500 transition-all"
      :class="[`${isShow ?  'translate-x-[-25px] w-[0%]  ' : 'w-[20%] translate-x-0'}`]"
    >
      <Dashboard class="w-full h-full bg-gray-600 overflow-hidden" />
      <Button
        :is-icon-only="true"
        icon="burger"
        class="right-[-40px] absolute top-[17px] transition-all duration-500 w-[110px] bg-gray-600 justify-end"
        :class="[`${isShow ? 'right-[-65px]' : 'right-[0px]'}`]"
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
</template>

<script setup>
import { ref } from "vue";
import Dashboard from "@/components/main/Dashboard.vue";
import Main from "@/components/base/Main.vue";
import Button from "@/components/base/Button.vue";

const isShow = ref(false);
</script>
