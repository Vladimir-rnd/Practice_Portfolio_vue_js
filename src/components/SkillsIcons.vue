<template>
  <div class="skills">
    <div v-for="t in techs" :key="t.name" class="tech-badge"
         :style="{ '--tech-color': t.color }">
      <img :src="t.icon" :alt="t.name" class="tech-icon">
      <div class="tech-content">
        <span class="tech-name">{{ t.name }}</span>
        <span class="tech-desc">{{ t.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL

const techs = [
  { name: 'HTML5',      desc: 'Семантическая вёрстка',     icon: `${base}img/tech-html.svg`, color: '#E34F26' },
  { name: 'CSS3',       desc: 'Flexbox, Grid, анимации',   icon: `${base}img/tech-css.svg`,  color: '#2965F1' },
  { name: 'JavaScript', desc: 'ES6+, DOM, асинхронность',  icon: `${base}img/tech-js.svg`,   color: '#F7DF1E' },
  { name: 'Vue.js',     desc: 'Composition API, Router',   icon: `${base}img/tech-vue.svg`,  color: '#42B883' },
]
</script>

<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
}

.tech-badge {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 3px solid var(--tech-color);
  border-radius: 0.8rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 5rem;
}

.tech-badge:hover {
  background: color-mix(in srgb, var(--tech-color) 12%, transparent);
  border-color: var(--tech-color);
  transform: translateX(4px);
}

.tech-icon {
  width: 3.2rem;
  height: 3.2rem;
  flex-shrink: 0;
}

.tech-badge:nth-child(4) .tech-icon {
  transform: scale(1.08);
}

.tech-content {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
  flex: 1;
}

.tech-name {
  font-family: var(--main-font);
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.85);
  transition: transform 0.3s;
}

.tech-desc {
  font-family: var(--body-font);
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tech-badge:hover .tech-desc {
  max-height: 2rem;
  opacity: 1;
}

.tech-badge:hover .tech-name {
  color: var(--main-color);
}

/* Планшет — 2 колонки горизонтально, описание ещё показывается */
@media (max-width: 991px) {
  .skills {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .tech-badge {
    flex: 1 1 calc(50% - 0.4rem);
    min-height: 5rem;
  }
}

/* Маленький планшет / большой телефон — описание скрыто (нет места и нет hover на touch) */
@media (max-width: 768px) {
  .tech-name {
    font-size: 1.3rem;
  }
  .tech-desc {
    display: none;
  }
  .tech-badge {
    min-height: auto;
    padding: 0.6rem 1rem;
  }
}

/* Тонкий телефон — компактнее */
@media (max-width: 400px) {
  .skills {
    gap: 0.5rem;
  }
  .tech-badge {
    flex: 1 1 100%;
    gap: 0.8rem;
  }
  .tech-icon {
    width: 2.6rem;
    height: 2.6rem;
  }
  .tech-name {
    font-size: 1.2rem;
  }
}

/* Touch-устройства без hover — описания не показываем */
@media (hover: none) {
  .tech-desc {
    display: none;
  }
  .tech-badge {
    min-height: auto;
  }
}
</style>
