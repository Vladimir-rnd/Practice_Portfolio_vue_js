<template>
  <div class="heading">
    <BurgerMenu :isOpen="menuOpen" @toggle="toggleMenu" />
    <LogoBlock class="logo-desktop" />
  </div>
</template>

<script setup>
import { inject } from 'vue'
import BurgerMenu from '@/components/BurgerMenu.vue'
import LogoBlock from '@/components/LogoBlock.vue'

const menuOpen = inject('menuOpen')
const toggleMenu = inject('toggleMenu')
</script>

<style scoped>
.heading {
  margin: 0;
}

@media (max-width: 768px) {
  .heading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.8rem 1rem;
    display: flex;
    align-items: center;
    z-index: 35;
  }
  .logo-desktop {
    display: none;
  }
}
</style>
