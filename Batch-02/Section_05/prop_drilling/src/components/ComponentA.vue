<script setup>
import { inject } from "vue";
import ComponentB from "./ComponentB.vue";

const course = inject('course')

</script>

<template>
  
    <p>
      Course Name in Component A:
      <span class="badge badge-primary ml-4 mb-2">{{ course.name }}</span>
    </p>
    <p>
      <ComponentB />
    </p>
 
</template>

<style scoped></style>
