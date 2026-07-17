<script setup>
import { reactive, ref } from 'vue';

const asianCountries = reactive([
  {name: 'Bangladesh', capital: 'Dhaka'},
  {name: 'Pakistan', capital: 'Islamabad'},
  {name: 'India', capital: 'New Delhi'},
  {name: 'Afghanistan', capital: 'Kabul'},
  {name: 'China', capital: 'Beijing'}
]);

const capitals= ['Dhaka', 'Kabul', 'Islamabad', 'Beijing', 'New Delhi']

function getScore(){
  let score = 0;
  asianCountries.forEach( (country) => {
    if(country.answer === country.capital){
      score++;
    }
  });
  return score;
}

// function getCapitalRandom(){
//   return capitals;
//   // return capitals.sort( () => Math.random() - 0.5)
// }

</script>

<template>
<section class="max-w-4xl mx-auto space-y-6 mt-4">
  <h1 class="text-center">Vue Form</h1>
  <div>
      {{ asianCountries }}
  </div>

  <button class="btn btn-primary">Score: <strong class="text-2xl">{{ getScore() }}</strong></button>

  <div v-for="(country, index) in asianCountries" :key="country.name" class="border border-gray-300 flex flex-col gap-4 rounded-lg p-6 bg-white shadow-sm">
      <h2 class="text-lg font-semibold text-gray-800 mb-5">
          {{ index+1 }}. What is the capital of {{ country.name }}?
      </h2>

      <div class="flex justify-between gap-5">
          <label v-for="(capital, index) in capitals" :key="index" class="flex items-center gap-2 cursor-pointer">
              <input :value="capital" :name="country.name" v-model="country.answer" type="radio" name="radio-5" class="radio radio-secondary" />
              <span class="text-black">{{ capital }}</span>
          </label>

      </div>
  </div>


</section>

</template>

<style scoped>

</style>
