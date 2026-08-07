<script setup>
import SinglePost from './SinglePost.vue';

defineProps(['posts'])

</script>


<template>
    <div class="grid grid-cols-3 gap-8 container mx-auto mt-14">
        <SinglePost v-for="post in posts" :key="post.id" :post="post" />
        <!-- <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost /> -->
   
    </div>
</template>


<style lang="scss" scoped>

</style>