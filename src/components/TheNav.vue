<template>
  <div class="w-full shadow-md dark:bg-slate-700 dark:text-white">
    <nav class="w-9/12 h-20 m-auto flex justify-between items-center">
      <router-link to="/">
        <h1 class="font-bold text-2xl">Where in the world?</h1>
      </router-link>

      <button class="py-2 px-4 rounded" @click="toggleDark()">
        <i class="fa-regular fa-moon"></i>Dark Mode
      </button>
    </nav>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

//dark mode
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped></style>
