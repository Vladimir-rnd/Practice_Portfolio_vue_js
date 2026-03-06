<template>
  <div class="sidebar"></div>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  position: absolute;
  background-color: var(--vdarkblue);
  width: var(--sidebar-width);
  height: 100%;
  opacity: 0.5;
}

@media (max-width: 376px) {
  .sidebar {
    display: none;
  }
}
</style>
