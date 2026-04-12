<template>
  <div class="social-box">
    <a class="social-link" href="https://wa.me/79034339011" target="_blank" title="WhatsApp">
      <img class="social-icon" src="/img/wp.svg" alt="WhatsApp">
    </a>
    <a class="social-link" href="https://t.me/trionon_v" target="_blank" title="Telegram">
      <img class="social-icon" src="/img/telega.svg" alt="Telegram">
    </a>
    <a class="social-link" href="https://vk.me/id4226428" target="_blank" title="ВКонтакте">
      <img class="social-icon" src="/img/vk.svg" alt="VK">
    </a>
    <a class="social-link social-link-max" href="https://max.ru" target="_blank" title="MAX">
      <img class="social-icon" src="/img/max.svg" alt="MAX">
    </a>
  </div>
</template>

<script setup>
</script>

<style scoped>
.social-box {
  position: fixed;
  right: 2rem;
  top: 0;
  width: 24rem;
  height: 5rem;
  border-radius: 0 0 var(--thumbs-radius) var(--thumbs-radius);
  background-color: rgba(0, 0, 0, 0.3);
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  z-index: 20;
  padding: 0 1rem;
  gap: 0.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  transition: background-color 0.2s, transform 0.2s;
}

.social-link:hover {
  transform: scale(1.15);
}

.social-link:nth-child(1):hover { background-color: #25d366; }
.social-link:nth-child(2):hover { background-color: #2aabee; }
.social-link:nth-child(3):hover { background-color: #4a76a8; }
.social-link:nth-child(4):hover { background-color: #ff8c00; }

.social-icon {
  width: 24px;
  height: 24px;
}

.social-link-max {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 6px;
  width: 3.2rem;
  height: 3.2rem;
}

@media (max-width: 991px) {
  .social-box { width: 18rem; height: 4rem; }
  .social-link { width: 3.2rem; height: 3.2rem; }
  .social-icon { width: 18px; height: 18px; }
}

@media (max-width: 575px) {
  .social-box { width: 14rem; height: 3rem; right: 1rem; padding: 0 0.5rem; }
  .social-link { width: 2.5rem; height: 2.5rem; }
  .social-icon { width: 14px; height: 14px; }
}

@media (max-width: 376px) {
  .social-box { display: none; }
}
</style>
