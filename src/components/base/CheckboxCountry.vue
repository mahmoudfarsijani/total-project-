<template>
  <form @change="formHandler" class="flex flex-nowrap gap-[10px]">
    <div v-for="item in regions">
      <label class="flex items-center gap-[5px]">
        {{ item }}
        <input type="checkbox" v-model="selectOption" :value="item" />
      </label>
    </div>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const regions = ["Asia", "Europe", "Americas", "Oceania", "Africa"];
const selectOption = ref([]);
const emits = defineEmits(["select-checkbox"]);

const formHandler = () => {
  emits("select-checkbox",selectOption.value);
};
</script>
