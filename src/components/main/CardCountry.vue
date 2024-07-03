<template>
  <Card tag="li" :is-col="true" :is-country="true">
    <template #header>
      <div class="w-full h-[180px]">
        <Img :src="countries.flags.png" class="w-full h-full object-cover"/>
      </div>
    </template>
    <div>
      <h3 class="title">
        {{ countries.name.common }}
      </h3>
      <p class="region capitalize text-[15px]">
       region: {{ countries.region }}
      </p>
      <Button tag="RouterLink" :to="{path:`/detail/${countries.cca3}`}" :is-icon-only="false" class="btn btn-active capitalize"> more... </Button>
    </div>
  </Card>
</template>

<script setup>
import { defineProps } from "vue";
import { object, string, number, shape, bool } from "vue-types";
import Card from "@/components/base/Card.vue";
import Img from "@/components/base/Img.vue";
import Button from "@/components/base/Button.vue";

const props = defineProps({
    countries: shape({
        name:shape({
            common:string(),
            official:string()
        }),
        cca3:string(),
        independent:bool(),
        region: string(),
        flags:shape({
            svg:string(),
            png:string()
        })
    })
})
</script>
