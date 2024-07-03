<template>
    <component :is="tag" :class="['button',`button--${isIconOnly ? 'rounded' : 'default'}`]">
        <slot v-if="!isIconOnly"/>
        <Icon v-if="icon" :name="icon"/>
    </component>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { string,oneOf, bool } from 'vue-types';
    import Icon from '@/components/base/Icon.vue';

    defineProps({
        tag: oneOf(['button','a','span','RouterLink']).def('button'),
        isIconOnly: bool().def(false),
        icon: string()
    })
</script>


<style scoped>
    .button {
        @apply cursor-pointer flex
    }  
    
    .button--rounded {
        @apply rounded-full p-[9px]
    }

    .button--default {
        @apply rounded-md px-[7px] py-[6px] whitespace-nowrap flex-nowrap items-center
    }
</style>