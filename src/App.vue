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
  width: var(--screen-width);
  height: var(--screen-height);
  color: var(--main-color);
  font-family: var(--main-font);
  overflow: hidden;
}

.dashboard-desktop {
  width: 100%;
  height: 100%;
  opacity: 0.95;
  overflow: hidden;
  background-color: var(--darkblue);
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("/img/backgd.jpg");
  opacity: 0.15;
}
</style>
