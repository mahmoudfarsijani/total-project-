<template>
  <div>
    <Container class="pt-[20px]">
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
          :is-icon-only="false"
          icon="basket"
          :to="{ name: 'basket' }"
          class="gap-[5px]"
        >
        {{ dataLength.getLength }}
        </Button>
      </div>
      <div>
        {{ basketIds }}
        <h1 class="title text-[35px] capitalize">basket</h1>
        <span
          v-if="isLoading"
          class="loading loading-spinner loading-lg"
        ></span>
        <div v-else-if="error">
          {{ error.message }}
        </div>

        <div v-else>
          <Row tag="ul" :is-row="true" :is-wrap="true" class="justify-between">
            <CardProd
              v-for="(item, index) in basket"
              :key="index"
              :product="item"
            />
          </Row>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
//import from vue
import { ref, computed, reactive, onMounted } from "vue";

//imports
import CardProd from "@/components/main/CardProduct.vue";
import Container from "@/components/base/Container.vue";
import Row from "@/components/base/Row.vue";
import Button from "@/components/base/Button.vue";
import { useFetchProd } from "@/composables/useFetchProd.js";
import { useRouter } from "vue-router";
import { useBasket } from "@/stores/useBasket.js";


//fetch product
const { data, isLoading, error } = useFetchProd(
  "https://fakestoreapi.com/products"
);

//router
const router = useRouter();
const goBack = () => {
  router.back(-1);
};

//store ---- add basket
const { removeBasket } = useBasket();
const basket = computed(() => useBasket().basket);
const dataLength = useBasket()






//find id in basket
// const basketIds = computed(() => {
//   return basket.value.map((item) => item.id);
// });

//find --- product
// const findProduct = computed(() => {
//   if (data.value) {
//     return data.value.filter((item) => basket.value.includes(item.id));
//   }
//   return "No Data!";
// });

const getPrice = (price) => {
  return isNaN(price) ? 0 : price
};


// const totalPrice = computed(() => {
//   return basket.value.reduce((total,item) => {
//     total + getPrice(item.price),0
//   })
// })

// console.log(totalPrice);

 

</script>
