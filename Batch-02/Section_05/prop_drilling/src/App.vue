<script setup>
import { provide, reactive } from "vue";
import ComponentA from "./components/ComponentA.vue";

const course = reactive({
  name: "Vue 3",
  price: 299,
});

provide('course', course)
</script>

<template>
  <section
    class="container mx-auto flex flex-col justify-center border mt-20 p-5"
  >
    <div class="flex flex-col gap-10 items-center justify-center">
      <h1 class="text-4xl">Props Drilling and Slots</h1>
      <div class="divider divider-secondary">
        <img class="w-15" src="./assets/logo.svg" alt="" />
      </div>
    </div>

    <div class="flex flex-col">
      <div class="flex gap-8">
        <label class="text-2xl">Components</label>
        <input v-model="course.name" type="text" class="input input-primary mb-4" />
      </div>
      <span class="divider divider-error w-30"></span>

      <p>
        <ComponentA />
      </p>
    </div>
  </section>
</template>

<style scoped></style>
