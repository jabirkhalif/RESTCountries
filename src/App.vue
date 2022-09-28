<script setup>
import { RouterView } from "vue-router";
import TheNav from "./components/TheNav.vue";
</script>

<template>
  <header>
    <TheNav />
  </header>

  <RouterView />
</template>

<style scoped>
#app {
  font-family: "Nunito", sans-serif;
}
</style>
