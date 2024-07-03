<template>
  <div>
    <Container class="pt-[20px]">
      <Button
        tag="button"
        :is-icon-only="false"
        icon="back"
        class="capitalize btn btn-warning"
        @click="goBack"
      >
        back
      </Button>
      <div class="w-full flex justify-center items-center pt-[80px]">
        <LoginCom/>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "@/components/base/Container.vue";
import Button from "@/components/base/Button.vue";
import LoginCom from '@/components/main/LoginCom.vue'
import { useRouter } from "vue-router";


const router = useRouter();

const goBack= () => {
    router.back(-1)
}
</script>
