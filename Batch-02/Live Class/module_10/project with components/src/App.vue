<script setup>
import { ref } from 'vue';
import {data, fn} from "./data"
import AddNewPost from './components/AddNewPost.vue';
import Loader from './components/Loader.vue';
import Pagination from './components/Pagination.vue';
import Posts from './components/Posts.vue';

const addNewPost = ref(false);
const loading = ref(false);
const posts = ref([]);


const getPostsFromServer = () => {
    loading.value = true; 
    const res = fn.fetchPublicApi('/posts', {}, 'get');
    res.then(response => {
        loading.value = false; 
        data.posts = response;
        posts.value = JSON.parse(JSON.stringify(data.posts)); 
    });

}

getPostsFromServer();

const getPosts = () => {
    let indexNumber = 0;
    if(data.page > 1){
        indexNumber = (data.page - 1) * 6;
    }
    posts.value = JSON.parse(JSON.stringify(data.posts))
    return posts.value.splice(indexNumber, 6); 
}

</script>

<template>

    <div class="container mx-auto flex justify-between items-center my-6">
        <h1 class="font-bold text-xl mb-2">Simple Blog</h1>
        <button @click="addNewPost = !addNewPost"
            class="btn btn-primary">
            Add New Post
        </button>
    </div>

    <AddNewPost v-if="addNewPost" v-model:status="addNewPost" v-model:loading="loading" />
    <Posts :posts="getPosts()" v-if="!loading" />
    <Pagination v-if="!loading" />
    <Loader v-if="loading" />
    
</template>

<style scoped>
 
</style>
