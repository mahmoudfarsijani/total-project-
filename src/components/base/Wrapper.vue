<template>
    <div :class="{'dark':isDark}" class="wrapper">
        <slot/>
    </div>
</template>


<script setup>
    import {ref} from 'vue'

    const isDark = ref(false)
</script>