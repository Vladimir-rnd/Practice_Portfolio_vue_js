<template>
  <div class="main-window">
    <div class="content-grid">
      <!-- Текстовый блок -->
      <div class="text-block glass-panel" style="--panel-delay: 0.1s">
        <h1 class="page-title">Мои навыки</h1>
        <span class="highligh-line"></span>
        <p class="main-text">
          Создаю адаптивные веб-интерфейсы, которые одинаково хорошо работают на десктопе, планшете и смартфоне.
          Пишу чистый, поддерживаемый код и стремлюсь к лучшим практикам индустрии.
        </p>

        <h2 class="sub-title">Технологии</h2>
        <p class="main-text">
          <strong>HTML5 и CSS3</strong> — семантическая вёрстка, Flexbox, Grid, анимации, медиа-запросы, CSS-переменные.
          <strong>JavaScript</strong> — ES6+, работа с DOM, асинхронность, Fetch API.
          <strong>Vue.js 3</strong> — компоненты, Composition API, Vue Router, реактивность.
        </p>

        <h2 class="sub-title">Инструменты</h2>
        <p class="main-text">
          <strong>Сборка:</strong> Vite.
          <strong>Контроль версий:</strong> Git, GitHub, GitHub Pages.
          <strong>Дизайн:</strong> Figma, работа с макетами.
          <strong>Редакторы:</strong> VS Code.
        </p>

        <h2 class="sub-title">Подход к работе</h2>
        <p class="main-text">
          Аналитический склад ума помогает разбираться в сложных задачах и находить оптимальные решения.
          Каждый проект — это возможность освоить что-то новое и выйти за рамки привычного.
        </p>
      </div>

      <!-- Фото -->
      <div class="photo-block" style="--panel-delay: 0.25s">
        <img class="photo" alt="Владимир" src="/img/I.jpg">
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.main-window {
  position: relative;
  margin-top: var(--main-window-top);
  margin-left: calc(var(--sidebar-width) + var(--main-window-left));
  width: calc(100vw - var(--sidebar-width) - 2 * var(--main-window-left));
  min-height: 80vh;
  padding-bottom: 5rem;
}

.content-grid {
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: flex-start;
  position: relative;
}

/* === Glass Panel === */
.glass-panel {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.6rem;
  padding: 4rem;
  backdrop-filter: blur(12px);
  animation: fadeScaleIn 0.7s ease both;
  animation-delay: var(--panel-delay);
}

.text-block {
  min-width: 0;
}

.page-title {
  font-family: var(--main-font);
  font-size: var(--big-font-size);
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: var(--main-color);
  letter-spacing: 0.05em;
}

.highligh-line {
  display: block;
  width: 8rem;
  height: 0.5rem;
  border-radius: 1rem;
  background: var(--highligh-color);
  margin-bottom: 2rem;
}

.sub-title {
  font-family: var(--main-font);
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--highligh-color);
  margin: 2.5rem 0 0.5rem;
  letter-spacing: 0.08em;
}

.main-text {
  font-family: var(--body-font);
  font-size: var(--page-font-size);
  line-height: 170%;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.01em;
}

.main-text strong {
  color: var(--main-color);
  font-weight: 500;
}

/* === Photo === */
.photo-block {
  position: fixed;
  right: var(--main-window-left);
  top: var(--main-window-top);
  width: calc((100vw - var(--sidebar-width) - 2 * var(--main-window-left)) * 0.4);
  animation: fadeScaleIn 0.7s ease both;
  animation-delay: var(--panel-delay);
}

.text-block {
  width: 55%;
}

.photo {
  width: 100%;
  border-radius: 1.6rem;
  border: 3px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  transition: border-color 0.4s, box-shadow 0.4s;
}

.photo:hover {
  border-color: var(--alt-color-1);
  box-shadow: 0 4px 40px rgba(222, 204, 149, 0.2);
}

/* === Animations === */
@keyframes fadeScaleIn {
  from {
    opacity: 0;
    transform: scale(0.97) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* === Responsive === */
@media (max-width: 1399px) {
  .glass-panel {
    padding: 3rem;
  }
  .main-text {
    line-height: 145%;
  }
}

@media (max-width: 1199px) {
  .content-grid {
    gap: 3rem;
  }
}

@media (max-width: 991px) {
  .content-grid {
    gap: 2rem;
  }
  .glass-panel {
    padding: 2.5rem;
  }
}

@media (max-width: 768px) {
  .content-grid {
    flex-direction: column;
  }
  .text-block {
    width: 100%;
  }
  .photo-block {
    position: relative;
    right: auto;
    top: auto;
    width: 50%;
    align-self: center;
  }
  .main-window {
    padding: 7rem 1.5rem 7rem;
    margin: 0;
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .glass-panel,
  .photo-block {
    animation: none;
  }
  .photo {
    transition: none;
  }
}
</style>
