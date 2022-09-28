<template>
  <div class="container px-5 py-20 mx-auto">
    <router-link
      to="/"
      class="border inline-flex items-center px-7 py-1 shadow-xl rounded-md"
    >
      <i class="fa-solid fa-arrow-left mr-3"></i>
      <p>Back</p>
    </router-link>

    <!-- country details -->
    <div class="flex">
      <img :src="country.flags.svg" alt="" />
      <div>
        <h1 class="text-4xl font-bold">{{ country.name.common }}</h1>
        <div class="flex">
          <div class="mr-10">
            <h2>
              <span class="font-semibold">Native Name:</span>
              {{ country.name.nativeName }}
            </h2>
            <h2>
              <span class="font-semibold">Population:</span> {{ country.population }}
            </h2>
            <h2><span class="font-semibold">Region:</span> {{ country.region }}</h2>
            <h2>
              <span class="font-semibold">Sub Region:</span> {{ country.subregion }}
            </h2>
            <h2><span class="font-semibold">Capital:</span> {{ country.capital }}</h2>
          </div>
          <div class="mr-10">
            <h2>
              <span class="font-semibold">Top Level Domain:</span> {{ country.tld }}
            </h2>
            <h2>
              <span class="font-semibold">Currencies:</span>
              {{ country.currencies }}
            </h2>
            <h2>
              <span class="font-semibold">Languages:</span>
              {{ country.languages }}
            </h2>
          </div>
        </div>
        <div>
          <h2 class="font-semibold">Border Countries:</h2>
          <div class="flex">
            <router-link
              :to="{ name: 'country', params: { slug: border.name.common } }"
              class="border rounded-md px-3 py-1 mr-2"
              v-for="(border, index) in borders"
              :key="index"
            >
              {{ border.name.common }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useCountries } from "../stores/countries";

const route = useRoute();

const currentSlug = route.params.slug;

const { countries } = storeToRefs(useCountries());

const country = computed(() => {
  return countries.value.find((country) => country.name.common === currentSlug);
});
</script>

<style lang="scss" scoped></style>
