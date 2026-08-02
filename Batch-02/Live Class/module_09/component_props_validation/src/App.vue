<script setup>
import TeamSecttion from './views/TeamSection.vue';
import { ref } from 'vue';

const persons = ref([
    {
        name: "Shafin Jaman",
        desgination: "CEO & Web Developer",
        description: "Robiul Hassan the technical strategy of the flowbite platform and brand.",
        avatar: "//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
    },
    {
        name: "Sadikur Rahman",
        desgination: "Web Developer",
        description: "Sadikur Rahman the technical strategy of the flowbite platform and brand.",
        avatar: "//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
    },
    {
        name: "Adbul Karim",
        desgination: "CEO & Founder",
        description: "Adbul Karim the technical strategy of the flowbite platform and brand.",
        avatar: "//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
    },
    {
        name: "Ibn Fulan",
        desgination: "Software Engineer",
        description: "Ibn Fulan the technical strategy of the flowbite platform and brand.",
        avatar: "//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
    },

])

</script>

<template>

<TeamSecttion :persons="persons" />

</template>

<style scoped></style>
