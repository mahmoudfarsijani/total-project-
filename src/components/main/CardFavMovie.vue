<template>
  <Card v-if="movies" tag="RouterLink" :to="{path:`/movies/${movies.id}`}"  :is-col="true" :is-card-fav="true" >
    <template #header>
      <div class="overflow-hidden rounded-md">
        <Img :src="srcImg" :alt="movies.title" />
      </div>
    </template>
    <div class="body">
        {{ movies.title }}
    </div>
  </Card>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
import { shape, string, number, object, array, bool } from "vue-types";

import Card from "@/components/base/Card.vue";
import Img from "@/components/base/Img.vue";

const props = defineProps({
  movies: shape({
    adult: bool(),
    backdrop_path: string(),
    original_title: string(),
    overview: string(),
    poster_path: string(),
    release_date: string(),
    title: string(),
    vote_average: number(),
    id: number(),
  }),
});

const srcImg = computed(() => {
    return `http://image.tmdb.org/t/p/w500/${props.movies.poster_path}`
})
</script>
