<script setup>
import { ref, onMounted } from 'vue';
import { romb_wishesArray } from '@/constants/rests';

const getUrl = (name) => {
  return new URL(`../image/${name}`, import.meta.url).href;
};

const randomRomb = ref(null);

onMounted(() => {
  if (romb_wishesArray.length > 0) {
    const index = Math.floor(Math.random() * romb_wishesArray.length);
    randomRomb.value = romb_wishesArray[index];
  }
});
</script>

<template>
  <main class="card_main">
    <div class="loader-container">
        <div class="loader"></div>
    </div>
    <div
      v-if="randomRomb"
      class="card_main__description"
    >
      <img
        class="card"
        :src="getUrl(randomRomb.image)"
        alt="Карта: бубны"
        loading="lazy"
        decoding="async"
      >
      <div class="card_main_description-text">
        <h2 class="card_main_description-text_title">{{ randomRomb.title }}</h2>
        <p class="card_main_description-text_descr">{{ randomRomb.description }}</p>
      </div>
    </div>

    <div class="card_main__congrats">
      <div class="card_main__words">
        <p>Не забывайте, что ваша жизнь в ваших руках!</p>
        <img src="../image/yapy.png" alt="Праздничное поздравление" loading="lazy" decoding="async">
      </div>
      <div class="card_main__newyear">
        <p>Счастливого Нового Года!</p>
      </div>
    </div>
  </main>
</template>