<template>
  <div>
    <Container class="pt-[20px]">
      <div>
        <div class="w-full flex flex-nowrap justify-between">
          <Button
            tag="button"
            :is-icon-only="false"
            icon="back"
            class="capitalize btn btn-warning"
            @click="goBack"
          >
            back
          </Button>
          <Button
            tag="RouterLink"
            class="capitalize btn btn-warning"
            :is-icon-only="false"
            :to="{ name: 'fav-movies' }"
          >
            go to favs movies
          </Button>
        </div>
        <h1 class="title text-[35px] capitalize">detail movies</h1>
      </div>
      <div class="pt-[50px] flex flex-nowrap gap-[20px]">
        <span
          v-if="isLoading"
          class="loading loading-spinner loading-lg"
        ></span>
        <div v-else-if="error">
          {{ error.message }}
        </div>
        <BoxDetailMovie v-else :details="data" />
        <span
          v-if="isLoadingCast"
          class="loading loading-spinner loading-lg"
        ></span>
        <div v-else-if="errorCast">
          {{ error.message }}
        </div>
        <Row v-if="sliceCast" tag="ul" :is-row="false" class="gap-[10px]  justify-end items-end">
          <CardCast
            v-for="(item, index) in sliceCast"
            :key="index"
            :cast="item"
          />
          <button
            @click="showMore"
            class="capitalize btn btn-neutral mt-[20px] w-[140px]"
          >
            {{ isShow ? "less" : "more" }}
          </button>
        </Row>
      </div>
    </Container>
    <Container class="pt-[50px]">
      <span v-if="isLoadingS" class="loading loading-spinner loading-lg"></span>
      <div v-else-if="errorS">
        {{ error.message }}
      </div>
      <Row
        v-else
        tag="ul"
        :is-row="true"
        :is-wrap="true"
        class="justify-between"
      >
        <swiper
          :slides-per-view="6"
          :space-between="50"
          :loop="true"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :scrollbar="{ draggable: true }"
        >
          <swiper-slide v-for="(item, index) in dataS" :key="index">
            <CardFavMovie :movies="item" />
          </swiper-slide>
        </swiper>
      </Row>
    </Container>
  </div>
</template>

<script setup>
import Container from "@/components/base/Container.vue";
import Button from "@/components/base/Button.vue";
import Row from "@/components/base/Row.vue";
import BoxDetailMovie from "@/components/main/BoxDetailMovie.vue";
import CardCast from "@/components/main/CardCast.vue";
import CardFavMovie from "@/components/main/CardFavMovie.vue";

import { useRouter, useRoute } from "vue-router";
import { useFetchDetailMovie } from "@/composables/useFetchDetailMovie.js";
import { useFetchCast } from "@/composables/useFetchCast.js";
import { useFetchSimilar } from "@/composables/useFetchSimilar.js";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { slice } from "lodash";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

// router
const router = useRouter();
const goBack = () => {
  router.back(-1);
};

const { data, error, fetchData, isLoading } = useFetchDetailMovie();

const { dataCast, isLoadingCast, errorCast, fetchDataCast } = useFetchCast();
const { dataS, isLoadingS, errorS, fetchDataS } = useFetchSimilar();

const route = useRoute();
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsIm5iZiI6MTcxOTgyMzc2OS4xOTA5ODYsInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3u9Rj7mHy8gTso1fbsl4HRFlYel89tD4Qq4cyWKzq-Y",
  },
};
onMounted(() => {
  fetchData(
    `https://api.themoviedb.org/3/movie/${route.params.id}?language=en-US`,
    options
  );
  fetchDataCast(
    `https://api.themoviedb.org/3/movie/${route.params.id}/credits?language=en-US`,
    options
  );
  fetchDataS(
    `https://api.themoviedb.org/3/movie/${route.params.id}/similar?language=en-US&page=1`,
    options
  );
});

const isShow = ref(false);
const showMore = () => {
  isShow.value = !isShow.value;
};
const sliceCast = computed(() => {
  if (!isShow.value) {
    return slice(dataCast.value, 0, 5);
  }
  return slice(dataCast.value, 0, 10);
});

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>
