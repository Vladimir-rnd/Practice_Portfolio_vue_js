<template>
  <div class="main-window">
    <div class="frontend">
      <div class="simple-starter-templ">
        <p class="simple-starter">Закодируй мир: </p>
        <p class="template">FrontEnd</p>
      </div>
      <SkillsIcons />
    </div>
    <div class="a-clean-simple">
      Открой двери в бесконечные возможности с миром кода: фронтенд разработчик — творческий волшебник, объединяющий
      бесконечную креативность и невероятную техническую магию!
    </div>
    <div class="a-clean-simple">
      Мои лучшие проекты:
    </div>
    <div class="thumbs-1p">
      <div class="th-project">
        <span class="th-project-expl">Велоклуб Добрый Лис: проект в instagram</span>
        <img class="thumbs-icon-1p" alt="" src="/img/moon.png">
      </div>
      <div class="th-project">
        <span class="th-project-expl">FLEX MOBILE APP: команда мечты</span>
        <img class="thumbs-icon-1p" alt="" src="/img/sunset.png">
      </div>
      <div class="th-project">
        <span class="th-project-expl">simple-starter-template: фиолетовый проект</span>
        <img class="thumbs-icon-1p" alt="" src="/img/crank.png">
      </div>
    </div>
    <div class="about-me">
      <span>Меня зовут Владимир.</span><br>
      <span>
        Стремительные сайты, захватывающий пользовательский опыт и инновационный дизайн - все это
        я, разработчик фронтенда и фрилансер! Я создаю уникальные онлайн-решения, подстраиваясь под
        ваши потребности и воплощая ваши цели в увлекательные веб-приложения. Доверьте свой проект профессионалу,
        и вместе мы превратим ваши идеи в реальность, оставляя на виртуальном пространстве след радости и инноваций!
      </span>
    </div>
  </div>
</template>

<script setup>
import SkillsIcons from '@/components/SkillsIcons.vue'
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

.frontend {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.simple-starter-templ {
  width: 64%;
  font-weight: 700;
}

.simple-starter {
  margin: 0;
  font-size: var(--big-font-size);
}

.template {
  margin: 0;
  color: var(--highligh-color);
  font-size: var(--template-font-size);
  line-height: 60%;
}

.template:hover {
  color: var(--alt-color-1);
}

.a-clean-simple {
  margin-top: 4.4rem;
  width: 90%;
  font-family: var(--body-font);
  font-size: var(--body-font-size);
  line-height: 145%;
  letter-spacing: 0.03rem;
}

.thumbs-1p {
  margin-top: 2rem;
  width: var(--main-window-width);
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.thumbs-icon-1p {
  border-radius: var(--thumbs-radius);
  border: 5px solid var(--main-color);
}

.thumbs-icon-1p:hover {
  border: 5px solid var(--alt-color-1);
}

.th-project {
  font-family: var(--alt-font);
  font-size: var(--basement-font-size);
  width: 40rem;
  height: 30rem;
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
}

.th-project-expl {
  width: 33rem;
  height: 4rem;
}

.about-me {
  margin-top: 4rem;
  width: 83%;
  font-family: var(--body-font);
  font-size: var(--basement-font-size);
  letter-spacing: 0.2em;
}

@media (max-width: 1199px) {
  .thumbs-1p {
    width: 98%;
  }
}

@media (max-width: 991px) {
  .thumbs-1p {
    justify-content: center;
  }
  .th-project {
    width: 35rem;
  }
  .simple-starter {
    line-height: 100%;
  }
  .template {
    padding-top: 1rem;
  }
}

@media (max-width: 767px) {
  .simple-starter-templ {
    width: 90%;
  }
}

@media (max-width: 376px) {
  .thumbs-1p {
    margin-top: 3rem;
    margin-left: 2rem;
  }
  .th-project {
    height: auto;
    margin-bottom: 2rem;
  }
  .th-project-expl {
    height: auto;
  }
  .thumbs-icon-1p {
    width: 30rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .frontend {
    display: flex;
    flex-direction: column;
  }
  .a-clean-simple {
    width: calc(var(--screen-width) - 3rem);
    margin-top: 2rem;
  }
  .simple-starter-templ {
    width: 15rem;
  }
  .about-me {
    width: calc(var(--screen-width) - 5rem);
  }
}
</style>
