<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div>
    <Header />

  <main class="main">
    <router-view></router-view>
  </main>
  <Footer />
  </div>
</template>


