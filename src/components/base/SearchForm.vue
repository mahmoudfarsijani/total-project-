<template>
  <form @submit.prevent="formHandler" class="w-full">
    <div class="w-full flex flex-nowrap relative">
      <input
        v-model="searching"
        type="text"
        id="search"
        name="search"
        placeholder="search"
        class="w-full py-[7px] px-[10px] text-[17px] rounded-md text-black"
      />
      <Button
        :is-icon-only="true"
        tag="button"
        type="submit"
        icon="search"
        class="absolute right-[5px]"
      />
    </div>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";

import Button from "@/components/base/Button.vue";

const searching = ref("");
const emits = defineEmits(["select-input"]);

const formHandler = () => {
  emits("select-input", searching.value.toLowerCase().trim());
  searching.value = "";
};
</script>

<style scoped>
input {
    @apply shadow-xl bg-white
}
input::placeholder {
  @apply capitalize;
}
</style>
