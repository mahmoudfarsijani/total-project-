<template>
 <Wrapper>
  <RouterView :key="$route.params"/>
 </Wrapper>
</template>


<script setup>
  import Wrapper from '@/components/base/Wrapper.vue'
</script>