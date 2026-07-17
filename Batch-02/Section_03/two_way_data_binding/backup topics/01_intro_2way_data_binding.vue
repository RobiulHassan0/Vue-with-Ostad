<script setup>
import { ref } from 'vue';

 const color = ref('none')

 function getStyle(){
  return {
    backgroundColor: color.value
  }
 }

 </script>

<template>

  <section class="w-96 p-5 mx-auto">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <p>Your Favourite Color: {{ color }}</p>
    <p class="flex flex-col gap-4">
      Your Favourite Color: 
      <!-- <input :value="color" type="text" placeholder="Secondary" class="input input-secondary" /> -->
      <input v-model="color" class="input input-secondary" />
      <div class="w-32 h-32 mt-10" :style="getStyle()">

      </div>
    </p>
  </section>

</template>

<style scoped>

</style>
