import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProjectsPage from '@/views/ProjectsPage.vue'
import SkillsPage from '@/views/SkillsPage.vue'
import ContactsPage from '@/views/ContactsPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/projects', name: 'Projects', component: ProjectsPage },
  { path: '/skills', name: 'Skills', component: SkillsPage },
  { path: '/contacts', name: 'Contacts', component: ContactsPage }
]

const router = createRouter({
  history: createWebHistory('/Practice_Portfolio_Vue_js/'),
  routes
})

export default router
