<template>
  <div class="social-box">
    <img class="social-icon" src="/img/wp.svg" alt="WhatsApp">
    <img class="social-icon" src="/img/telega.svg" alt="Telegram">
  </div>
</template>

<script setup>
</script>

<style scoped>
.social-box {
  position: absolute;
  right: 2rem;
  width: 20rem;
  height: 6rem;
  border-radius: 0 0 var(--thumbs-radius) var(--thumbs-radius);
  background-color: var(--highligh-color);
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
}

.social-box:hover {
  background-color: var(--alt-color-1);
}

.social-icon {
  width: 30px;
  height: 30px;
}

@media (max-width: 991px) {
  .social-box { width: 13rem; height: 4rem; }
  .social-icon { width: 20%; }
}

@media (max-width: 575px) {
  .social-box { width: 8.33rem; height: 2.5rem; right: 1rem; }
}

@media (max-width: 376px) {
  .social-box { display: none; }
}
</style>
