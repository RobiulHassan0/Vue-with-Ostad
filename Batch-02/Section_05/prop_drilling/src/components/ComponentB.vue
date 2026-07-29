<script setup>
import { inject } from 'vue';
import ComponentC from './ComponentC.vue';

const course = inject('course')
 
</script>

<template>

    <p class="ml-4">
        Course Name in Component B: <span class="badge badge-primary ml-4 mb-2">{{ course.name }}</span>
    </p>
    <p>
        <ComponentC  />
    </p>

</template>

<style scoped>

</style>
