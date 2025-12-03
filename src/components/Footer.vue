<script setup>
import gitHub from '@/image/github.svg'
</script>

<template>
    <footer class="footer">
        <router-link to="https://github.com/ViolettaS41/What-will-your-next-year-be-like-" class="footer_link">
            <img :src="gitHub" alt="github" class="footer_icon">
        </router-link>
    </footer>
</template>