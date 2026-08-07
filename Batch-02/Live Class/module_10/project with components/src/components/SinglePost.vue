<script setup>

defineProps(['post'])

</script>


<template>
  <div class="card w-96 bg-white text-black">
    <figure>
      <img
        src="https://v1.tailwindcss.com/img/card-top.jpg"
        alt="Shoes"
      />
    </figure>
    <div class="text-center">
        <p class="badge badge-primary text-md">{{ post.id }}</p>
    </div>
    <div class="card-body">
      <h2 class="card-title">{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
