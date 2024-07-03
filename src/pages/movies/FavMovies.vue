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
      <h1 class="title text-[35px] capitalize">favs movies</h1>
      <Row tag="ul" :is-row="true" :is-wrap="true" class="gap-[10px] pt-[50px]">
        <CardFavMovie v-for="(item, index) in data" :key="index" :movies="item" />
      </Row>
    </Container>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

import Container from "@/components/base/Container.vue";
import Button from "@/components/base/Button.vue";
import Row from "@/components/base/Row.vue";
import CardFavMovie from "@/components/main/CardFavMovie.vue";

import { useFavs } from "@/stores/useFav.js";
import { useRouter, useRoute } from "vue-router";
import { useFetchFavMovie } from "@/composables/useFetchFavMovies.js";





const favList = computed(() => useFavs().favList);
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsIm5iZiI6MTcxOTgyMzc2OS4xOTA5ODYsInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3u9Rj7mHy8gTso1fbsl4HRFlYel89tD4Qq4cyWKzq-Y",
  },
};


const {data,isLoading,error,fetchData} = useFetchFavMovie()


const getData = () => {
  return favList.value.map((item) => fetchData(item,options))
}

onMounted(() => {
  getData()
})













// router
const router = useRouter();
const goBack = () => {
  router.back(-1);
};
</script>
