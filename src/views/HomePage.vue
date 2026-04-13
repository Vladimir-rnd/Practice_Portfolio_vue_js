<template>
  <div class="main-window">
    <!-- Hero -->
    <section class="hero glass-panel" style="--panel-delay: 0.1s">
      <div class="hero-text">
        <p class="hero-tagline">Закодируй мир:</p>
        <h1 class="hero-title">FrontEnd</h1>
        <p class="hero-sub">
          Создаю современные веб-интерфейсы, которые работают быстро, выглядят чисто и нравятся пользователям.
        </p>
      </div>
      <div class="hero-stack">
        <span class="stack-label">Технологии</span>
        <SkillsIcons class="hero-icons" />
      </div>
    </section>

    <!-- Представление -->
    <section class="intro glass-panel" style="--panel-delay: 0.25s">
      <div class="intro-greeting">Меня зовут <span class="accent">Владимир</span></div>
      <p class="intro-text">
        Frontend-разработчик. Делаю адаптивные сайты и одностраничные приложения на Vue.js — от первого макета
        до публикации. Уделяю внимание деталям: типографике, отзывчивости интерфейса, доступности.
        Открыт к интересным проектам.
      </p>
    </section>

    <!-- Лучшие проекты -->
    <section class="projects-section" style="--panel-delay: 0.4s">
      <div class="section-header">
        <h2 class="section-title">Избранные проекты</h2>
        <router-link to="/projects" class="section-link">Все проекты →</router-link>
      </div>
      <div class="projects-grid">
        <router-link :to="`/projects?p=${p.id}`" class="project-card glass-panel"
                     v-for="(p, i) in projects" :key="p.title"
                     :style="{ '--card-delay': (0.5 + i * 0.1) + 's' }">
          <div class="project-thumb">
            <img :src="p.image" :alt="p.title">
          </div>
          <div class="project-info">
            <div class="project-tag">{{ p.tag }}</div>
            <div class="project-title">{{ p.title }}</div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import SkillsIcons from '@/components/SkillsIcons.vue'

const base = import.meta.env.BASE_URL

const projects = [
  { id: 0, title: 'Велоклуб «Добрый Лис»',  tag: 'Instagram', image: `${base}img/moon.png` },
  { id: 1, title: 'FLEX Mobile App',         tag: 'Mobile UI', image: `${base}img/sunset.png` },
  { id: 2, title: 'Simple Starter Template', tag: 'Web',       image: `${base}img/crank.png` },
]
</script>

<style scoped>
.main-window {
  position: relative;
  margin-top: 7rem;
  margin-left: calc(var(--sidebar-width) + var(--main-window-left));
  width: calc(100vw - var(--sidebar-width) - 2 * var(--main-window-left));
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 5rem;
}

/* === Glass Panel === */
.glass-panel {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.6rem;
  backdrop-filter: blur(12px);
  animation: fadeScaleIn 0.7s ease both;
  animation-delay: var(--panel-delay);
}

/* === Hero === */
.hero {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  padding: 4rem;
}

.hero-text {
  flex: 1.3;
  min-width: 0;
}

.hero-tagline {
  margin: 0;
  font-family: var(--main-font);
  font-size: var(--big-font-size);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.02em;
}

.hero-title {
  margin: 0.5rem 0 0;
  font-family: var(--main-font);
  font-size: var(--template-font-size);
  font-weight: 700;
  line-height: 90%;
  background: linear-gradient(135deg, var(--highligh-color), #c084ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
}

.hero-sub {
  margin: 2rem 0 0;
  font-family: var(--body-font);
  font-size: var(--expl-font-size);
  color: rgba(255, 255, 255, 0.7);
  line-height: 150%;
}

.hero-stack {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-left: 4rem;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
}

.stack-label {
  font-family: var(--main-font);
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
}

.hero-icons {
  width: 100%;
}

/* === Intro === */
.intro {
  padding: 3rem 4rem;
}

.intro-greeting {
  font-family: var(--main-font);
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.accent {
  color: var(--alt-color-1);
}

.intro-text {
  margin: 0;
  font-family: var(--body-font);
  font-size: var(--page-font-size);
  line-height: 165%;
  color: rgba(255, 255, 255, 0.75);
}

/* === Projects Section === */
.projects-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: fadeScaleIn 0.7s ease both;
  animation-delay: var(--panel-delay);
}

.section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.section-title {
  margin: 0;
  font-family: var(--main-font);
  font-size: 2.6rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--main-color);
}

.section-link {
  font-family: var(--body-font);
  font-size: 1.4rem;
  color: var(--highligh-color);
  transition: color 0.3s, transform 0.3s;
  display: inline-block;
}

.section-link:hover {
  color: var(--alt-color-1);
  transform: translateX(4px);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  animation: fadeScaleIn 0.6s ease both;
  animation-delay: var(--card-delay);
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--alt-color-1);
  box-shadow: 0 8px 30px rgba(222, 204, 149, 0.15);
}

.project-thumb {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
}

.project-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-thumb img {
  transform: scale(1.05);
}

.project-info {
  padding: 1.5rem;
}

.project-tag {
  font-family: var(--main-font);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--highligh-color);
  margin-bottom: 0.5rem;
}

.project-title {
  font-family: var(--main-font);
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--main-color);
}

/* === Animations === */
@keyframes fadeScaleIn {
  from { opacity: 0; transform: scale(0.97) translateY(8px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .glass-panel,
  .project-card,
  .projects-section {
    animation: none;
  }
  .project-card,
  .project-thumb img,
  .section-link {
    transition: none;
  }
}

/* === Responsive === */
@media (max-width: 1199px) {
  .hero {
    padding: 3rem;
  }
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 991px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem;
  }
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .main-window {
    padding: 7rem 1.5rem 7rem;
    margin: 0;
    width: 100%;
  }
  .hero {
    padding: 2rem;
    gap: 2rem;
  }
  .hero-tagline {
    font-size: 3rem;
  }
  .intro {
    padding: 2rem;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
