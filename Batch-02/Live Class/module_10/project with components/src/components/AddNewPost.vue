<script setup>
import { ref } from 'vue';
import { data, fn } from '@/data';

const props = defineProps(['status', 'loading']);
const emit = defineEmits('update:status', 'loading');

    const newPost =  ref(
        {
            title: "",
            body: "",
            userId: 1,
        }
    );
    
    const submitNewPost = () => {
        emit('update:loading', true);
        
        const res = fn.fetchPublicApi('/posts', newPost.value, "POST");

        res.then( (response) => {

            emit('update:status', false);
            emit('update:loading', false);

            data.posts.unshift({
                ...newPost.value, 
                id: response.id
            });            
        });
      };

</script>

<template>
    <div class="flex flex-col justify-between items-center mb-6 gap-6 container mx-auto">
        <div class="flex items-center w-full">
            <div class="w-1/5">
                <label class="badge badge-primary"> Title </label>
            </div>
            <div class="w-4/5">
                <input v-model="newPost.title" class="input input-primary text-black bg-white w-full" type="text" />
            </div>
        </div>
        <div class="flex items-center w-full">
            <div class="w-1/5">
                <label class="badge badge-primary"> Body </label>
            </div>
            <div class="w-4/5">
                <textarea v-model="newPost.body" name="comment" class="textarea textarea-primary text-black bg-white w-full">
                </textarea>
            </div>
        </div>
        <button @click.prevent="submitNewPost()" class="btn btn-primary">
            Submit
        </button>
    </div>
</template>


<style scoped>

</style>