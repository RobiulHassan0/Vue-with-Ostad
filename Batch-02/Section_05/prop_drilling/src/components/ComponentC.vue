<script setup>
import { inject } from 'vue';


 const course = inject('course')
 
</script>

<template>

    <p class="ml-8">
        Course Name in Component C: <span class="badge badge-primary ml-4">{{ course.name }}</span>
    </p>
    <p class="ml-12">
        <input type="text" v-model="course.name" class="input mt-4 input-primary">
    </p>

</template>

<style scoped>

</style>
