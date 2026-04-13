<template>
  <div class="not-found">
    <div class="content glass-panel">
      <div class="code">404</div>
      <h1 class="title">{{ t('notFound.title') }}</h1>
      <p class="text">{{ t('notFound.text') }}</p>
      <router-link to="/" class="back-btn">{{ t('notFound.back') }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.not-found {
  position: fixed;
  top: 0;
  left: var(--sidebar-width);
  width: calc(100vw - var(--sidebar-width));
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: var(--body-font);
}

.content {
  text-align: center;
  padding: 5rem 4rem;
  max-width: 50rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.6rem;
  backdrop-filter: blur(12px);
  animation: fadeScaleIn 0.6s ease both;
}

.code {
  font-family: var(--main-font);
  font-size: 10rem;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, var(--highligh-color), #c084ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.title {
  font-family: var(--main-font);
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--main-color);
  margin: 0 0 1rem;
}

.text {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 2.5rem;
  line-height: 150%;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  padding: 1.2rem 2.8rem;
  background: linear-gradient(135deg, var(--highligh-color), #7c4dff);
  color: #fff;
  font-family: var(--main-font);
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 5rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 24px rgba(162, 118, 255, 0.4);
}

@keyframes fadeScaleIn {
  from { opacity: 0; transform: scale(0.95) translateY(8px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

@media (max-width: 768px) {
  .not-found {
    position: relative;
    left: auto;
    width: 100%;
    height: auto;
    min-height: 80vh;
    padding: 7rem 1.5rem;
  }
  .content { padding: 3rem 2rem; }
  .code { font-size: 7rem; }
}
</style>
