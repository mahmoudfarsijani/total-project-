<template>
  <form @change="formHandler" class="flex flex-nowrap gap-[15px] items-center">
    <div v-for="(item,index) in category" :key="index">
      <label class="capitalize flex items-center gap-[5px]">
        {{ item }}
        <input
          v-model="selectCheckbox"
          type="checkbox"
          id="product"
          name="product"
          :value="item"
      
        />
      </label>
    </div>
  </form>
</template>

<script setup>
import { ref,defineEmits } from "vue";

const category = [
  "men's clothing",
  "electronics",
  "jewelery",
  "women's clothing",
];

const emits = defineEmits(['select-checkbox']);
const selectCheckbox = ref([]);

const formHandler = () => {
    emits('select-checkbox',selectCheckbox.value)
}
</script>
