<script setup>
import HelloWorld from './views/HelloWorld.vue/index.js'
import authState from './data/authState.js';
import LoginView from './views/LoginView.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper flex flex-col gap-4">
      <HelloWorld msg="Authentication" />
      
      <nav class="flex gap-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink v-show="authState.isAuthenticated" to="/secret">Secret</RouterLink>
      </nav>

    </div>

  </header>

  <!-- <LoginView></LoginView> -->
  <RouterView></RouterView>

</template>



<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
