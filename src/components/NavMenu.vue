<template>
  <nav class="menu" :class="{ active: menuOpen }" aria-label="Навигация по страницам">
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

@media (max-width: 767px) {
  .copyright {
    text-align: center;
  }
}

@media (max-width: 376px) {
  .menu {
    position: absolute;
    transition-property: width, visibility;
    transition-duration: 0.2s, 0.2s;
    transition-timing-function: ease-in;
    width: 0%;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    padding-left: 1px;
    background-color: var(--darkblue);
    z-index: 1;
    top: 6rem;
    height: inherit;
  }
  .menu.active {
    position: fixed;
    width: 60%;
    visibility: visible;
  }
  .copyright {
    display: none;
  }
}
</style>
