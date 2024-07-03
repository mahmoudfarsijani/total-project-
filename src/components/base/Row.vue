<template>
    <component :is="tag" :class="['list',`list--${isRow ? 'row' : 'col'}`,`list--${isWrap ? 'wrap' : 'nowrap'}`]">
        <slot/>
    </component>
</template>


<script setup>
    import { defineProps } from 'vue';
    import { bool, string } from 'vue-types';


    defineProps({
        tag: string().def('div'),
        isRow: bool().def(false),
        isWrap: bool().def(false)
    })
</script>


<style scoped>
    .list {
        @apply w-full flex
    }

    .list--row{
        @apply flex-row 
    }

    .list--col {
        @apply flex-col
    }

    .list--wrap {
        @apply flex-wrap
    }

    .list--nowrap {
        @apply flex-nowrap
    }
</style>