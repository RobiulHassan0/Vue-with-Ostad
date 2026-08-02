<script setup>
import Person from '@/components/Person.vue';

defineProps({
    persons: Array,
})

</script>

<template>
    <section class="flex justify-center">
        <div class="bg-white dark:bg-gray-900">
            <div class="flex flex-col gap-14 max-w-7xl py-16 px-6 ">
                <div class="flex flex-col items-center justify-center gap-8 text-center ">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
                    <p class="font-light text-gray-500 mb-16 text-xl dark:text-gray-400">Explore the whole
                        collection of open-source web components and elements built with the utility classes from
                        Tailwind
                    </p>
                </div>
                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <Person v-for="(person, index) in persons" :key="index" :person="person" />
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped></style>