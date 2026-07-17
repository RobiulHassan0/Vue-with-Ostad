<script setup>
import { reactive, ref } from 'vue';

const favColors = ref([]); //not reactive. only use ref for multple value of an array

</script>

<template>

  <section class="w-2/6 mt-10 mx-auto space-x-5">
    <h1 class="text-2xl mb-10">Tow way data binding with Radio box</h1>
    <p class="mb-10 ">{{ favColors }}</p>
    Your Favourite Colors: <br>
    <label for="red">Red</label>
    <input type="checkbox" class="checkbox checkbox-secondary" value="red" v-model="favColors"/>
    <label for="red">Green</label>
    <input type="checkbox" class="checkbox checkbox-secondary" value="green" v-model="favColors"/>

  </section>

</template>

<style scoped>

</style>
