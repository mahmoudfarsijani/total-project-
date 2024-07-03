<template>
  <div>
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
        <h1 class="title text-[35px] capitalize">random user</h1>
        <div
          class="w-full flex flex-col gap-[60px] justify-between items-center"
        >
          <Button
            tag="button"
            icon="user"
            class="capitalize btn btn-primary text-white"
            @click="findUser"
          >
            find user
          </Button>
          <!-- <span
          v-if="isLoading"
          class="loading   loading-lg loading-bars mt-[150px]"
        ></span> -->
          <div v-if="isLoading" class="flex w-[25%] flex-col gap-4 items-center  py-[20px] px-[10px] rounded-md">
            <div class="flex items-center justify-center gap-4">
              <div class="skeleton w-[150px] h-[150px] shrink-0 rounded-full"></div>
            </div>
            <div class="skeleton h-[30px] w-[50%]"></div>
            <div class="skeleton h-[20px] w-[70%]"></div>
            <div class="skeleton h-[20px] w-[45%]"></div>
            <div class="skeleton h-[20px] w-[40%]"></div>
          </div>
          <div v-else-if="error">
            {{ error.message }}
          </div>
          <BoxUser v-else :user="data" />
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import Container from "@/components/base/Container.vue";
import Button from "@/components/base/Button.vue";
import BoxUser from "@/components/main/BoxUser.vue";

import { useFetchUser } from "@/composables/useFetchUsers.js";

// router
const router = useRouter();
const goBack = () => {
  router.push({
    name: "home",
  });
};

// click-for-find-user
const { data, isLoading, error, fetchData } = useFetchUser();

const findUser = () => {
  fetchData("https://randomuser.me/api/");
};

const isDark = ref(false);
const changeColor = () => {
  isDark.value = !isDark.value;

  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
</script>
