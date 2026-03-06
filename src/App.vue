<template>
  <div class="home">
    <div class="dashboard-desktop">
      <div class="background"></div>

      <!-- Фиксированный sidebar-контейнер: не участвует в потоке -->
      <div class="sidebar-fixed">
        <div class="sidebar-bg"></div>
        <AppHeader />
        <NavMenu />
      </div>

      <SocialBox />
      <router-view />
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, provide, watch } from 'vue'
import { useRoute } from 'vue-router'
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
  z-index: 0;
}

/* === Фиксированный sidebar-контейнер === */
.sidebar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--sidebar-width);
  height: 100vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

/* Тёмный фон sidebar (вместо отдельного AppSidebar) */
.sidebar-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--vdarkblue);
  opacity: 0.5;
  z-index: -1;
}

@media (max-width: 376px) {
  .sidebar-fixed {
    position: relative;
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }
  .sidebar-bg {
    display: none;
  }
}
</style>