import { createRouter, createWebHistory } from 'vue-router';
import LayoutOverall from '../Layouts/LayoutOverall.vue';
import LayoutMain from '../Layouts/LayoutMain.vue';

const routes = [
  {
    path: '/',
    component: LayoutOverall,
    children: [
      {
        path: '',
        name: 'Home',
        component: LayoutMain,
        props: { level: 0 },
        children: [
          {
            path: 'level-1',
            component: LayoutMain,
            props: { level: 1 },
            children: [
              {
                path: 'level-2',
                component: LayoutMain,
                props: { level: 2 },
                children: [
                  {
                    path: 'level-3',
                    component: LayoutMain,
                    props: { level: 3 },
                    children: [
                      {
                        path: 'level-4',
                        component: LayoutMain,
                        props: { level: 4 }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
