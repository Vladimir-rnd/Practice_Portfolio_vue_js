import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProjectsPage from '@/views/ProjectsPage.vue'
import SkillsPage from '@/views/SkillsPage.vue'
import ContactsPage from '@/views/ContactsPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import i18n from '@/i18n'

const routes = [
  { path: '/',         name: 'Home',     component: HomePage,     meta: { titleKey: 'meta.titleHome' } },
  { path: '/projects', name: 'Projects', component: ProjectsPage, meta: { titleKey: 'meta.titleProjects' } },
  { path: '/skills',   name: 'Skills',   component: SkillsPage,   meta: { titleKey: 'meta.titleSkills' } },
  { path: '/contacts', name: 'Contacts', component: ContactsPage, meta: { titleKey: 'meta.titleContacts' } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage, meta: { titleKey: 'meta.title404' } }
]

const router = createRouter({
  history: createWebHistory('/Practice_Portfolio_vue_js/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const t = i18n.global.t
  if (to.meta.titleKey) {
    document.title = t(to.meta.titleKey)
  }
})

export default router
