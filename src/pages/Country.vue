<template>
  <div>
    <Container class="pt-[20px]">
      <div class="flex flex-col gap-[15px] items-start">
        <Button
          tag="button"
          :is-icon-only="false"
          icon="back"
          class="capitalize btn btn-warning"
          @click="goBack"
        >
          back
        </Button>
        <div class="search-box w-full">
          <SearchInput @select-input="inputValue" />
        </div>
        <CheckboxCountry @select-checkbox="selectBox" />
        <h1 class="title text-[35px] capitalize">country</h1>
        <span
          v-if="isLoading"
          class="loading loading-spinner loading-lg"
        ></span>
        <div v-else-if="error">
          {{ error.message }}
        </div>
        <Row
          v-else
          tag="ul"
          :is-row="true"
          :is-wrap="true"
          class="justify-between gap-[10px]"
        >
          <CardCountry
            v-for="item in filterData"
            :key="item.cca3"
            :countries="item"
          />
        </Row>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import Container from "@/components/base/Container.vue";
import Row from "@/components/base/Row.vue";
import SearchInput from "@/components/base/SearchInput.vue";
import CheckboxCountry from "@/components/base/CheckboxCountry.vue";
import CardCountry from "@/components/main/CardCountry.vue";
import { fetchCode } from "@/composables/useFetchCountry.js";
import Button from "@/components/base/Button.vue";

const fields = [
  "name",
  "status",
  "population",
  "flags",
  "subregion",
  "region",
  "cca3",
  "cca2",
];
const router = useRouter();
const { data, isLoading, error } = fetchCode(fields);
const inputSearching = ref("");
const dataCheckbox = ref([]);

const goBack = () => {
  router.back(-1);
};

const inputValue = (data) => {
  inputSearching.value = data;
};

const selectBox = (data) => {
  dataCheckbox.value = data;
};
const filterData = computed(() => {
  if (dataCheckbox.value.length === 0 && !inputSearching.value) {
    return data.value;
  } else if (inputSearching.value) {
    return data.value.filter((item) =>
      item.name.common.toLowerCase().includes(inputSearching.value)
    );
  } else if (dataCheckbox.value) {
    return data.value.filter((item) =>
      dataCheckbox.value.includes(item.region)
    );
  }
});
</script>
