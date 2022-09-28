<template>
  <div class="about">
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div
            class="lg:w-1/4 md:w-1/2 p-4 w-full"
            v-for="(country, index) in countries"
            :key="index"
          >
            <div class="h-full border rounded-lg overflow-hidden">
              <img
                class="lg:h-52 md:h-36 w-full object-cover object-center"
                :src="country.flags.svg"
                alt="flag"
              />
              <div class="p-6">
                <h1 class="title-font text-lg font-bold text-gray-900 mb-3">
                  {{ country.name.common }}
                </h1>
                <h2>
                  <span class="font-semibold">Population:</span> {{ country.population }}
                </h2>
                <h2><span class="font-semibold">Region:</span> {{ country.region }}</h2>

                <h2><span class="font-semibold">Capital:</span> {{ country.capital }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

<script setup>
import { storeToRefs } from "pinia";
import { useCountries } from "../stores/countries";

const { countries } = storeToRefs(useCountries());

console.log(countries);
</script>
