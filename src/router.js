import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Brazo from './views/Brazo.vue'
import Pecho from './views/Pecho.vue'
import Pierna from './views/Pierna.vue'
import Espalda from './views/Espalda.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/brazo', name: 'Brazo', component: Brazo },
  { path: '/pecho', name: 'Pecho', component: Pecho },
  { path: '/pierna', name: 'Pierna', component: Pierna },
  { path: '/espalda', name: 'Espalda', component: Espalda }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
