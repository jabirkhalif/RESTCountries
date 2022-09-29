import { ref } from "vue"
import { defineStore } from "pinia"
import axios from "axios"

export const useCountries = defineStore("countries", () => {
 const countries = ref([])

 async function getCountries() {
  await axios.get("https://restcountries.com/v2/lang/eng").then((data) => {
   countries.value = data.data
  })
 }
 //search
 function search(name) {
  countries.value = ref([])
  axios.get(`https://restcountries.com/v2/name/${name}`).then((data) => {
   countries.value = data.data
  })
 }

 //filter by region

 function filterByRegion(region) {
  countries.value = ref([])
  axios.get(`https://restcountries.com/v2/region/${region}`).then((data) => {
   countries.value = data.data
  })
 }

 return { countries, getCountries, search, filterByRegion }
})
