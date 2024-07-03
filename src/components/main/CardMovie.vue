<template>
  <Card tag="RouterLink" :to="{path:`/movies/${movies.id}`}" :is-col="false" :is-movies="true" class="shadow-md rounded-md text-black">
    <template #header>
      <div class="w-[200px]">
        <Img :src="srcImg" :alt="movies.title"/>
      </div>
    </template>
    <div class="body flex flex-col gap-[10px]">
      <h2 class="title text-[30px]">
        {{ movies.title }}
      </h2>
      <p class="description w-[590px] text-justify">
        {{ movies.overview }}
      </p>
      <div class="detail flex flex-col gap-[15px]">
        <span class="yeaer capitalize">
            release: {{ movies.release_date }}
        </span>
        <span class="count flex flex-nowrap gap-[2px]">
            <Icon v-for="item in voteRange" :name="item.count < vote ? 'filled-star' : 'empty-star'"/>
        </span>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
import { shape,string,number,object,array,bool } from 'vue-types';
import Card from "@/components/base/Card.vue";
import Img from "@/components/base/Img.vue";
import Icon from "@/components/base/Icon.vue";


const props = defineProps({
    movies:shape({
        adult:bool(),
        backdrop_path:string(),
        original_title:string(),
        overview:string(),
        poster_path:string(),
        release_date:string(),
        title:string(),
        vote_average:number(),
        id:number()
    })
});


const srcImg = computed(() => {
    return `http://image.tmdb.org/t/p/w500/${props.movies.poster_path}`
})

const voteRange = [
    {
        count:2
    },
    {
        count:4
    },
    {
        count:6
    },
    {
        count:8
    },
    {
        count:10
    }
];

const vote = computed(() => {
    return props.movies.vote_average
})

</script>
