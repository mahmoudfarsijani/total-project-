<template>
  <div class="pb-[50px]">
    <Container class="pt-[20px]">
        <button @click="goBack" class="capitalize btn btn-warning">
          go back
        </button>
      <span v-if="isLoading" class="loading loading-spinner loading-lg"></span>
      <div v-else-if="error">
        {{ error.message }}
      </div>
      <div v-else >
       <CardDetailCountry :details="dataDetail"/>
      </div>
      <Row tag="ul" :is-row="true" :is-wrap="true" class="gap-[20px]">
        <CardCountry v-for="(item,index) in borders" :key="index" :countries="item"/>
      </Row>
    </Container>
  </div>
</template>

<script setup>
import { ref,computed } from "vue";
import { useRoute,useRouter } from "vue-router";

import Container from "@/components/base/Container.vue";
import Row from "@/components/base/Row.vue";
import CardDetailCountry from '@/components/main/CardDetailCountry.vue'
import CardCountry from "@/components/main/CardCountry.vue";

import { useFetchCode } from "@/composables/useCodeCountry.js";

const route = useRoute();
const router = useRouter();

const id = route.params.id;
const { data, isLoading, error,borders } = useFetchCode(id);


const goBack = () => {
  router.back(-1);
};

const dataDetail = computed(() => {
    if(data.value){
        return data.value
    }
    return 'No Data!'
})


</script>
