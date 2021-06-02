import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@/layouts/index.vue';

export const routes = [
  {
    path: '/',
    component: Layout,
    alwaysShow: true,
    meta: { title: '首页', icon: 'el-icon-s-home' },
    children: [
      {
        path: '',
        component: () => import('@/views/home.vue'),
        name: 'home',
      },
    ],
  },
];

// 用工厂函数创建router实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
