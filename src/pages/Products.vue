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
      <div class="pt-[25px]">
        <SearchInput @select-input="inputProduct" />
        <CheckboxProduct @select-checkbox="checkProduct"class="mt-[10px]"/>
        <h1 class="title text-[35px] capitalize">products</h1>
        <div class="pt-[25px]">
          <span
            v-if="isLoading"
            class="loading loading-spinner loading-lg"
          ></span>
          <div v-else-if="error">
            {{ error.message }}
          </div>
          <div v-else>
            <Row
              tag="ul"
              :is-row="true"
              :is-wrap="true"
              class="justify-between gap-[10px]"
            >
              <CardProd
                v-for="(item, index) in filterProduct"
                :product="item"
                :key="index"
                :add-basket="addBasket"
                :remove-basket="removeBasket"
              />
            </Row>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
//import from vue
import { ref, computed, reactive } from "vue";

//imports
import CardProd from "@/components/main/CardProduct.vue";
import Container from "@/components/base/Container.vue";
import Row from "@/components/base/Row.vue";
import Button from "@/components/base/Button.vue";
import SearchInput from "@/components/base/SearchInput.vue";
import CheckboxProduct from "@/components/base/CheckboxProduct.vue";
import { useFetchProd } from "@/composables/useFetchProd.js";
import { useRouter } from "vue-router";
import { useBasket } from "@/stores/useBasket.js";


//fetch -- product
const { data, isLoading, error } = useFetchProd(
  "https://fakestoreapi.com/products"
);

//store-- basket
const { addBasket, removeBasket } = useBasket();
const basket = computed(() => useBasket().basket);

// router
const router = useRouter();
const goBack = () => {
  router.push({
    name: "home",
  });
};




const findProduct = ref("");
const inputProduct = (data) => {
  findProduct.value = data;
};

const filterCheck = ref([]);
const checkProduct = (data) => {
  filterCheck.value = data;
};

const filterProduct = computed(() => {
  if (!findProduct.value && filterCheck.value.length === 0) {
    return data.value;
  } else if (findProduct.value) {
    return data.value.filter((item) =>
      item.category.toLowerCase().includes(findProduct.value)
    );
  } else if (filterCheck.value) {
    return data.value.filter((item) =>
      filterCheck.value.includes(item.category)
    );
  }
});


const getValidPrice = (price) => {
  return isNaN(price) ? 0 : price
}
// const totalPrice = computed(() => {
//   return basket.value.reduce((total,item) => 
//    total + getValidPrice(item.price),0
//   )
// })

const dataLength = useBasket();




</script>
