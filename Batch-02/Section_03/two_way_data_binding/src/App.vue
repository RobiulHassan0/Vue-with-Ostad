<script setup>
import { reactive, ref } from 'vue';

const displayImage = ref(true);

</script>

<template>

  <section class="w-2/6 mt-10 mx-auto space-x-5">
    <h1 class="text-2xl mb-10">Tow way data binding with Radio box</h1>
    <p class="mb-10 ">{{ displayImage }}</p>
    <label for="">Display Random Image</label>
    <input type="checkbox" class="checkbox checkbox-secondary"  v-model="displayImage"/>

    <div class="flex gap-4 mt-4">
      <input type="radio" name="display" class="radio radio-xl radio-secondary" :value="true" v-model="displayImage"/> ON 
      <input type="radio" name="display" class="radio radio-xl radio-secondary" :value="false" v-model="displayImage" /> OFF
    </div>
    <img v-show="displayImage" class="mt-10 mx-auto w-175" :src="`https://picsum.photos/300/200?random=${Math.random()}`" alt="">
  </section>

</template>

<style scoped>

</style>
