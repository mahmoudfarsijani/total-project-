<template>
  <Card
    v-if="details && details.name"
    tag="div"
    :is-col="true"
    :is-weather="true"
  >
    <template #header>
      <div>
        <span class="text-orange-500 text-[13px]">
          {{ formatTime }}
        </span>
        <h2 class="name text-[25px] font-bold">
          {{ details.name }}, {{ details.sys?.country }}
        </h2>
        <div class="flex flex-nowrap items-center gap-[10px]">
          <img :src="detailData.srcImg" alt="" />
          <span class="text-[30px] font-thin">
            {{ detailData.convertTemp }}
          </span>
        </div>
        <p class="desc">
          {{ detailData.feelsTemp }}
        </p>
      </div>
    </template>
    <div class="body h-[80px] border-l-[1px] border-orange-400 ps-[15px]">
      <Row tag="ul" :is-col="true" class="gap-[10px]">
        <li class="flex flex-nowrap gap-[20px]">
          <div class="flex flex-nowrap items-center gap-[5px]">
            <span>
              <Icon name="direction" />
            </span>
            <span class="text-[12px]">
              {{ detailData.finalWind }} {{ detailData.finalDeg }}
            </span>
          </div>
          <div class="flex flex-nowrap items-center gap-[5px]">
            <span>
              <Icon name="pressure" />
            </span>
            <span class="text-[12px]">
              {{ detailData.pressure }}
            </span>
          </div>
        </li>
        <li class="flex flex-nowrap gap-[20px]">
          <div class="flex flex-nowrap items-center gap-[5px]">
            <span class="text-[12px]"> Humidity: </span>
            <span class="text-[12px]">
              {{ detailData.humidity }}
            </span>
          </div>
          <div class="flex flex-nowrap items-center gap-[5px]">
            <span class="text-[12px]"> Visibilty: </span>
            <span class="text-[12px]">
              {{ detailData.finalVisibility }}
            </span>
          </div>
        </li>
      </Row>
    </div>
  </Card>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";
import { string, number, object, shape, array } from "vue-types";
import Card from "@/components/base/Card.vue";
import Row from "@/components/base//Row.vue";
import Icon from "@/components/base/Icon.vue";

const props = defineProps({
  details: shape({
    coord: object(),
    weather: array(),
    main: shape({
      temp: number(),
      temp_min: number(),
      temp_max: number(),
      feels_like: number(),
      pressure: number(),
      humidty: number(),
      sea_level: number(),
    }),
    visibility: number(),
    wind: shape({
      speed: number(),
      deg: number(),
    }),
    clouds: shape({
      all: number(),
    }),
    sys: shape({
      type: number(),
      id: number(),
      country: string(),
      sunrise: number(),
      sunset: number(),
    }),
    timezone: number(),
    id: number(),
    name: string(),
    cod: number(),
  }),
});

//   const date = new Date();
//   const dates = computed(() => {
//     const month = date.getMonth();
//     const hours = date.getHours();
//     const min = date.getMinutes();
//     const ampm = hours >= 12 ? 'PM' : 'AM';

//     const formatMin = min < 10 ? `0${min}` : min ;

//     return  `${hours}:${formatMin} ${ampm}`

//   });

const formatTime = computed(() => {
  if (!props.details) return "";
  const timezoneOffset = props.details.timezone;
  const localTime = new Date(Date.now() + timezoneOffset * 1000);
  return localTime.toUTCString();
});

const detailData = computed(() => {
  const img = props.details.weather[0].icon;
  const srcImg = `http://openweathermap.org/img/w/${img}.png`;
  const temp = props.details.main.temp.toFixed(0);
  const convertTemp = `${Math.round(temp - 273)}°C`;
  const main = props.details.weather[0].main;
  const description = props.details.weather[0].description;
  const feels = props.details.main.feels_like;
  const convertFeels = `${Math.round(feels - 273)}°C`;
  const feelsTemp = `Feels like ${convertFeels}. ${main} . ${description}.`;
  const speed = props.details.wind.speed;
  const finalWind = `${speed}m/s`;
  const windDeg = props.details.wind.deg;
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.round(windDeg / 22.5) % 16;
  const finalDeg = directions[index];
  const pressure = `${props.details.main.pressure}hPa`;
  const humidity = `${props.details.main.humidity}%`;
  const visibility = props.details.visibility / 1000;
  const finalVisibility = `${visibility.toFixed(2)} km`;

  return {
    srcImg,
    convertTemp,
    feelsTemp,
    finalWind,
    finalDeg,
    pressure,
    humidity,
    finalVisibility,
  };
});
</script>
