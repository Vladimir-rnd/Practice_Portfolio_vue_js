<template>
  <div class="lang-switch" role="group" aria-label="Language">
    <button
      v-for="l in langs" :key="l"
      class="lang-btn"
      :class="{ active: locale === l }"
      @click="change(l)"
      :aria-pressed="locale === l"
    >
      {{ l.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { setLang } from '@/i18n'

const { locale } = useI18n()
const langs = ['ru', 'en']

function change(l) {
  if (l !== locale.value) setLang(l)
}
</script>

<style scoped>
.lang-switch {
  display: inline-flex;
  gap: 0.2rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5rem;
  padding: 0.3rem;
}

.lang-btn {
  padding: 0.4rem 1rem;
  font-family: var(--main-font);
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.5);
  background: transparent;
  border: none;
  border-radius: 5rem;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
}

.lang-btn:hover {
  color: rgba(255, 255, 255, 0.85);
}

.lang-btn.active {
  background: var(--highligh-color);
  color: #fff;
}

.lang-btn:focus-visible {
  outline: 2px solid var(--highligh-color);
  outline-offset: 2px;
}
</style>
