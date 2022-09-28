<template>
  <div>
    <!-- search functionalities -->
    <div
      class="container px-5 mx-auto border border-green-700 h-16 mt-10 flex items-center justify-between"
    >
      <!-- search input -->
      <div>
        <button class="r">
          <i class="fa-solid fa-search"></i>
        </button>
        <input
          type="text"
          placeholder="Search for a country..."
          class="border h-10 w-60 ml-2 placeholder-gray-500 placeholder:text-sm placeholder:pl-7"
        />
      </div>

      <!-- filter by region -->

      <div class="">
        <select name="region" id="region" class="border h-10 px-7">
          <option value="all">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
    <!-- countries -->
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-wrap -m-4">
          <router-link
            :to="{ name: 'country', params: { slug: country.name.common } }"
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
          </router-link>
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
