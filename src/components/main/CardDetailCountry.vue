<template>
  <Card tag="div" v-if="details" :is-detail="true" >
    <template #header>
      <div class=" overflow-hidden rounded-3xl mx-[60px]">
        <Img :src="details.flags.png" :alt="details.flags.alt"   />
      </div>
    </template>
    <div class="body mt-[20px] w-full">
      <h1 class="title text-[30px]">
        {{ details.name.common }}
      </h1>
      <Row tag="ul" class="mt-[20px]">
        <li
          v-for="item in infoDetail"
          :key="item.label"
          class="flex justify-between"
        >
          <span class="capitalize"> {{ item.label }}: </span>
          <div class="flex flex-col justify-end whitespace-nowrap">
            <span  class="capitalize ">
              {{ item.value }}
              <span v-html="item.sup"></span>
            </span>
          </div>
        </li>
      </Row>
    </div>
  </Card>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
import { string, shape, object, bool, array, number } from "vue-types";
import Card from "@/components/base/Card.vue";
import Img from "@/components/base/Img.vue";
import Row from "@/components/base/Row.vue";
import {uniq} from 'lodash'

const props = defineProps({
  details: shape({
    name: shape({
      common: string().isRequired,
      official: string().isRequired,
    }),
    independent: bool().isRequired,
    currencies: array().isRequired,
    borders: array().isRequired,
    capital: array().isRequired,
    region: string().isRequired,
    subregion: string().isRequired,
    flags: shape({
      alt: string().isRequired,
      png: string().isRequired,
      svg: string().isRequired,
    }),
    continents: array().isRequired,
    cca2: string().isRequired,
    cca3: string().isRequired,
    languages: array().isRequired,
    area: number().isRequired,
    demonyms: object().isRequired,
    population: number().isRequired,
    car: object().isRequired,
  }),
});

const infoDetail = computed(() => {
  const names = props.details.name?.common;
  const independent = props.details?.independent;
  const currencies = [
    Object.entries(props.details.currencies).map((i) => i[1].name),
    Object.entries(props.details.currencies).map((i) => i[1].symbol),
  ].join(",");
  const capital = [props.details.capital].join(",");
  const area = props.details.area.toLocaleString();
  const population = props.details.population.toLocaleString()
  const continents = [props.details.continents].join(',')
  const borders = [props.details.borders].join(',')
  const languages = Object.entries(props.details?.languages).join(',')
  const demonyms = uniq(Object.values(props.details?.demonyms).map(i => i.m)).join(',')

  return [
    {
      label: "name",
      value: names,
    },
    {
      label: "indenpendet",
      value: independent ? "yes" : "no",
    },
    {
      label: "currencies",
      value: currencies,
    },
    {
      label: "capital",
      value: capital,
    },
    {
      label: 'area',
      value: area,
      sup: 'km<sup>2</sup>'
    },
    {
      label: 'population',
      value: population
    },
    {
      label:'continents',
      value: continents
    },
    {
      label: 'borders',
      value: borders
    },
    {
      label:'languages',
      value: languages
    },
    {
      label: 'demonyms',
      value: demonyms
    }
  ];
});
</script>
