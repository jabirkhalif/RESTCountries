<template>
  <div class="px-40 py-20 m-auto h-[100vh]" id="countryContainer">
    <router-link
      to="/"
      class="border inline-flex items-center px-7 py-1 shadow-xl rounded-md dark:text-white"
      id="backBtn"
    >
      <i class="fa-solid fa-arrow-left mr-3"></i>
      <p>Back</p>
    </router-link>

    <!-- country details -->
    <div class="flex h-5/6 items-center" id="countryDetails">
      <div class="w-1/2" id="flag">
        <img
          class="lg:h-[45vh] object-contain object-center w-full ml"
          :src="country.flags.svg"
          alt=""
        />
      </div>

      <div class="w-1/2 flex flex-col gap-10 pl-24 dark:text-white" id="details">
        <h1 class="text-4xl font-bold dark:text-stone-400" id="name">
          {{ country.name }}
        </h1>
        <div class="flex justify-between" id="detailsContainer">
          <div class="mr-10 w-1/2 flex flex-col gap-5">
            <h2>
              <span class="font-bold dark:text-stone-400">Native Name:</span>
              {{ country.nativeName }}
            </h2>
            <h2>
              <span class="font-bold dark:text-stone-400">Population:</span>
              {{ country.population.toLocaleString() }}
            </h2>
            <h2>
              <span class="font-bold dark:text-stone-400">Region:</span>
              {{ country.region }}
            </h2>
            <h2>
              <span class="font-bold dark:text-stone-400">Sub Region:</span>
              {{ country.subregion }}
            </h2>
            <h2>
              <span class="font-bold dark:text-stone-400">Capital:</span>
              {{ country.capital }}
            </h2>
          </div>
          <div class="w-1/2 mr-10 flex flex-col gap-5">
            <h2>
              <span class="font-bold dark:text-stone-400">Top Level Domain:</span>
              {{ country.topLevelDomain[0] }}
            </h2>
            <h2>
              <span class="font-bold dark:text-stone-400">Currencies:</span>
              {{ country.currencies[0].name }}
            </h2>
            <!-- languages -->
            <h2>
              <span class="font-bold dark:text-stone-400">Languages:</span>
              <span v-for="(language, index) in country.languages" :key="index">
                {{ language.name }}
                <span v-if="index < country.languages.length - 1">,</span>
              </span>
            </h2>
          </div>
        </div>
        <div>
          <span class="font-bold dark:text-stone-400 pr-1" id="borderBtn"
            >Border Countries:</span
          >
          <!-- border countries -->

          <router-link
            v-for="(border, index) in country.borders"
            :key="index"
            :to="`/country/${border}`"
            class="border inline-flex items-center mr-2 px-5 py-1 shadow-xl rounded-md dark:border-stone-400"
          >
            {{ border }}
          </router-link>
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

//get the countries
const getCountries = async () => {
  await useCountries().getCountries();
};

getCountries();

const country = computed(() => {
  return countries.value.find((country) => country.alpha3Code === currentSlug);
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  #countryContainer {
    padding: unset;
    height: auto;
    width: 90vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  #backBtn {
    width: 40%;
    margin-top: 20px;
  }
  #countryDetails {
    display: flex;
    flex-direction: column;

    height: 100%;
    font-size: 10px;

    padding: 0;
    gap: 10px;
  }
  #flag {
    width: 100%;
  }
  #details {
    width: 100%;
    padding: 0;
    margin: 0%;
    gap: 10px;
  }
  #name {
    font-size: 2.5em;
  }
  #detailsContainer {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  #detailsContainer > div {
    width: 100%;
    gap: 0;
    font-size: 1.6em;
    font-weight: 300;
  }
  #detailsContainer > div > h2 {
    padding-bottom: 10px;
    font-weight: 300;
  }
  #detailsContainer > div > h2 > span {
    font-weight: 400;
  }
  #borderBtn {
    font-size: 1.6em;
    font-weight: 300;
  }
}
</style>
