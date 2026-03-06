<template>
  <div class="footer">
    <img class="social-icon" src="/img/wp.svg" alt="WhatsApp">
    <img class="social-icon" src="/img/telega.svg" alt="Telegram">
  </div>
</template>

<script setup>
</script>

<style scoped>
.footer {
  display: none;
}

.social-icon {
  width: 10%;
}

@media (max-width: 376px) {
  .footer {
    position: absolute;
    margin-top: 2rem;
    bottom: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}

@media (min-width: 375px) {
  .footer { display: none; }
}
</style>
