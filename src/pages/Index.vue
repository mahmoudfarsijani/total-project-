<template>
  <div>
    <Container>
      <div
        class="box w-full pt-[50px] text-[35px] flex flex-col items-center justify-center"
      >
        <h1 class="capitalize">hello to home page</h1>
        <div class="flex">
          <Button
            tag="RouterLink"
            :to="{ name: 'product' }"
            class="btn btn-link capitalize dark:text-red-600"
          >
            go to products page
          </Button>
          <Button
            tag="RouterLink"
            :to="{ name: 'country' }"
            class="btn btn-link capitalize dark:text-red-600"
          >
            go to country page
          </Button>
          <Button
            tag="RouterLink"
            :to="{ name: 'random-user' }"
            class="btn btn-link capitalize dark:text-red-600"
          >
            go to random user
          </Button>
          <Button
            tag="RouterLink"
            :to="{ name: 'weather' }"
            class="btn btn-link capitalize dark:text-red-600"
          >
            go to weather
          </Button>
          <Button
            tag="RouterLink"
            :to="{ name: 'movies' }"
            class="btn btn-link capitalize dark:text-red-600"
          >
            go to movies
          </Button>
          <Button
            tag="RouterLink"
            :to="{ name: 'logout' }"
            class="btn btn-link capitalize dark:text-red-600"
          >
            go to create account
          </Button>
          <Button
            tag="RouterLink"
            :to="{ name: 'login' }"
            class="btn btn-link capitalize dark:text-red-600"
          >
            go to login
          </Button>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "@/components/base/Container.vue";
import Button from "@/components/base/Button.vue";
</script>
