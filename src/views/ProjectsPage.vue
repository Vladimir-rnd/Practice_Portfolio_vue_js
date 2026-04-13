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
    <div v-if="activeProject === 0 || isMobile" id="project-0" class="projects velo-project">
      <div class="velo-header">
        <div>
          <div class="velo-tag">{{ t('projects.velo.tag') }}</div>
          <h3 class="velo-title">{{ t('projects.velo.title') }}</h3>
        </div>
        <div class="velo-meta">
          <div class="meta-item"><span class="meta-num">4</span><span>{{ t('projects.velo.metaScreens') }}</span></div>
          <div class="meta-item"><span class="meta-num">8+</span><span>{{ t('projects.velo.metaSections') }}</span></div>
        </div>
      </div>

      <div class="velo-grid">
        <div class="velo-text">
          <p class="velo-desc">{{ t('projects.velo.desc1') }}</p>
          <p class="velo-desc">{{ t('projects.velo.desc2') }}</p>
          <div class="velo-features">
            <div class="feature">
              <span class="feature-dot" style="--dot:#A276FF"></span>
              <span>{{ t('projects.velo.f1') }}</span>
            </div>
            <div class="feature">
              <span class="feature-dot" style="--dot:#56D4FD"></span>
              <span>{{ t('projects.velo.f2') }}</span>
            </div>
            <div class="feature">
              <span class="feature-dot" style="--dot:#decc95"></span>
              <span>{{ t('projects.velo.f3') }}</span>
            </div>
          </div>
        </div>

        <div class="phone-stack">
          <div class="phone phone-back" @click="openLightbox(`${base}img/velo2.jpg`)">
            <div class="phone-notch"></div>
            <img loading="lazy" src="/img/velo2.jpg" alt="Экран НЛО">
          </div>
          <div class="phone phone-front" @click="openLightbox(`${base}img/velo1.jpg`)">
            <div class="phone-notch"></div>
            <img loading="lazy" src="/img/velo1.jpg" alt="Экран услуг">
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Transition name="fade">
      <div v-if="lightboxImg" class="lightbox" @click="lightboxImg = null">
        <button class="lightbox-close" @click.stop="lightboxImg = null" aria-label="Закрыть">×</button>
        <img :src="lightboxImg" alt="" class="lightbox-img" @click.stop>
      </div>
    </Transition>

    <!-- Project 2: Flexy -->
    <div v-if="activeProject === 1 || isMobile" id="project-1" class="projects velo-project">
      <div class="velo-header">
        <div>
          <div class="velo-tag">{{ t('projects.flexy.tag') }}</div>
          <h3 class="velo-title">{{ t('projects.flexy.title') }}</h3>
        </div>
        <div class="velo-meta">
          <div class="meta-item"><span class="meta-num">5</span><span>{{ t('projects.flexy.metaScreens') }}</span></div>
          <div class="meta-item"><span class="meta-num">UI</span><span>{{ t('projects.flexy.metaUikit') }}</span></div>
        </div>
      </div>

      <div class="velo-grid">
        <div class="velo-text">
          <p class="velo-desc">{{ t('projects.flexy.desc1') }}</p>
          <p class="velo-desc">{{ t('projects.flexy.desc2') }}</p>
          <div class="velo-features">
            <div class="feature">
              <span class="feature-dot" style="--dot:#A276FF"></span>
              <span>{{ t('projects.flexy.f1') }}</span>
            </div>
            <div class="feature">
              <span class="feature-dot" style="--dot:#56D4FD"></span>
              <span>{{ t('projects.flexy.f2') }}</span>
            </div>
            <div class="feature">
              <span class="feature-dot" style="--dot:#decc95"></span>
              <span>{{ t('projects.flexy.f3') }}</span>
            </div>
          </div>
        </div>

        <div class="phone-carousel" ref="flexyCarousel" @wheel.prevent="handleHorizontalScroll($event, 'flexyCarousel')">
          <div class="phone phone-mini" v-for="(img, i) in flexyImages" :key="i"
               @click="openLightbox(`${base}img/${img}`)">
            <div class="phone-notch"></div>
            <img loading="lazy" :src="`${base}img/${img}`" :alt="`Экран ${i + 1}`">
          </div>
        </div>
      </div>
    </div>

    <!-- Project 3: Template -->
    <div v-if="activeProject === 2 || isMobile" id="project-2" class="projects velo-project">
      <div class="velo-header">
        <div>
          <div class="velo-tag">{{ t('projects.template.tag') }}</div>
          <h3 class="velo-title">{{ t('projects.template.title') }}</h3>
        </div>
        <div class="velo-meta">
          <div class="meta-item"><span class="meta-num">3</span><span>{{ t('projects.template.metaPages') }}</span></div>
          <div class="meta-item"><span class="meta-num">{{ t('projects.template.metaProjectNum') }}</span><span>{{ t('projects.template.metaProject') }}</span></div>
        </div>
      </div>

      <div class="velo-text">
        <p class="velo-desc">{{ t('projects.template.desc1') }}</p>
        <p class="velo-desc">{{ t('projects.template.desc2') }}</p>
      </div>

      <div class="browser-stack">
        <div class="browser-mockup" v-for="(img, i) in templImages" :key="i"
             @click="openLightbox(`${base}img/${img}`)">
          <div class="browser-bar">
            <span class="browser-dot" style="--c:#ff5f57"></span>
            <span class="browser-dot" style="--c:#ffbd2e"></span>
            <span class="browser-dot" style="--c:#28ca41"></span>
            <span class="browser-url">simple-starter-template</span>
          </div>
          <img loading="lazy" :src="`${base}img/${img}`" :alt="`Страница ${i + 1}`">
        </div>
      </div>
    </div>

    <!-- Project 4: Cheese -->
    <div v-if="activeProject === 3 || isMobile" id="project-3" class="projects velo-project">
      <div class="velo-header">
        <div>
          <div class="velo-tag">{{ t('projects.cheese.tag') }}</div>
          <h3 class="velo-title">{{ t('projects.cheese.title') }}</h3>
        </div>
        <div class="velo-meta">
          <div class="meta-item"><span class="meta-num">3</span><span>{{ t('projects.cheese.metaPhotos') }}</span></div>
          <div class="meta-item"><span class="meta-num">WIP</span><span>{{ t('projects.cheese.metaStatus') }}</span></div>
        </div>
      </div>

      <div class="velo-grid">
        <div class="velo-text">
          <p class="velo-desc">{{ t('projects.cheese.desc1') }}</p>
          <p class="velo-desc">{{ t('projects.cheese.desc2') }}</p>
          <div class="velo-features">
            <div class="feature">
              <span class="feature-dot" style="--dot:#decc95"></span>
              <span>{{ t('projects.cheese.f1') }}</span>
            </div>
            <div class="feature">
              <span class="feature-dot" style="--dot:#A276FF"></span>
              <span>{{ t('projects.cheese.f2') }}</span>
            </div>
            <div class="feature">
              <span class="feature-dot" style="--dot:#56D4FD"></span>
              <span>{{ t('projects.cheese.f3') }}</span>
            </div>
          </div>
        </div>

        <div class="polaroid-stack">
          <div class="polaroid" v-for="(img, i) in cheeseImages" :key="i"
               :style="{ '--rot': polaroidRot(i) }"
               @click="openLightbox(`${base}img/${img}`)">
            <img loading="lazy" :src="`${base}img/${img}`" :alt="`Фото ${i + 1}`">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, useTemplateRef, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ProjectCard from '@/components/ProjectCard.vue'

