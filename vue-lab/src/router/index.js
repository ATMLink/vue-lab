import { createRouter, createWebHashHistory } from 'vue-router';
import LayoutOverall from '../Layouts/LayoutOverall.vue';
import LayoutMain from '../Layouts/LayoutMain.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: LayoutOverall,
      children: [
        {
          path: '', // 匹配根路径
          component: LayoutMain,
        },
      ],
    },
  ],
});

export default router;