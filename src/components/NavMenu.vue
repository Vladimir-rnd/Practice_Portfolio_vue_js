<template>
  <nav class="menu" :class="{ active: menuOpen }" aria-label="Навигация по страницам">
    <div class="menu-logo">
      <img src="/img/Logo.svg" alt="Logo" class="menu-logo-img">
      <span class="menu-logo-text">CODE WEB</span>
    </div>
    <router-link
      v-for="item in menuItems" :key="item.to"
      :to="item.to"
      class="menu-item"
      :class="{ 'active-menu-item': route.path === item.to }"
      @click="closeMenu"
    >
      <span class="menu-marker"></span>
      <span class="menu-text">{{ item.label }}</span>
    </router-link>
    <div class="menu-copyright">©2023 @trionon</div>
  </nav>
  <div class="copyright">©2023 @trionon</div>
</template>

<script setup>
import { inject } from "vue"
import { useRoute } from "vue-router"

const menuOpen = inject("menuOpen")
const toggleMenu = inject("toggleMenu")
const route = useRoute()

const menuItems = [
  { to: '/', label: 'Обо мне' },
  { to: '/projects', label: 'Проекты' },
  { to: '/skills', label: 'Навыки' },
  { to: '/contacts', label: 'Контакты' },
]

function closeMenu() {
  if (menuOpen.value) {
    toggleMenu()
  }
}
</script>

<style scoped>
.menu {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  font-size: var(--menu-font-size);
}

.menu-item {
  position: relative;
  color: var(--main-color);
  text-decoration: none;
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: color 0.3s, transform 0.3s;
}

.menu-marker {
  display: inline-block;
  width: 0.4rem;
  height: 0;
  border-radius: 0.2rem;
  background: var(--highligh-color);
  transition: height 0.3s, opacity 0.3s;
  opacity: 0;
}

.active-menu-item .menu-marker {
  height: 2.2rem;
  opacity: 1;
}

.active-menu-item {
  color: var(--highligh-color);
}

.menu-item:hover {
  color: var(--alt-color-1);
  transform: translateX(3px);
}

.menu-item:hover .menu-marker {
  height: 1.4rem;
  opacity: 0.5;
  background: var(--alt-color-1);
}

.menu-item:focus-visible {
  outline: 2px solid var(--highligh-color);
  outline-offset: 6px;
  border-radius: 4px;
}

.copyright {
  text-align: center;
  color: var(--main-color);
  font-family: var(--main-font);
  font-size: calc(var(--menu-font-size) / 1.6);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 0.35;
  margin-top: auto;
  padding-bottom: 3rem;
}

@media (max-width: 991px) {
  .menu-item {
    margin-top: 2rem;
  }
}

/* === Мобильное меню === */
.menu-logo {
  display: none;
}

.menu-copyright {
  display: none;
}

@media (max-width: 768px) {
  .copyright {
    display: none;
  }
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(15, 24, 90, 0.97);
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    z-index: 30;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }
  .menu.active {
    opacity: 1;
    visibility: visible;
  }
  .menu-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 3rem;
  }
  .menu-logo-img {
    width: 6rem;
  }
  .menu-logo-text {
    font-family: var(--main-font);
    font-size: 1.6rem;
    color: #56D4FD;
    letter-spacing: 0.15em;
  }
  .menu-item {
    font-size: 3.2rem;
    margin-top: 1rem;
    padding: 0.8rem 2rem;
    border-radius: 1rem;
    transition: background 0.3s, color 0.3s;
  }
  .menu-item:hover,
  .menu-item:active {
    background: rgba(162, 118, 255, 0.15);
  }
  .active-menu-item {
    background: rgba(162, 118, 255, 0.1);
  }
  .menu-copyright {
    display: block;
    margin-top: 3rem;
    color: var(--main-color);
    opacity: 0.3;
    font-size: 1.4rem;
    font-family: var(--main-font);
  }
}
</style>
