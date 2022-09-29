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

 function search(name) {
  return countries.value.filter((country) => {
   return country.name.includes(name.value)
  })
 }

 return { countries, getCountries, search }
})
