<script setup>
import { ref, onMounted } from 'vue';
import { heart_wishesArray } from '@/constants/rests';

// Получаем корректный URL до картинки из папки src/image
const getUrl = (name) => {
  return new URL(`../image/${name}`, import.meta.url).href;
};

// Один случайный объект из массива пожеланий
const randomHeart = ref(null);

onMounted(() => {
  if (heart_wishesArray.length > 0) {
    const index = Math.floor(Math.random() * heart_wishesArray.length);
    randomHeart.value = heart_wishesArray[index];
  }
});
</script>

<template>
  <main class="card_main">
    <div class="loader-container">
        <div class="loader"></div>
    </div>
    <!-- Показываем только одну случайную карту -->
    <div
      v-if="randomHeart"
      class="card_main__description"
    >
      <img
        class="card"
        :src="getUrl(randomHeart.image)"
        alt="Карта: черви"
        loading="lazy"
        decoding="async"
      >
      <div class="card_main_description-text">
        <h2 class="card_main_description-text_title">{{ randomHeart.title }}</h2>
        <p class="card_main_description-text_descr">{{ randomHeart.description }}</p>
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