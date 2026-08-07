<script setup>
import { data, fn } from '@/data';


const changePage = (status) => {
    const totalPage = Math.ceil(data.posts.length / 6);
    
    if(status === 'prev' && data.page > 1){
        data.page --;
    }else if(status === 'next' && data.page < totalPage){
        data.page++;
    }
} 

</script>

<template>
 
  <div class="join flex justify-center container mx-auto my-12">
    <button @click="changePage('prev')" class="join-item btn btn-outline bg-primary">Previous page</button>
    <button @click="changePage('next')" class="join-item btn btn-outline bg-secondary">Next</button>
  </div>
</template>

<style scoped></style>
