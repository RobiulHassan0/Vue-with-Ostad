<script setup>
// import {data} from './data/data'
import data from "./data/data";
import cards from "./data/data";
import people from "./data/data";

const image = {
  src: 'https://picsum.photos/400/250?random=1',
  title: 'Auto image title',
  alt: 'auto image',
  link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
}
</script>

<template>
  <section class="min-h-screen bg-slate-100 py-16">
    <div class="max-w-7xl mx-auto px-5">
      <div class="flex justify-between gap-8">

        <div class="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img :src="people[0].image" />
          </figure>
          <div class="card-body">

            <h2 class="card-title">{{ people[0].name }}</h2>
            <h3 class="">{{ people[0].designation }}</h3>
            <h4 class="">{{ people[0].location }}</h4>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">See Details</button>
            </div>

          </div>
        </div>

        <div class="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img :src="people[1].image" />
          </figure>
          <div class="card-body">

            <h2 class="card-title">{{ people[1].name }}</h2>
            <h3 class="">{{ people[1].designation }}</h3>
            <h4 class="">{{ people[1].location }}</h4>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">See Details</button>
            </div>

          </div>
        </div>

        <div class="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img :src="people[2].image" />
          </figure>
          <div class="card-body">

            <h2 class="card-title">{{ people[2].name }}</h2>
            <h3 class="">{{ people[2].designation }}</h3>
            <h4 class="">{{ people[2].location }}</h4>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">See Details</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped></style>
