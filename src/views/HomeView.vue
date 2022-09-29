<template>
  <div>
    <!-- search functionalities -->
    <div class="container px-5 mx-auto h-16 mt-6 flex items-center justify-between">
      <!-- search input -->
      <div class="border pl-6">
        <button @click="search(name)">
          <i class="fa-solid fa-search"></i>
        </button>
        <input
          type="text"
          placeholder="Search for a country..."
          class="h-10 w-60 placeholder-gray-500 placeholder:text-sm placeholder:pl-7"
          v-model="name"
        />
      </div>

      <!-- filter by region -->

      <div class="">
        <select
          name="region"
          id="region"
          class="border h-10 px-7"
          v-model="region"
          @click="filterByRegion(region)"
        >
          <option disabled value>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
          {{
            region
          }}
        </select>
      </div>
    </div>
    <!-- countries -->

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap -m-4">
          <router-link
            :to="{ name: 'country', params: { slug: country.alpha3Code } }"
            class="lg:w-1/4 md:w-1/2 p-4 w-full"
            v-for="(country, index) in countries"
            :key="index"
          >
            <div class="h-full border rounded-lg overflow-hidden">
              <img
                class="lg:h-52 md:h-36 w-full object-cover object-center"
                :src="country.flags.png"
                alt="flag"
              />
              <div class="p-6">
                <h1 class="title-font text-lg font-bold text-gray-900 mb-3">
                  {{ country.name }}
                </h1>
                <h2>
                  <span class="font-semibold">Population:</span>
                  {{ country.population.toLocaleString() }}
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
import { ref } from "vue";
import { useCountries } from "../stores/countries";

const { countries } = storeToRefs(useCountries());

//get the countries
const getCountries = async () => {
  await useCountries().getCountries();
};

getCountries();

//search functionality
const name = ref("");

const search = async (name) => {
  await useCountries().search(name);
};

//filter by region
const region = ref("");

const filterByRegion = async (region) => {
  await useCountries().filterByRegion(region);
};

console.log(countries);
</script>
