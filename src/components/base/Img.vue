<template>
  <v-lazy-image :src="src" :alt="alt" />
</template>

<script setup>
import { defineProps } from "vue";
import { string } from "vue-types";
import VLazyImage from "v-lazy-image";


defineProps({
    src: string(),
    alt: string()
})
</script>
