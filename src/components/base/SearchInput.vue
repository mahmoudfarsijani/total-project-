<template>
  <form @input="formHandler">
    <input
    v-model="searching"
    type="text"
    id="search"
    name="search"
    placeholder="search"
    class="w-full py-[7px] px-[10px] rounded-md text-black "
  />
  </form>
</template>


<script setup>
import { ref,defineEmits } from 'vue';

 const searching = ref('')
 const emits = defineEmits(['select-input'])

 const formHandler = () => {
    emits('select-input',searching.value.toLowerCase().trim())
 }
</script>


<style scoped>
  input::placeholder {
    @apply capitalize
  }
</style>