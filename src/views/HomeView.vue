<template>
  <div>{{ countries }}</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCountries } from "../stores/countries";

const { countries } = storeToRefs(useCountries());
</script>

<style lang="scss" scoped></style>
