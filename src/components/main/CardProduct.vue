<template>
  <Card tag="li" v-if="product" :is-col="true" :is-product="true" class="indictor relative ">
    <template #header>
      <!-- <span v-if="productQuantity" class="indicator-item badge badge-primary text-white absolute right-[5px] top-[5px]">{{ productQuantity }}</span> -->
      <div class="box-image w-full h-[330px] overflow-hidden">
        <Img
          :src="product.image"
          :alt="product.title"
          class="w-full h-full object-cover"
        />
      </div>
    </template>
    <div class="body">
      <h2
        class="title whitespace-nowrap overflow-hidden text-ellipsis text-center"
      >
        {{ product.title }}
      </h2>
    </div>
    <template #footer>
      <div class="w-full flex flex-nowrap justify-between">
        <Button
          @click="addBasket(product)"
          tag="button"
          :is-icon-only="false"
          icon="basket"
          class="btn btn-accent capitalize mx-auto"
        >
          add card
        </Button>
        <Button
          @click="removeBasket(product)"
          tag="button"
          :is-icon-only="false"
          icon="basket"
          class="btn btn-error capitalize mx-auto"
        >
          remove card
        </Button>
  
      </div>
    </template>
  </Card>
</template>

<script setup>
import { defineProps,computed } from "vue";
import { shape, string, object, number, func } from "vue-types";
import Card from "@/components/base/Card.vue";
import Img from "@/components/base/Img.vue";
import Button from "@/components/base/Button.vue";
import {useBasket} from '@/stores/useBasket.js'


const props = defineProps({
  product: shape({
    id: number(),
    title: string(),
    description: string(),
    image: string(),
    price: number(),
    // rating:object(),
    rating: shape({
      rate: number(),
      count: number(),
    }),
  }),
  addBasket: func().isRequired,
  removeBasket: func().isRequired,
});

const basket = computed(() => useBasket().basket)
</script>
