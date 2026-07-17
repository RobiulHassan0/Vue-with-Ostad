<script setup>
import { reactive, ref } from 'vue';

const person = reactive(
  {
    name: 'Jhone Doe',
    age: 30,
    job: "web Developer"
  }
); 

</script>

<template>

  <section class="w-2/6 mt-10 mx-auto">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <p class="mb-10 btn-circle bg-primary p-2"">Your Favourite Color: {{ person }}</p>
    
    <!-- <div class="flex flex-col gap-2 mb-5 text-left">
      <label for="name">Name</label>
      <input type="text" class="border border-gray-300 rounded-md p-2" v-model="person.name">
      <input type="text" class="border border-gray-300 rounded-md p-2" v-model="person.age">
      <input type="text" class="border border-gray-300 rounded-md p-2" v-model="person.job">
    </div> -->
    <div v-for="(value, key, index) in person" :key="key" class="flex flex-col gap-2 mb-5 text-left">
      <label for="name">{{ key }}</label>
      <input type="text" class="border border-gray-300 rounded-md p-2" v-model="person[key]">    
    </div>
  </section>

</template>

<style scoped>

</style>
