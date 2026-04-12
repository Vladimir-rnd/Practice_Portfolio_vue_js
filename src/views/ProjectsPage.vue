<template>
  <div class="main-window">
    <div class="thumbs" v-if="!isMobile">
      <ProjectCard
        title="Велоклуб Добрый Лис: проект в instagram"
        image="/img/moon.png"
        @select="showProject(0)"
      />
      <ProjectCard
        title="FLEX MOBILE APP: команда мечты"
        image="/img/sunset.png"
        @select="showProject(1)"
      />
      <ProjectCard
        title="simple-starter-template: фиолетовый проект"
        image="/img/crank.png"
        @select="showProject(2)"
      />
      <ProjectCard
        title="Мой будущий проект для любимой сыроварни"
        image="/img/cheese.jpg"
        @select="showProject(3)"
      />
    </div>

    <!-- Project 1: Veloclub -->
    <div v-if="activeProject === 0 || isMobile" class="projects">
      <div class="projects-header">Интерактивная страница в instagram для велоклуба "Добрый лис"</div>
      <div class="projects-row">
        <div class="projects-expl">
          <span class="span-expl">Интерактивная Instagram-страница для велоклуба «Добрый Лис».
            Разработка визуального контента, единого стиля постов и stories, навигации по рубрикам.
            Работа над этим проектом дала опыт взаимодействия в команде с дизайнерами и контент-менеджерами клуба,
            понимание того, как визуальная айдентика формирует сообщество вокруг бренда.</span>
        </div>
        <div class="projects-screen-outer" ref="scrollContainer1" @wheel.prevent="handleScroll($event, 'scrollContainer1')">
          <div class="projects-screen-inner" style="width: 135rem;">
            <img class="projects-img" src="/img/velo1.png" alt="">
            <img class="projects-img" src="/img/velo2.png" alt="">
            <img class="projects-img" src="/img/velo2.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- Project 2: Flexy -->
    <div v-if="activeProject === 1 || isMobile" class="projects">
      <div class="projects-header">FLEX MOBILE APP: команда мечты</div>
      <div class="projects-row">
        <div class="projects-expl">
          <span class="span-expl">Мобильное приложение для команды Flexy Team.
            Проектирование интерфейса, адаптивная вёрстка экранов, работа с UI-kit.
            Приложение объединяет экосистему инструментов для команды — от управления задачами
            до коммуникации. Фокус на удобство навигации, чистоту визуала и отзывчивость интерфейса
            на любых устройствах.</span>
        </div>
        <div class="projects-screen-outer" ref="scrollContainer2" @wheel.prevent="handleScroll($event, 'scrollContainer2')">
          <div class="projects-screen-inner projects-screen-inner-2" style="width: 225rem;">
            <img class="projects-img" src="/img/flexy.png" alt="">
            <img class="projects-img" src="/img/flexy2.png" alt="">
            <img class="projects-img" src="/img/flexy3.png" alt="">
            <img class="projects-img" src="/img/flexy4.png" alt="">
            <img class="projects-img" src="/img/flexy5.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- Project 3: Template -->
    <div v-if="activeProject === 2 || isMobile" class="projects">
      <div class="projects-header">simple-starter-template: первый проект</div>
      <div class="projects-row">
        <div class="projects-expl">
          <span class="span-expl">Стартовый шаблон для веб-проектов — фундамент, на котором строятся все последующие работы.
            Семантическая HTML-вёрстка, адаптивный CSS, подключение шрифтов и иконок.
            Этот проект стал отправной точкой: первый опыт работы с Git, понимание рабочего процесса
            и навыки сотрудничества в команде разработчиков.</span>
        </div>
        <div class="projects-screen-outer" ref="scrollContainer3" @wheel.prevent="handleScroll($event, 'scrollContainer3')">
          <div class="projects-screen-inner projects-screen-inner-3" style="width: 240rem;">
            <img class="projects-img projects-img-hor" src="/img/templ1.png" alt="">
            <img class="projects-img projects-img-hor" src="/img/templ2.png" alt="">
            <img class="projects-img projects-img-hor" src="/img/templ3.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- Project 4: Cheese -->
    <div v-if="activeProject === 3 || isMobile" class="projects">
      <div class="projects-header">Мой будущий проект для любимой сыроварни</div>
      <div class="projects-row">
        <div class="projects-expl">
          <span class="span-expl">Концепт сайта для крафтовой сыроварни — возможность передать историю и атмосферу
            настоящего ремесла через дизайн. Каталог продукции с фотографиями, раздел рецептов,
            рассказ о процессе производства — от выбора ингредиентов до традиционных методов выдержки.
            Проект в активной разработке.</span>
        </div>
        <div class="projects-screen-outer" ref="scrollContainer4" @wheel.prevent="handleScroll($event, 'scrollContainer4')">
          <div class="projects-screen-inner projects-screen-inner-4" style="width: 140rem;">
            <img class="projects-img" src="/img/cheese1.jpg" alt="">
            <img class="projects-img" src="/img/cheese2.jpg" alt="">
            <img class="projects-img" src="/img/cheese3.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, useTemplateRef, onMounted, onUnmounted } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'

