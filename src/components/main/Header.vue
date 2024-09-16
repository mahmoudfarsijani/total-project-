<template>
  <header class="w-full bg-slate-900">
    <nav class="w-full flex justify-center items-center px-[50px]">
      <div class="text-white">
        Panel
      </div>
      <Row tag="ul" :is-row="true" :is-wrap="false" class="justify-center items-center gap-[15px]">
        <li>
          <Button
            tag="button"
            :is-icon-only="false"
            class="button capitalize gap-[17px] text-white transition-all duration-300 hover:bg-gray-500"
          >
            home
          </Button>
        </li>

        <li>
          <Button
            tag="button"
            :is-icon-only="false"
            class="button capitalize gap-[17px] text-white transition-all duration-300 hover:bg-gray-500"
          >
            contact
          </Button>
        </li>

        <li>
          <Button
            tag="button"
            :is-icon-only="false"
            class="button capitalize gap-[17px] text-white transition-all duration-300 hover:bg-gray-500"
          >
            index
          </Button>
        </li>

        <li>
          <Button
            tag="button"
            :is-icon-only="false"
            class="button capitalize gap-[17px] text-white transition-all duration-300 hover:bg-gray-500"
          >
            about
          </Button>
        </li>
      </Row>
      <slot/>
    </nav>
  </header>
</template>

<script setup>
import Row from "@/components/base/Row.vue";
import Button from "@/components/base/Button.vue";
</script>
