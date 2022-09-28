<template>
  <div class="px-40 py-20 mx-auto h-[80vh]">
    <router-link
      to="/"
      class="border inline-flex items-center px-7 py-1 shadow-xl rounded-md"
    >
      <i class="fa-solid fa-arrow-left mr-3"></i>
      <p>Back</p>
    </router-link>

    <!-- country details -->
    <div class="flex h-full items-center">
      <div class="w-1/2">
        <img
          class="lg:h-[45vh] md:h-36 object-cover object-center w-4/5 ml"
          :src="country.flags.svg"
          alt=""
        />
      </div>

      <div class="w-1/2 flex flex-col gap-10">
        <h1 class="text-4xl font-bold">{{ country.name }} {{ countries.alpha2code }}</h1>
        <div class="flex justify-between">
          <div class="mr-10 w-1/2 flex flex-col gap-5">
            <h2>
              <span class="font-bold">Native Name:</span>
              {{ country.nativeName }}
            </h2>
            <h2><span class="font-bold">Population:</span> {{ country.population }}</h2>
            <h2><span class="font-bold">Region:</span> {{ country.region }}</h2>
            <h2><span class="font-bold">Sub Region:</span> {{ country.subregion }}</h2>
            <h2><span class="font-bold">Capital:</span> {{ country.capital }}</h2>
          </div>
          <div class="w-1/2 mr-10 flex flex-col gap-5">
            <h2>
              <span class="font-bold">Top Level Domain:</span>
              {{ country.topLevelDomain }}
            </h2>
            <h2>
              <span class="font-bold">Currencies:</span>
              {{ country.currencies[0].name }}
            </h2>
            <!-- languages -->
            <h2>
              <span class="font-bold">Languages:</span>
              <span v-for="(language, index) in country.languages" :key="index">
                {{ language.name }}
                <span v-if="index < country.languages.length - 1">,</span>
              </span>
            </h2>
          </div>
        </div>
        <div>
          <h2 class="font-bold">Border Countries:</h2>
          <!-- border countries -->
          <div class="flex gap-3 mt-3">
            <router-link
              v-for="(border, index) in country.borders"
              :key="index"
              :to="`/country/${border}`"
              class="border inline-flex items-center px-7 py-1 shadow-xl rounded-md"
            >
              <p>{{ border }}</p>
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
  return countries.value.find((country) => country.name === currentSlug);
});
</script>

<style lang="scss" scoped></style>
