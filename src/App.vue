<template>
  <div class="home">
    <div class="dashboard-desktop">
      <div class="background"></div>
      <AppSidebar />
      <SocialBox />
      <AppHeader />
      <NavMenu />
      <router-view />
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, provide, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppSidebar from '@/components/AppSidebar.vue'
import SocialBox from '@/components/SocialBox.vue'
import AppHeader from '@/components/AppHeader.vue'
import NavMenu from '@/components/NavMenu.vue'
import AppFooter from '@/components/AppFooter.vue'

const menuOpen = ref(false)
const route = useRoute()

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

watch(() => route.path, () => {
  menuOpen.value = false
})

provide('menuOpen', menuOpen)
provide('toggleMenu', toggleMenu)
</script>

<style scoped>
.home {
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  color: var(--main-color);
  font-family: var(--main-font);
  overflow-x: hidden;
  overflow-y: auto;
}

.dashboard-desktop {
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: var(--darkblue);
  position: relative;
}

.background {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("/Practice_Portfolio_vue_js/img/backgd.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.25;
}
</style>