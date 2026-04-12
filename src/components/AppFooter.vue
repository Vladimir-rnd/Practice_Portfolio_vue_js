<template>
  <div class="footer">
    <a href="https://wa.me/79034339011" target="_blank"><img class="social-icon" src="/img/wp.svg" alt="WhatsApp"></a>
    <a href="https://t.me/trionon_v" target="_blank"><img class="social-icon" src="/img/telega.svg" alt="Telegram"></a>
    <a href="https://vk.me/id4226428" target="_blank"><img class="social-icon" src="/img/vk.svg" alt="VK"></a>
    <a href="https://max.ru" target="_blank"><img class="social-icon" src="/img/max.svg" alt="MAX"></a>
    <a href="mailto:shagy@mail.ru"><span class="email-icon">✉</span></a>
  </div>
</template>

<script setup>
</script>

<style scoped>
.footer {
  display: none;
}

.social-icon {
  width: 28px;
  height: 28px;
}

.email-icon {
  font-size: 24px;
  line-height: 1;
}

@media (max-width: 768px) {
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(11, 11, 13, 0.9);
    backdrop-filter: blur(8px);
    z-index: 20;
  }
}
</style>
