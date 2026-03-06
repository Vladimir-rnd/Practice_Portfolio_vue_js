<template>
  <nav class="menu" :class="{ active: menuOpen }">
    <router-link
      to="/"
      class="menu-item"
      :class="{ 'active-menu-item': $route.path === '/' }"
      @click="closeMenu"
    >
      Обо мне
    </router-link>
    <router-link
      to="/projects"
      class="menu-item"
      :class="{ 'active-menu-item': $route.path === '/projects' }"
      @click="closeMenu"
    >
      Проекты
    </router-link>
    <router-link
      to="/skills"
      class="menu-item"
      :class="{ 'active-menu-item': $route.path === '/skills' }"
      @click="closeMenu"
    >
      Навыки
    </router-link>
    <router-link
      to="/contacts"
      class="menu-item"
      :class="{ 'active-menu-item': $route.path === '/contacts' }"
      @click="closeMenu"
    >
      Контакты
    </router-link>
    <div class="menu-item copyright">©2023 @trionon</div>
  </nav>
</template>

<script setup>
import { inject } from "vue"
import { useRoute } from "vue-router"

const menuOpen = inject("menuOpen")
const toggleMenu = inject("toggleMenu")
const route = useRoute()

function closeMenu() {
  if (menuOpen.value) {
    toggleMenu()
  }
}
</script>

<style scoped>
.menu {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: calc(var(--sidebar-width) - 5rem);
  height: auto;
  align-items: center;
  font-size: var(--menu-font-size);
}

.menu-item {
  color: var(--main-color);
  text-decoration: none;
  margin-top: 3.5rem;
}

.active-menu-item {
  color: var(--highligh-color);
}

.menu-item:hover {
  color: var(--alt-color-1);
}

.copyright {
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 0.25;
  padding-top: 5rem;
  font-size: calc(var(--menu-font-size) / 1.4);
}

@media (max-width: 991px) {
  .menu {
    width: calc(var(--sidebar-width));
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
}
</style>
