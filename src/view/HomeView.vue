<script setup>
import cardRomb from "@/image/card_romb.png";
import blackHeart from "@/image/black_heart.png";
import cardHeart from "@/image/card_heart.png";
import cardKrest from "@/image/card_krest.png";
</script>

<template>
    <main class="main">
        <div class="main_description">
            <p class="main_description_text">Приветствую! Хочешь предсказание на следующий год?
                Тогда выбери карту и узнай, каким будет твой новый год! </p>
        </div>
        <div class="main_cards">
            <div class="main_card-item">
                <router-link to="/diamonds"><img :src="cardRomb" alt="romb"></router-link>
            </div>
            <div class="main_card-item">
                <router-link to="/spades"><img :src="blackHeart" alt="black_heart"></router-link>
            </div>
            <div class="main_card-item">
                <router-link to="/hearts"><img :src="cardHeart" alt="heart"></router-link>
            </div>
            <div class="main_card-item">
                <router-link to="/clubs"><img :src="cardKrest" alt="krest"></router-link>
            </div>
        </div>
    </main>
</template>