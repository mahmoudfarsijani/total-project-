<template>
  <Card tag="li" :is-cast="true" :is-col="true">
    <template #header>
      <div class="w-[70px] h-[70px] rounded-full overflow-hidden flex justify-center items-center">
        <img :src="showDetail.img"/>
      </div>
    </template>
    <div class="body">
      <h3 class="name whitespace-nowrap text-[14px]">
        {{ cast.original_name }}
      </h3>
    </div>
  </Card>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { shape, string, object, number } from "vue-types";
import Card from "@/components/base/Card.vue";
import Img from "@/components/base/Img.vue";

const props = defineProps({
    cast:shape({
        gender:number(),
        id:number(),
        name:string(),
        original_name:string(),
        popularity:number(),
        profile_path:string(),
        character:string()
    })
})

const showDetail = computed(() => {
    const img = `http://image.tmdb.org/t/p/w500/${props.cast.profile_path}`;



    return {
        img
    }
})
</script>