const { t } = useI18n()

const route = useRoute()
const base = import.meta.env.BASE_URL
const activeProject = ref(parseInt(route.query.p) || 0)
const windowWidth = ref(window.innerWidth)
const lightboxImg = ref(null)

function openLightbox(src) {
  lightboxImg.value = src
}

function scrollToProject(idx) {
  nextTick(() => {
    const el = document.getElementById(`project-${idx}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

const flexyImages = ['flexy.jpg', 'flexy2.jpg', 'flexy3.jpg', 'flexy4.jpg', 'flexy5.jpg']
const templImages = ['templ1.jpg', 'templ2.jpg', 'templ3.jpg']
const cheeseImages = ['cheese1.jpg', 'cheese2.jpg', 'cheese3.jpg']

function polaroidRot(i) {
  return `${[-4, 2, -3][i] || 0}deg`
}

watch(() => route.query.p, (newP) => {
  const idx = parseInt(newP) || 0
  activeProject.value = idx
  if (windowWidth.value <= 768) scrollToProject(idx)
})

const scrollContainer1 = ref(null)
const scrollContainer2 = ref(null)
const scrollContainer3 = ref(null)
const scrollContainer4 = ref(null)
const flexyCarousel = ref(null)

function handleHorizontalScroll(event, refName) {
  const refs = { flexyCarousel }
  const container = refs[refName]
  if (container && container.value) {
    container.value.scrollLeft += event.deltaY > 0 ? 200 : -200
  }
}

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
  if (windowWidth.value <= 768 && route.query.p) {
    scrollToProject(parseInt(route.query.p) || 0)
  }
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
  background: rgba(255, 255, 255, 0.005);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 1.6rem;
  padding: 3rem;
  backdrop-filter: blur(2px);
  margin-top: 1.5rem;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  animation: fadeScaleIn 0.7s ease both;
}

.projects::-webkit-scrollbar { width: 0; }

/* === Veloclub Project — special layout === */
.velo-project {
  display: flex !important;
  flex-direction: column !important;
  flex-wrap: nowrap !important;
  gap: 3rem;
}

.velo-project > * {
  width: 100%;
  flex-shrink: 0;
}

.velo-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.velo-tag {
  font-family: var(--main-font);
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--highligh-color);
  margin-bottom: 0.6rem;
}

.velo-title {
  font-family: var(--main-font);
  font-size: 3.2rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.02em;
}

.velo-meta {
  display: flex;
  gap: 3rem;
}

.meta-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  font-family: var(--body-font);
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
}

.meta-num {
  font-family: var(--main-font);
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--main-color);
  letter-spacing: 0.02em;
}

.velo-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.velo-grid > * {
  min-width: 0;
  max-width: 100%;
}

.velo-grid .phone-carousel {
  width: 100%;
  max-width: 100%;
}

.velo-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.velo-desc {
  font-family: var(--body-font);
  font-size: 1.6rem;
  line-height: 165%;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
}

.velo-features {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1rem;
  padding-left: 1.2rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--body-font);
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.7);
}

.feature-dot {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: var(--dot);
  flex-shrink: 0;
  box-shadow: 0 0 8px var(--dot), 0 0 12px var(--dot);
}

/* Phone mockups */
.phone-stack {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50rem;
}

.phone {
  position: relative;
  width: 22rem;
  aspect-ratio: 9/19;
  background: #1a1a2e;
  border-radius: 3rem;
  border: 4px solid rgba(255, 255, 255, 0.15);
  padding: 0.8rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s;
  cursor: zoom-in;
}

.phone:hover {
  border-color: var(--highligh-color);
}

.phone img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem;
}

.phone-notch {
  position: absolute;
  top: 0.6rem;
  left: 50%;
  transform: translateX(-50%);
  width: 6rem;
  height: 1.2rem;
  background: #000;
  border-radius: 0 0 1rem 1rem;
  z-index: 2;
}

.phone-back {
  position: absolute;
  left: 30%;
  transform: rotate(-6deg);
  opacity: 0.7;
  filter: blur(0.5px);
}

.phone-front {
  position: relative;
  z-index: 1;
  transform: rotate(4deg) translateX(20%);
}

.phone-stack:hover .phone-back {
  transform: rotate(-10deg) translateX(-20%);
}

.phone-stack:hover .phone-front {
  transform: rotate(8deg) translateX(30%);
}

/* === Phone carousel (Flexy — 5 phones, horizontal scroll) === */
.phone-carousel {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 1rem 2rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  cursor: ew-resize;
  height: 41rem;
}

.phone-carousel::-webkit-scrollbar { height: 6px; }
.phone-carousel::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 3px; }
.phone-carousel::-webkit-scrollbar-thumb { background: rgba(162, 118, 255, 0.5); border-radius: 3px; }

.phone-mini {
  width: 18rem;
  height: 38rem;
  aspect-ratio: auto;
  flex-shrink: 0;
  cursor: zoom-in;
  scroll-snap-align: center;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s;
}

.phone-mini:hover {
  transform: translateY(-8px) scale(1.03);
  border-color: var(--highligh-color);
}

.phone-mini .phone-notch {
  width: 4rem;
  height: 0.8rem;
  top: 0.4rem;
  border-radius: 0 0 0.6rem 0.6rem;
}

/* === Browser mockup (Template — 3 web screenshots) === */
.browser-stack {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.browser-mockup {
  background: #1a1a2e;
  border-radius: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  cursor: zoom-in;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.browser-mockup:hover {
  transform: translateY(-4px);
  border-color: var(--highligh-color);
  box-shadow: 0 8px 30px rgba(162, 118, 255, 0.2);
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.browser-dot {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--c);
  flex-shrink: 0;
}

.browser-url {
  font-family: var(--body-font);
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.4);
  margin-left: 1rem;
}

.browser-mockup img {
  width: 100%;
  display: block;
}

/* === Polaroid stack (Cheese — 3 photos) === */
.polaroid-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}

.polaroid {
  background: #fafafa;
  padding: 1rem 1rem 3rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  cursor: zoom-in;
  transform: rotate(var(--rot));
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s;
  width: 16rem;
}

.polaroid:hover {
  transform: rotate(0) scale(1.05);
  box-shadow: 0 16px 50px rgba(222, 204, 149, 0.3);
  z-index: 5;
}

.polaroid img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  display: block;
}

/* === Lightbox === */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  cursor: zoom-out;
  padding: 4rem 2rem;
}

.lightbox-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 1rem;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.8);
  cursor: default;
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #fff;
  font-size: 2.4rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 991px) {
  .velo-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .phone-stack {
    min-height: 42rem;
  }
  .phone {
    width: 18rem;
  }
  .phone-mini {
    width: 16rem;
    height: 34rem;
  }
  .phone-carousel {
    height: 38rem;
    gap: 2rem;
  }
  .browser-stack {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .velo-title {
    font-size: 2.4rem;
  }
  .velo-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .velo-meta {
    gap: 2rem;
  }
  .meta-num {
    font-size: 2rem;
  }
  .phone {
    width: 16rem;
  }
  .phone-mini {
    width: 14rem;
    height: 30rem;
  }
  .phone-carousel {
    height: 34rem;
    gap: 1.5rem;
    padding: 0.5rem 1rem;
  }
  .browser-stack {
    grid-template-columns: 1fr;
  }
  .polaroid {
    width: 14rem;
  }
  .velo-desc {
    font-size: 1.4rem;
  }
}

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
  content: var(--scroll-hint, '← scroll →');
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
