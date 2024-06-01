import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutOverall from '../Layouts/LayoutOverall.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LayoutOverall,
  },
  {
    path: '/level1',
    name: 'Level1',
    component: LayoutOverall,
  },
  {
    path: '/level2',
    name: 'Level2',
    component: LayoutOverall,
  },
  {
    path: '/level3',
    name: 'Level3',
    component: LayoutOverall,
  },
  {
    path: '/level4',
    name: 'Level4',
    component: LayoutOverall,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router