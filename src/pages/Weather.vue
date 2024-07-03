<template>
  <div class="dark:bg-slate-700 dark:text-white">
    <Container class="pt-[20px]">
      <div>
        <Button
          tag="button"
          :is-icon-only="false"
          icon="back"
          class="capitalize btn btn-warning"
          @click="goBack"
        >
          back
        </Button>
        <Button
          tag="button"
          :is-icon-only="false"
          class="capitalize btn mt-[10px]"
          @click="changeColor"
        >
          change color
        </Button>
        <h1 class="title text-[35px] capitalize mt-[20px]">weather</h1>
        <div class="w-full h-[500px]  flex flex-col items-center pt-[50px]">
          <SearchWeather @SelectInput="searching" />
          <div class="pt-[50px]">
            <span
              v-if="isLoading"
              class="loading loading-spinner loading-lg"
            ></span>
            <div v-else-if="error" class="capitalize">
              {{ error.message }}
            </div>
            <div v-else>
              <BoxWeather :details="data" :class="[`${isDark ? 'dark' : ''}`]" class="dark:bg-slate-800 dark:text-white bg-gray-200 text-gray-50"/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import Container from "@/components/base/Container.vue";
import Button from "@/components/base/Button.vue";
import SearchWeather from "@/components/base/SearchForm.vue";
import BoxWeather from "@/components/main/BoxWeather.vue";
import { useFetchWeather } from "@/composables/useFetchWeather.js";

import { useRouter } from "vue-router";

const { data, isLoading, error, fetchData } = useFetchWeather();
const isDark = ref(false)
// router
const router = useRouter();
const goBack = () => {
  router.push({
    name: "home",
  });
};

const API = "527170c8114fbb16ca85f4c0d8e97c58";
const searching = (datas) => {
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${datas}&appid=${API}`
  );
};


const changeColor = () => {
  isDark.value = !isDark.value;

  if(isDark.value){
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}


</script>


<style scoped>
  .dark{
    @apply bg-slate-50 text-gray-800
  }
</style>
