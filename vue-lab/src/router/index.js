import { createRouter, createWebHistory } from 'vue-router';
import LayoutOverall from '../Layouts/LayoutOverall.vue';
import LayoutMain from '../Layouts/LayoutMain.vue';

const routes = [
  {
    path: '/',
    component: LayoutOverall,
    children: [
      {
        path: 'level-:level(\\d+)?',
        name: 'Level', // 添加路由名称
        component: LayoutMain,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;