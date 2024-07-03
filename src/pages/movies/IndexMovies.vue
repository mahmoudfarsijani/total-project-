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
      <h1 class="title text-[35px] capitalize">movies</h1>
      <div class="pt-[50px]">
        <SearchBox @select-input="enterInput" />
        <div class="pt-[35px]">
          <span
            v-if="isLoading"
            class="loading loading-spinner loading-lg"
          ></span>
          <div v-else-if="error">
            {{ error.message }}
          </div>
          <Row v-else tag="ul" :is-col="true" class="gap-[20px]">
            <CardMovie
              v-for="(item, index) in data"
              :key="index"
              :movies="item"
            />
          </Row>
          
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "@/components/base/Container.vue";
import Button from "@/components/base/Button.vue";
import SearchBox from "@/components/base/SearchForm.vue";
import Row from "@/components/base/Row.vue";
import CardMovie from "@/components/main/CardMovie.vue";

import { useFetchSearchMovies } from "@/composables/useFetchSearchMovies.js";

import { useRouter } from "vue-router";

const { data, isLoading, error, fetchData } = useFetchSearchMovies();

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsIm5iZiI6MTcxOTgyMzc2OS4xOTA5ODYsInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3u9Rj7mHy8gTso1fbsl4HRFlYel89tD4Qq4cyWKzq-Y",
  },
};

// router
const router = useRouter();
const goBack = () => {
  router.push({
    name: "home",
  });
};

const enterInput = (data) => {
  fetchData(
    `https://api.themoviedb.org/3/search/movie?query=${data}&include_adult=false&language=en-US&page=1`,
    options
  );
};
</script>
