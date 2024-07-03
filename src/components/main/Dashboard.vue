<template>
  <div class="h-full flex flex-col justify-between py-[15px] px-[10px]">
    <div class="flex flex-col">
      <h2 class="title text-[30px] capitalize text-white ps-[10px]">dashboard</h2>
      <Row tag="ul" :is-col="true" class="pt-[25px] gap-[15px]">
        <li>
          <Button
            tag="RouterLink"
            :to="{ name: 'home-dashboard' }"
            :is-icon-only="false"
            icon="home"
            :is-left="true"
            class="capitalize gap-[17px] text-white transition-all duration-300 hover:bg-gray-500"
          >
            home
          </Button>
        </li>
        <li>
          <Button
            tag="RouterLink"
            :to="{ name: 'chart-dashboard' }"
            :is-icon-only="false"
            icon="chart"
            :is-left="true"
            class="capitalize gap-[17px] text-white transition-all duration-300 hover:bg-gray-500"
          >
            chart
          </Button>
        </li>
        <li>
          <Button
            tag="RouterLink"
            :to="{ name: 'message-dashboard' }"
            :is-icon-only="false"
            icon="message"
            :is-left="true"
            class="capitalize gap-[17px] text-white transition-all duration-300 hover:bg-gray-500"
          >
            message
          </Button>
        </li>
        <li>
          <Button
            tag="RouterLink"
            :to="{ name: 'setting-dashboard' }"
            :is-icon-only="false"
            icon="setting"
            :is-left="true"
            class="capitalize gap-[17px] text-white transition-all duration-300 hover:bg-gray-500"
          >
            setting
          </Button>
        </li>
      </Row>
    </div>
    <div>
      <Row tag="ul">
        <li>
          <Button
            tag="RouterLink"
            :to="{ name: 'home' }"
            :is-icon-only="false"
            icon="logout"
            :is-left="true"
            class="capitalize gap-[17px] text-white transition-all duration-300 hover:bg-gray-500"
          >
            logout
          </Button>
        </li>
      </Row>
    </div>
  </div>
</template>

<script setup>
import Row from "@/components/base/Row.vue";
import Button from "@/components/base/Button.vue";
</script>
