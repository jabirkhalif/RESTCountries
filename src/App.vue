<script setup>
import { RouterView } from "vue-router";
import TheNav from "./components/TheNav.vue";
</script>

<template>
  <div class="bg-gray-100 dark:bg-slate-900">
    <header>
      <TheNav />
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
#app {
  font-family: "Nunito", sans-serif;
}
</style>
