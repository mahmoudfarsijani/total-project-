<template>
    <component :is="tag" :class="['cart',`cart--${isCol ? 'col' : 'default'}`,elementClass]">
        <div v-if="$slots.header" class="header">
            <slot name="header"/>
        </div>
        <slot/>
        <div v-if="$slots.footer" class="footer">
            <slot name="footer"/>
        </div>
    </component>
</template>


<script setup>
    import { defineProps,computed } from 'vue';
    import { bool, string } from 'vue-types';

   const props =  defineProps({
        tag: string().def('div'),
        isCol: bool().def(false),
        isProduct: bool().def(false),
        isCountry: bool().def(false),
        isDetail: bool().def(false),
        isUser:bool().def(false),
        isWeather: bool().def(false),
        isMovies: bool().def(false),
        isWrap: bool().def(false),
        isCast: bool().def(false),
        isCardFav: bool().def(false)
    })

    const elementClass = computed(() => ({
        'card-product': props.isProduct,
        'card-country': props.isCountry,
        'card-detail': props.isDetail,
        'card-user': props.isUser,
        'card-weather': props.isWeather,
        'card-movies': props.isMovies,
        'card-wrap': props.isWrap,
        'card-cast': props.isCast,
        'card-fav': props.isCardFav
    }))
</script>


<style scoped>
    .cart {
        @apply flex overflow-hidden
    }

    .cart--col {
        @apply flex-col 
    }

    .cart--default {
        @apply flex-row 
    }

    .card-product {
        @apply w-[30%] max-w-[280px]   pb-[10px]  rounded-lg shadow-md gap-[5px] 
    }

    .card-country {
        @apply w-[30%] max-w-[280px] gap-[5px] rounded-lg
    }

    .card-detail {
        @apply w-[35%] rounded-md p-[5px]
    }

    .card-user {
        @apply w-[25%] rounded-md py-[20px] 
    }

    .card-weather {
        @apply w-[35%] min-w-[450px] bg-gray-700 rounded-md py-[20px] shadow-lg items-start px-[10px] gap-[15px]
    }

    .card-movies {
        @apply w-full gap-[10px]
    }

    .card-wrap {
        @apply flex-wrap
    }

    .card-cast {
        @apply w-[150px] items-center
    }

    .card-fav {
        @apply w-[190px] items-center rounded-lg overflow-hidden
    }
</style>