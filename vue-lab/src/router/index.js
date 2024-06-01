import { createRouter, createWebHistory } from 'vue-router';
import LayoutOverall from '../Layouts/LayoutOverall.vue';

const routes = [
  {
    path: '/',
    component: LayoutOverall,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../Layouts/LayoutMain.vue'),
        props: { level: 0 }
      },
      {
        path: 'level-:level(\\d+)',
        component: () => import('../Layouts/LayoutMain.vue'),
        props: route => ({ level: parseInt(route.params.level) })
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;