const activeProject = ref(0)
const windowWidth = ref(window.innerWidth)

const scrollContainer1 = ref(null)
const scrollContainer2 = ref(null)
const scrollContainer3 = ref(null)
const scrollContainer4 = ref(null)

const isMobile = computed(() => windowWidth.value <= 768)

function showProject(index) {
  activeProject.value = index
}

function handleScroll(event, containerRef) {
  const containers = {
    scrollContainer1: scrollContainer1,
    scrollContainer2: scrollContainer2,
    scrollContainer3: scrollContainer3,
    scrollContainer4: scrollContainer4
  }
  const container = containers[containerRef]
  if (container && container.value) {
    container.value.scrollLeft += event.deltaY > 0 ? 30 : -30
  }
}

function onResize() {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
.main-window {
  position: fixed;
  top: 0;
  left: var(--sidebar-width);
  width: calc(100vw - var(--sidebar-width));
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem 4rem 2rem 4rem;
}

.thumbs {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 0.5rem 0 1rem;
  flex-shrink: 0;
}

.projects {
  font-family: var(--body-font);
  font-size: var(--expl-font-size);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.6rem;
  padding: 3rem;
  backdrop-filter: blur(12px);
  margin-top: 1.5rem;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  animation: fadeScaleIn 0.7s ease both;
}

.projects::-webkit-scrollbar { width: 0; }

.projects-header {
  font-family: var(--main-font);
  font-size: var(--body-font-size);
  font-weight: 500;
  letter-spacing: 0.08em;
  margin-bottom: 2rem;
  width: 100%;
}

@keyframes fadeScaleIn {
  from { opacity: 0; transform: scale(0.97) translateY(8px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.projects-row {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  width: 100%;
}

.projects-expl {
  width: 35%;
  flex-shrink: 0;
  letter-spacing: 0.05em;
  line-height: 170%;
}

.projects-screen-outer {
  overflow-x: scroll;
  overflow-y: hidden;
  flex: 1;
  min-width: 0;
  height: auto;
  cursor: ew-resize;
  position: relative;
}

.projects-screen-outer::after {
  content: '← прокрутка →';
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.3);
  pointer-events: none;
  font-family: var(--body-font);
}

.projects-screen-inner {
  width: 135rem;
}

.projects-screen-inner-2 {
  width: 225rem;
}

.projects-screen-inner-3 {
  width: 240rem;
}

.projects-screen-inner-4 {
  width: 140rem;
}

.projects-img {
  margin-left: 2rem;
  width: 40rem;
  border-radius: 1.6rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: border-color 0.3s, box-shadow 0.3s;
}

.projects-img:hover {
  border-color: var(--highligh-color);
  box-shadow: 0 0 20px rgba(162, 118, 255, 0.2);
}

.projects-img-hor {
  width: 70rem;
}

::-webkit-scrollbar {
  width: 0;
}

@media (max-width: 991px) {
  .projects {
    padding: 2rem;
  }
  .projects-row {
    flex-direction: column;
  }
  .projects-expl {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .main-window {
    position: relative;
    left: auto;
    width: 100%;
    height: auto;
    padding: 7rem 1.5rem 7rem;
  }
  .thumbs {
    display: none;
  }
  .projects {
    overflow-y: visible;
    flex: none;
    padding: 1.5rem;
  }
  .projects-img {
    margin-left: 0.5rem;
    width: 22rem;
    border-radius: 1rem;
  }
  .projects-img-hor {
    width: 40rem;
  }
  .projects-screen-inner,
  .projects-screen-inner-3,
  .projects-screen-inner-4 {
    width: 70rem;
  }
  .projects-screen-inner-2 {
    width: 115rem;
  }
}
</style>
