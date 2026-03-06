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
          <span class="span-expl">Работа над проектом велоклуба 'Добрый Лис' окутала меня магией в каждом
            вдохновляющем мгновении. В этой путанице захватывающих идей, каждая встреча с интересными и
            одухотворенными людьми приближала меня к пониманию, как соткана ткань велосипедной страсти и
            солидарности. Каждый миг вместе с ними открывал новые горизонты и углублял бескрайний флёр красоты
            велоспорта</span>
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
          <span class="span-expl">Разработка приложения для команды разработчиков Flexy Team - это захватывающее
            путешествие в мир технологий и инноваций. Это не просто приложение, это целая экосистема,
            вдохновляющая пользователей и преображающая бизнес процессы.
            Разработка приложения для Flexy Team - это процесс, заложенный в основе приверженности к качеству и
            стремлению к совершенству.
            Я готов был преодолевать любые технические вызовы и воплощать самые смелые идеи и построить лучшее
            приложение для Flexy Team. Будущее - наше поле для творчества, и я готов менять мир одним кодовым блоком
            за другим.
          </span>
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
          <span class="span-expl">
            Участие в проекте simple-starter-template дало возможность изучить основы веб-разработки, получить
            практический опыт, понять рабочий процесс и развить навыки сотрудничества. Этот проект стал ценной
            отправной точкой, которая помогла создать базу кода и вдохновила на продолжение пути в веб-разработке.
          </span>
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
          <span class="span-expl">
            Мой будущий проект - создание сайта для любимой сыроварни, и это восхитительная возможность поделиться
            историей, страстью и уникальностью этого места. Этот сайт станет окном в мир сыроварни и притянет
            внимание людей своим эстетическим дизайном и привлекательностью.
            Сайт будет предлагать разделы, посвященные разным видам сыров, способам их приготовления и уникальным
            рецептам. Также можно будет включить информацию о процессе производства сыра, от истории сыроделия до
            использования местных ингредиентов и традиционных методов.
          </span>
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

const isMobile = computed(() => windowWidth.value <= 376)

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
  position: relative;
  margin-top: var(--main-window-top);
  margin-left: calc(var(--sidebar-width) + var(--main-window-left));
  width: var(--main-window-width);
  height: auto;
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  padding-bottom: 5rem;
}

.thumbs {
  margin-top: 0rem;
  width: var(--main-window-width);
  display: inline-flex;
  cursor: url("/Practice_Portfolio_vue_js/img/cursor.svg"), auto;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.projects {
  margin-right: 1rem;
  font-family: var(--body-font);
  font-size: var(--expl-font-size);
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.projects-header {
  font-family: var(--alt-font);
  font-size: var(--body-font-size);
  margin-bottom: 3rem;
}

.projects-row {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.projects-expl {
  width: 40%;
  letter-spacing: 0.7rem;
  margin-right: 5rem;
}

.projects-screen-outer {
  overflow: scroll;
  width: 70rem;
  height: auto;
  cursor: url("/Practice_Portfolio_vue_js/img/MouseScrool.png"), auto;
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
  border-radius: 7rem;
  border: 1rem solid var(--darkblue);
}

.projects-img-hor {
  width: 70rem;
}

::-webkit-scrollbar {
  width: 0;
}

@media (max-width: 1399px) {
  .projects-expl {
    width: 35%;
    letter-spacing: 0.3rem;
  }
  .projects-screen-outer {
    width: 50rem;
  }
  .projects-screen-inner {
    width: 135rem;
  }
}

@media (max-width: 1199px) {
  .projects-screen-outer {
    width: 45rem;
  }
}

@media (max-width: 991px) {
  .projects-expl {
    letter-spacing: 0.2rem;
  }
  .projects-screen-outer {
    width: 38rem;
  }
}

@media (max-width: 767px) {
  .projects-expl {
    margin-right: 1rem;
  }
  .projects-img,
  .projects-screen-outer {
    width: 30rem;
  }
  .projects-screen-inner,
  .projects-screen-inner-3,
  .projects-screen-inner-4 {
    width: 105rem;
  }
  .projects-screen-inner-2 {
    width: 140rem;
  }
}

@media (max-width: 575px) {
  .projects-header,
  .projects-expl,
  .projects-screen-outer {
    width: calc(var(--main-window-width) - 2rem);
  }
  .projects-img {
    margin-left: 0.5rem;
    width: 19rem;
    border-radius: 4rem;
  }
  .projects-screen-inner {
    width: 70rem;
  }
  .projects-screen-inner-2 {
    width: 110rem;
  }
  .projects-screen-inner-3,
  .projects-screen-inner-4 {
    width: 65rem;
  }
}

@media (max-width: 376px) {
  .thumbs {
    display: none;
  }
  .projects-screen-inner,
  .projects-screen-inner-3,
  .projects-screen-inner-4 {
    width: 65rem;
  }
  .projects-screen-inner-2 {
    width: 135rem;
  }
}
</style>
