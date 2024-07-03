<template>
  <div v-if="details" class="flex gap-[20px]">
    <div class="box-img w-[320px] max-w-[400px] h-[450px] overflow-hidden rounded-lg">
      <Img :src="showDetailt.img" :alt="details.title" class="w-full h-full object-fill"/>
    </div>
    <div class="box-detail ">
      <h2 class="name text-[35px]">
        {{ details.title }}
      </h2>
      <p class="desc w-[550px]">
        {{ details.overview }}
      </p>
      <div class="flex capitalize">
        genres:
        <span  class="capitalize block"> {{ genres }}</span>
      </div>
      <span class="capitalize">
        release date: {{ details.release_date }} 
      </span>
      <span class="block capitalize">
       status: {{  details.status }}
      </span>
      <span  class="capitalize">
        productions countries: {{ proCountries}}
      </span>
      <span class="count flex flex-nowrap items-center gap-[2px] capitalize">
       vote: <Icon v-for="item in voteRange" :name="item.count < vote ? 'filled-star' : 'empty-star'"/>
      </span>
      <div class="btn-box">
        <Button tag="button" :is-icon-only="true" :icon="fav ? 'filled-heart' : 'empty-heart'" @click="addFav(details.id)"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
import { string, number, object, shape, bool, array, arrayOf } from "vue-types";
import Container from "@/components/base/Container.vue";
import Img from "@/components/base/Img.vue";
import Icon from "@/components/base/Icon.vue";
import Button from "@/components/base/Button.vue";
import {useFavs} from '@/stores/useFav.js'

const props = defineProps({
  details: shape({
    adult: bool().isRequired,
    backdrop_path: string().isRequired,
    belongs_to_collection: string().isRequired,
    budget: number().isRequired,
    genres: array().isRequired,
    id: number().isRequired,
    imdb_id: string().isRequired,
    origin_country: array().isRequired,
    original_language: string().isRequired,
    original_title: string().isRequired,
    overview: string().isRequired,
    popularity: number().isRequired,
    poster_path: string().isRequired,
    production_companies: array().isRequired,
    production_countries: array().isRequired,
    release_date: string().isRequired,
    spoken_languages: array().isRequired,
    status: string().isRequired,
    title: string().isRequired,
    video: string().isRequired,
    vote_average: number().isRequired,
    vote_count: number().isRequired,
  }),
});



const showDetailt = computed(() => {
    const img = `http://image.tmdb.org/t/p/w500/${props.details.poster_path}`;
    



    return {
        img,
        // genres,
        // finalProduct
    }
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
    return props.details.vote_average
})

const genres = computed(() => {
    if(!props.details.genres){
        return 'no data'
    }
    return props.details.genres.map(i => i.name).join(',')
})

const proCountries = computed(() => {
    if(!props.details.production_countries){
        return 'No Data!'
    }
    return props.details.production_countries.map(i => i.name).join(',')
})

const {addFav,isFav} = useFavs()

const fav = computed(() => isFav(props.details.id))
const FavLists = computed(() => useFavs().favList)

 

</script>
