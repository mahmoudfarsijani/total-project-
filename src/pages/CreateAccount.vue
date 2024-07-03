<template>
  <div class="w-full">
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
      <div class="w-full pt-[80px] flex justify-center">
        <CreateCom />
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "@/components/base/Container.vue";
import CreateCom from "@/components/main/CreateCom.vue";
import Button from "@/components/base/Button.vue";



import { useRouter } from "vue-router";
import { ref } from "vue";


// router
const router = useRouter();
const goBack = () => {
  router.push({
    name: "home",
  });
};


</script>
