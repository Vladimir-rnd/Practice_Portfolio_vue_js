<template>
  <div class="heading">
    <BurgerMenu :isOpen="menuOpen" @toggle="toggleMenu" />
    <LogoBlock />
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

@media (max-width: 376px) {
  .heading {
    position: fixed;
    width: inherit;
    margin-top: 1rem;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    z-index: 1;
  }
}
</style>
