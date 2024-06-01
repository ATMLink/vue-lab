import { createRouter, createWebHistory } from 'vue-router';
import LayoutOverall from '../Layouts/LayoutOverall.vue';
import LayoutMain from '../Layouts/LayoutMain.vue';

const routes = [
  {
    path: '/',
    component: LayoutOverall, // 设置为根路由的子路由
    children: [
      {
        path: '', // 默认子路由
        redirect: '/level-0'
      },
      {
        path: 'level-:level(\\d+)?',
        name: 'Level',
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