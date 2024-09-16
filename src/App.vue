<template>
 <Wrapper>
  <RouterView :key="$route.params"/>
 </Wrapper>
</template>


<script setup>
import { onMounted } from 'vue';
// import  {useAuth}  from '@/composables/useAuth.js';
  import Wrapper from '@/components/base/Wrapper.vue'

  // const {checkAuthState} = useAuth()

  // onMounted(() => {
  //   checkAuthState()
  // })
</script>